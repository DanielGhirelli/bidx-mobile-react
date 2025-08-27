import React from "react";
import { useAuthSession } from "@/providers/AuthProvider";
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { initialized, isAuthenticated } = useAuthSession();

  if (!initialized) {
    return (
      <View className={`flex-1 bg-background items-center justify-center`}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Redirect href={isAuthenticated ? "/(authorized)/(tabs)" : "/welcome"} />
  );
}
