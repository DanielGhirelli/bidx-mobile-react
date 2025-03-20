import { Stack, useRootNavigationState, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image, View, TouchableOpacity, Linking } from "react-native";

import "./global.css";
import AuthProvider from "@/providers/AuthProvider";
import AppLayout from "@/components/AppLayout";
import HeaderBackground from "@/components/HeaderBackground";
import HeaderLeft from "@/components/HeaderLeft";

export default function RootLayout() {
  return (
    <AuthProvider>
      <AppLayout>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "none",
            contentStyle: { backgroundColor: "transparent" },
          }}
        >
          <Stack.Screen
            name="welcome/index"
            options={{
              title: "",
              headerShown: true,
              headerBackground: () => <HeaderBackground />,
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
            name="login/index"
            options={{
              headerShown: true,
              animation: "default",
              headerBackground: () => <HeaderBackground />,
              headerLeft: () => <HeaderLeft />,
              headerRight: () => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL("https://go.bidx.io/knowledge")
                    }
                  >
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
      </AppLayout>
    </AuthProvider>
  );
}
