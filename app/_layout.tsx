import { SplashScreen, Stack } from "expo-router";
import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";
import { Image, View } from "react-native";

import i18n from "../i18n";
import "./global.css";
import useLoadFonts from "@/hooks/useLoadFonts";
import HeaderBackground from "@/components/HeaderBackground";
import { ThemeProvider } from "@/providers/ThemeProviders";

export default function RootLayout() {
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
        <Stack
          screenOptions={{
            headerBackground: () => <HeaderBackground />,
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerTitle: () => (
                <View style={{ flex: 1, left: -5 }}>
                  <Image
                    source={require("../assets/images/logo_white.png")}
                    style={{ width: 70, height: 30 }}
                    resizeMode="stretch"
                  />
                </View>
              ),
            }}
          />
        </Stack>
      </ThemeProvider>
    </I18nextProvider>
  );
}
