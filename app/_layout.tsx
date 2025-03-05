import { SplashScreen, Stack } from "expo-router";
import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";

import i18n from "../i18n";
import useLoadFonts from "@/hooks/useLoadFonts";
import './global.css';
import { Image, ImageBackground, View } from "react-native";
import HeaderBackground from "@/components/HeaderBackground";

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
      <Stack
        screenOptions={{
          headerBackground: () => <HeaderBackground />,
          headerStyle: { backgroundColor: "transparent" },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: '',
            headerTitle: () => (
              <View style={{ flex: 1, alignItems: 'flex-start', left: -5 }}>
                <Image 
                  source={require('../assets/images/logo_white.png')} 
                  style={{ width: 70, height: 30 }}
                  resizeMode="stretch"
                />
              </View>
            ),
          }}
        />
      </Stack>
    </I18nextProvider>
  );
}
