import React, { useCallback } from "react";
import { SplashScreen } from "expo-router";
import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";
import * as Sentry from "@sentry/react-native";

import i18n from "./config/i18n";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { FormatterProvider } from "@/context/FormatterContext";
import useLoadFonts from "@/hooks/useLoadFonts";
import useLoadFontAwesome from "@/hooks/useLoadFontAwesome";
import useLoadGoogleSignIn from "@/hooks/useLoadGoogleSignIn";
import useFirebaseMessaging from "@/hooks/useFirebaseMessaging";
import Auth from "@/modules/auth/auth";
import notifee from "@notifee/react-native";
import { useAuthSession } from "./providers/AuthProvider";
import UserService from "./modules/user/service/UserService";

// 📚 Initialize Sentry
Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN ?? "",
  sendDefaultPii: true,
});

interface AppProps {
  children?: React.ReactNode;
}

export default Sentry.wrap(function App({ children }: AppProps) {
  // ⚙️ General Init
  const { isAuthenticated, isUserSwitched } = useAuthSession();
  useLoadFontAwesome();
  useLoadGoogleSignIn();

  // 🔔 Initialize Firebase Messaging
  const handleToken = useCallback(
    async (token: string, platform: string) => {
      const switched = await isUserSwitched();
      if (!switched) {
        await UserService.registerDevice({ token, platform });
      }
    },
    [isUserSwitched]
  );

  const handleMessageOpen = useCallback(
    async (msg: any) => {
      if (isAuthenticated) {
        console.log("Message Opened:", msg);
      }
    },
    [isAuthenticated]
  );

  const handleForegroundMessage = useCallback(async (msg: any) => {
    await notifee.displayNotification({
      title: msg?.notification?.title,
      body: msg?.notification?.body,
      android: {
        channelId: "bidx-notification",
      },
      ios: {
        badgeCount: Number(msg.data?.badge) || 1,
        foregroundPresentationOptions: {
          alert: true,
          sound: true,
          badge: true,
        },
      },
    });
  }, []);

  const { token: fcmToken } = useFirebaseMessaging({
    onToken: handleToken,
    onForegroundMessage: handleForegroundMessage,
    onMessageOpen: handleMessageOpen,
  });

  // 🔤 Initialize Fonts
  const fontsLoaded = useLoadFonts();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();

      Auth.getUserCompany().then((company) => {
        if (!company?.user?.id) return;

        Sentry.setContext("Secure Store", {
          companyId: company.user.companyId,
          userId: company.user.id,
        });
      });
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <FormatterProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </FormatterProvider>
    </I18nextProvider>
  );
});
