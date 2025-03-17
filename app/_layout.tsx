import { Stack } from "expo-router";
import { Image, Linking, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import AppLayout from "@/components/AppLayout";
import "./global.css";

export default function RootLayout() {
  return (
    <AppLayout>
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
        name="sign_in"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => Linking.openURL("https://go.bidx.io/knowledge")}
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
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </AppLayout>
  );
}
