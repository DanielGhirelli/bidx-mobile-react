import { Stack } from "expo-router";
import { Image, View } from "react-native";

import AppLayout from "@/components/AppLayout";
import "../global.css";

export default function TabLayout() {
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
                source={require("../../assets/images/logo_white.png")}
                style={{ width: 70, height: 30 }}
                resizeMode="stretch"
              />
            </View>
          ),
        }}
      />
    </AppLayout>
  );
}
