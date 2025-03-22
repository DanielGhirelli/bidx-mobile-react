import HeaderBackground from "@/components/Header/HeaderBackground";
import { Stack } from "expo-router";
import { ReactNode } from "react";

export default function RootLayout(): ReactNode {
  return (
    <Stack
      screenOptions={{
        animation: "none",
        contentStyle: { backgroundColor: "transparent" },
        headerBackground: () => <HeaderBackground />,
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
