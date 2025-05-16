import React from "react";
import { Stack } from "expo-router";

import "./global.css";
import AuthProvider from "@/providers/AuthProvider";
import AppLayout from "@/components/AppLayout";
import {
  HeaderBack,
  HeaderLogo,
  HeaderBackground,
  HeaderHelp,
} from "@/components/Header";

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
              headerLeft: () => <HeaderLogo />,
              headerTitle: () => null,
            }}
          />
          <Stack.Screen
            name="login/index"
            options={{
              headerShown: true,
              animation: "default",
              headerBackground: () => <HeaderBackground />,
              headerLeft: () => <HeaderBack />,
              headerRight: () => <HeaderHelp />,
              headerTitle: () => <HeaderLogo />,
            }}
          />
        </Stack>
      </AppLayout>
    </AuthProvider>
  );
}
