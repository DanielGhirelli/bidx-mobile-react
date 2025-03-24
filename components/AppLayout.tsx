import { SplashScreen } from "expo-router";
import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";

import i18n from "../config/i18n";
import { ThemeProvider } from "@/providers/ThemeProvider";
import useLoadFonts from "@/hooks/useLoadFonts";
import useLoadFontAwesome from "@/hooks/useLoadFontAwesome";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  useLoadFontAwesome();
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
}
