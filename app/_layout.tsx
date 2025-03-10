import { SplashScreen, Stack, useRouter } from "expo-router";
import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";
import { Image, Linking, TouchableOpacity, View } from "react-native";

import i18n from "../i18n";
import "./global.css";
import useLoadFonts from "@/hooks/useLoadFonts";
import HeaderBackground from "@/components/HeaderBackground";
import { ThemeProvider } from "@/providers/ThemeProviders";
import { Ionicons } from "@expo/vector-icons";

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
            headerLeft: () => {
              const router = useRouter();
              return (
                <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
              );
            },
            contentStyle: { backgroundColor: 'transparent' },
            headerBackground: () => <HeaderBackground />,
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "",
              headerLeft: () => false,
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
          <Stack.Screen
            name="(root)/sign_in"
            options={{
              headerRight: () => {
                return (
                  <TouchableOpacity onPress={() => Linking.openURL("https://go.bidx.io/knowledge")}>
                    <Ionicons name="help-circle" size={27} color="white" />
                  </TouchableOpacity>
                );
              },
              headerTitle: () => (
                <View>
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
