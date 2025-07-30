import React from "react";
import { Stack } from "expo-router";
import { ReactNode } from "react";
import App from "@/App";
import AuthProvider from "@/providers/AuthProvider";

export default function RootLayout(): ReactNode {
  return (
    <AuthProvider>
      <App>
        <Stack
          screenOptions={{
            animation: "none",
            contentStyle: { backgroundColor: "transparent" },
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </App>
    </AuthProvider>
  );
}
