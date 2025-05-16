import React from "react";
import { useAuthSession } from "@/providers/AuthProvider";
import { Redirect } from "expo-router";

export default function Index() {
  const { token } = useAuthSession();

  if (token?.current) {
    return <Redirect href="/(authorized)/(tabs)" />;
  }

  return <Redirect href="/welcome" />;
}
