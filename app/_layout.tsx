import { SplashScreen, Stack } from "expo-router";
import { I18nextProvider } from "react-i18next";
import { useFonts } from "expo-font";
import { useEffect } from "react";

import i18n from "../i18n";
import './global.css';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "SourceSans3-Bold": require("../assets/fonts/SourceSans3-Bold.ttf"),
    "SourceSans3-ExtraBold": require("../assets/fonts/SourceSans3-ExtraBold.ttf"),
    "SourceSans3-ExtraLight": require("../assets/fonts/SourceSans3-ExtraLight.ttf"),
    "SourceSans3-Italic": require("../assets/fonts/SourceSans3-Italic.ttf"),
    "SourceSans3-Light": require("../assets/fonts/SourceSans3-Light.ttf"),
    "SourceSans3-Medium": require("../assets/fonts/SourceSans3-Medium.ttf"),
    "SourceSans3-Regular": require("../assets/fonts/SourceSans3-Regular.ttf"),
    "SourceSans3-SemiBold": require("../assets/fonts/SourceSans3-SemiBold.ttf"),
  });  

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
      <Stack screenOptions={{ headerShown: false }} />
    </I18nextProvider>
  );
}
