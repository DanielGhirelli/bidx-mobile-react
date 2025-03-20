import { useAuthSession } from "@/providers/AuthProvider";
import { Redirect, Stack } from "expo-router";
import { ReactNode } from "react";

export default function RootLayout(): ReactNode {
  const { token, isLoading } = useAuthSession();

  console.log(token);

  if (!token?.current) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
