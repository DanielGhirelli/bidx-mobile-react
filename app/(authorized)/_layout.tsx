import { Stack } from "expo-router";
import { ReactNode } from "react";

export default function RootLayout(): ReactNode {
  return (
    <Stack
      screenOptions={{
        animation: "none",
        contentStyle: { backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
