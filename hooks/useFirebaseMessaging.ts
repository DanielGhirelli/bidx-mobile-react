import { useEffect, useRef, useState } from "react";
import { Platform, PermissionsAndroid } from "react-native";
import { getApp } from "@react-native-firebase/app";
import {
  FirebaseMessagingTypes,
  getMessaging,
  requestPermission as messagingRequestPermission,
  getToken as messagingGetToken,
  onMessage as messagingOnMessage,
  onTokenRefresh as messagingOnTokenRefresh,
  AuthorizationStatus,
  onNotificationOpenedApp,
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
  const tokenUnsubRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const init = async () => {
      const app = getApp();
      const m = getMessaging(app);

      // iOS permission
      if (Platform.OS === "ios") {
        const status = await messagingRequestPermission(m);
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

      const fcmToken = await messagingGetToken(m);
      setToken(fcmToken);
      onToken?.(fcmToken, Platform.OS);

      // Foreground messages
      msgUnsubRef.current = messagingOnMessage(m, (rm) => {
        onForegroundMessage?.(rm);
      });

      msgUnsubRef.current = onNotificationOpenedApp(m, (rm) => {
        onMessageOpen?.(rm);
      });

      // Token refresh
      tokenUnsubRef.current = messagingOnTokenRefresh(m, (t) => {
        setToken(t);
        onToken?.(t, Platform.OS);
      });
    };

    void init();

    return () => {
      msgUnsubRef.current?.();
      tokenUnsubRef.current?.();
    };
  }, [onForegroundMessage, onMessageOpen, onToken]);

  return { token };
}
