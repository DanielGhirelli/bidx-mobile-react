import React, { useCallback } from "react";
import { SplashScreen } from "expo-router";
import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";
import * as Sentry from "@sentry/react-native";

import i18n from "./config/i18n";
import { ThemeProvider } from "@/providers/ThemeProvider";
import useLoadFonts from "@/hooks/useLoadFonts";
import useLoadFontAwesome from "@/hooks/useLoadFontAwesome";
import useLoadGoogleSignIn from "@/hooks/useLoadGoogleSignIn";
import useFirebaseMessaging from "@/hooks/useFirebaseMessaging";
import notifee from "@notifee/react-native";
import { useAuthSession } from "./providers/AuthProvider";

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
  const { hasValidToken } = useAuthSession();
  useLoadFontAwesome();
  useLoadGoogleSignIn();

  // 🔔 Initialize Firebase Messaging
  const showForegroundMessage = useCallback(async (msg: any) => {
    console.log("Initial showForegroundMessage");

    await notifee.displayNotification({
      title: msg?.notification?.title,
      body: msg?.notification?.body,
      data: msg?.data,
      android: {
        channelId: "bidx-notification",
      },
    });
  }, []);

  const handleMessageOpen = useCallback(
    async (msg: any) => {
      const token = await hasValidToken();

      if (token) {
        console.log("Message Opened:", msg);
      }
    },
    [hasValidToken]
  );

  useFirebaseMessaging({
    onForegroundMessage: showForegroundMessage,
    onMessageOpen: handleMessageOpen,
  });

  // 🔤 Initialize Fonts
  const fontsLoaded = useLoadFonts();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>{children}</ThemeProvider>
    </I18nextProvider>
  );
});
