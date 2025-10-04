import React from "react";
import { Stack } from "expo-router";
import { ReactNode } from "react";
import { FormatterProvider } from "@/providers/FormatterContext";
import { SentrySetup } from "@/providers/SentrySetup";
import { UserDeviceSetup } from "@/providers/UserDeviceSetup";

export default function RootLayout(): ReactNode {
  return (
    <FormatterProvider>
      <SentrySetup />
      <UserDeviceSetup />
      <Stack
        screenOptions={{
          animation: "none",
          contentStyle: { backgroundColor: "transparent" },
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </FormatterProvider>
  );
}
