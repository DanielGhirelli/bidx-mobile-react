import { Stack } from "expo-router";
import { I18nextProvider } from "react-i18next";
import { Image, View } from "react-native";

import i18n from "../../i18n";
import "../global.css";
import HeaderBackground from "@/components/HeaderBackground";
import { ThemeProvider } from "@/providers/ThemeProviders";
import HeaderLeft from "@/components/HeaderLeft";

export default function TabLayout() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <Stack
          screenOptions={{
            headerLeft: () => <HeaderLeft />,
            contentStyle: { backgroundColor: "transparent" },
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
                    source={require("../../assets/images/logo_white.png")}
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
