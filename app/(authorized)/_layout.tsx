import React from "react";
import { Stack } from "expo-router";
import { ReactNode } from "react";
import AppLayout from "@/components/AppLayout";
import AuthProvider from "@/providers/AuthProvider";

export default function RootLayout(): ReactNode {
  return (
    <AuthProvider>
      <AppLayout>
        <Stack
          screenOptions={{
            animation: "none",
            contentStyle: { backgroundColor: "transparent" },
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </AppLayout>
    </AuthProvider>
  );
}
