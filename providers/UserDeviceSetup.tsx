import { useCallback, useEffect } from "react";
import { Platform } from "react-native";
import { getMessaging, getToken } from "@react-native-firebase/messaging";
import useFirebaseMessaging from "@/hooks/useFirebaseMessaging";
import { useAuthSession } from "./AuthProvider";
import UserService from "@/modules/user/service/UserService";
import { getApp } from "@react-native-firebase/app";

export function UserDeviceSetup() {
  const { isUserSwitched } = useAuthSession();

  const registerDevice = useCallback(
    async (token: string | null) => {
      if (!token) return;

      const switched = await isUserSwitched();
      if (!switched) {
        await UserService.registerDevice({ token, platform: Platform.OS });
      }
    },
    [isUserSwitched]
  );

  // Listen for token updates (refresh events)
  useFirebaseMessaging({
    onToken: (token) => registerDevice(token),
  });

  // Register initial token when component mounts
  useEffect(() => {
    (async () => {
      try {
        const app = getApp();
        const m = getMessaging(app);
        const token = await getToken(m);

        await registerDevice(token);
      } catch (err) {
        console.warn("Failed to register device token:", err);
      }
    })();
  }, [registerDevice]);

  return null;
}
