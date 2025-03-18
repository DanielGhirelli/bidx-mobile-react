import { SplashScreen, Stack } from "expo-router";
import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";

import i18n from "../config/i18n";
import { ThemeProvider } from "@/providers/ThemeProvider";
import HeaderLeft from "@/components/HeaderLeft";
import HeaderBackground from "@/components/HeaderBackground";
import useLoadFonts from "@/hooks/useLoadFonts";
import { AuthProvider } from "@/providers/AuthProvider";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
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
      <ThemeProvider>
        <AuthProvider>
          <Stack
            screenOptions={{
              headerLeft: () => <HeaderLeft />,
              contentStyle: { backgroundColor: "transparent" },
              headerBackground: () => <HeaderBackground />,
            }}
          >
            {children}
          </Stack>
        </AuthProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}
