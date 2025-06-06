import { View, Text } from "react-native";
import React from "react";

export default function Profile() {
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
          Profileeeeeee
        </Text>
      </View>
    </View>
  );
}
