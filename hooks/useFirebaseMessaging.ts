import { useEffect, useRef, useState } from "react";
import { Platform, PermissionsAndroid } from "react-native";
import { getApp } from "@react-native-firebase/app";
import {
  AuthorizationStatus,
  FirebaseMessagingTypes,
  getMessaging,
  requestPermission,
  getToken,
  onMessage,
  onNotificationOpenedApp,
  onTokenRefresh,
} from "@react-native-firebase/messaging";
import notifee, { AndroidImportance } from "@notifee/react-native";

type UseFirebaseMessagingOptions = {
  onForegroundMessage?: (msg: FirebaseMessagingTypes.RemoteMessage) => void;
  onMessageOpen?: (msg: FirebaseMessagingTypes.RemoteMessage) => void;
  onToken?: (token: string, platform: string) => void;
};

export default function useFirebaseMessaging({
  onForegroundMessage,
  onMessageOpen,
  onToken,
}: UseFirebaseMessagingOptions = {}) {
  const [token, setToken] = useState<string | null>(null);
  const msgUnsubRef = useRef<(() => void) | null>(null);
  const openUnsubRef = useRef<(() => void) | null>(null);
  const tokenUnsubRef = useRef<(() => void) | null>(null);

  const initialized = useRef(false); // prevent StrictMode duplicate init in dev

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const init = async () => {
      const app = getApp();
      const m = getMessaging(app);

      // iOS permission
      if (Platform.OS === "ios") {
        const status = await requestPermission(m);
        const enabled =
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL;
        if (!enabled) return;
      }

      // Android permission
      if (Platform.OS === "android") {
        const status = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
        );
        if (status !== "granted") return;

        await notifee.createChannel({
          id: "bidx-notification",
          name: "BidX",
          description: "This is the default notification channel for BidX.",
          importance: AndroidImportance.HIGH,
        });
      }

      // token
      const fcmToken = await getToken(m);
      if (fcmToken && fcmToken !== token) {
        setToken(fcmToken);
        onToken?.(fcmToken, Platform.OS);
      }

      // android-foreground
      msgUnsubRef.current = onMessage(m, (rm) => {
        if (Platform.OS === "android") {
          onForegroundMessage?.(rm);
        }
      });

      // opened from background or ios-foreground
      openUnsubRef.current = onNotificationOpenedApp(m, (rm) => {
        onMessageOpen?.(rm);
      });

      // token refresh
      tokenUnsubRef.current = onTokenRefresh(m, (t) => {
        if (t && t !== token) {
          setToken(t);
          onToken?.(t, Platform.OS);
        }
      });
    };

    void init();

    return () => {
      msgUnsubRef.current?.();
      openUnsubRef.current?.();
      tokenUnsubRef.current?.();
    };
  }, [onForegroundMessage, onMessageOpen, onToken]);

  return { token };
}
