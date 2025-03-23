import { View, Text, Button } from "react-native";
import React from "react";
import { useAuthSession } from "@/providers/AuthProvider";

export default function Management() {
  const auth = useAuthSession();

  if (!auth) return null;

  return (
    <View className={`flex-1 bg-background`}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text className="font-bold text-lg my-10 font-source-sans text-3xl">
          MANAGEMENT
        </Text>
      </View>
    </View>
  );
}
