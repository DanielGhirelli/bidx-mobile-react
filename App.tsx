import React from "react";
import { SplashScreen } from "expo-router";
import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";

import i18n from "./config/i18n";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { FormatterProvider } from "@/context/FormatterContext";
import useLoadFonts from "@/hooks/useLoadFonts";
import useLoadFontAwesome from "@/hooks/useLoadFontAwesome";
import useLoadGoogleSignIn from "@/hooks/useLoadGoogleSignIn";

interface AppProps {
  children: React.ReactNode;
}

export default function App({ children }: AppProps) {
  useLoadFontAwesome();
  useLoadGoogleSignIn();
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
      <FormatterProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </FormatterProvider>
    </I18nextProvider>
  );
}
