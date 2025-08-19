import { useEffect, useRef, useState } from "react";
import { Platform } from "react-native";
import { getApp } from "@react-native-firebase/app";
import {
  FirebaseMessagingTypes,
  getMessaging,
  requestPermission as messagingRequestPermission,
  getToken as messagingGetToken,
  onMessage as messagingOnMessage,
  onTokenRefresh as messagingOnTokenRefresh,
  AuthorizationStatus,
} from "@react-native-firebase/messaging";
import notifee, { AndroidImportance } from "@notifee/react-native";

type UseFirebaseMessagingOptions = {
  onMessage?: (msg: FirebaseMessagingTypes.RemoteMessage) => void;
  onToken?: (token: string) => void;
};

export default function useFirebaseMessaging({
  onMessage,
  onToken,
}: UseFirebaseMessagingOptions = {}) {
  const [token, setToken] = useState<string | null>(null);
  const msgUnsubRef = useRef<(() => void) | null>(null);
  const tokenUnsubRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      const app = getApp();
      const m = getMessaging(app);

      // iOS permission : code
      if (Platform.OS === "ios") {
        const status = await messagingRequestPermission(m);
        const enabled =
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL;
        if (!enabled) return;
      }

      // Android permission : automatically called under `app.json`
      if (Platform.OS === "android") {
        await notifee.createChannel({
          id: "bidx-notification",
          name: "BidX",
          description: "This is the default notification channel for BidX.",
          importance: AndroidImportance.DEFAULT,
        });
      }
      const fcmToken = await messagingGetToken(m);
      if (!mounted) return;

      setToken(fcmToken);
      onToken?.(fcmToken);

      // Foreground messages
      msgUnsubRef.current = messagingOnMessage(m, (rm) => {
        onMessage?.(rm);
      });

      // Token refresh
      tokenUnsubRef.current = messagingOnTokenRefresh(m, (t) => {
        setToken(t);
        onToken?.(t);
      });
    };

    void init();

    return () => {
      mounted = false;
      msgUnsubRef.current?.();
      tokenUnsubRef.current?.();
    };
  }, [onMessage, onToken]);

  return { token };
}
