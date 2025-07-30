import React from "react";
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
import Auth from "@/modules/auth/auth";

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN ?? "",
  sendDefaultPii: true,
});

interface AppProps {
  children?: React.ReactNode;
}

export default Sentry.wrap(function App({ children }: AppProps) {
  useLoadFontAwesome();
  useLoadGoogleSignIn();
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
