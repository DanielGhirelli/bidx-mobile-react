import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { fetchThemeKey } from "@/themes/bidx";

export default function HomeScreen() {
  return (
    <View className={`flex-1`}>
      <ImageBackground
        source={fetchThemeKey("bodyBackground")}
        className={`flex-1`}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text className="font-bold text-lg my-10 font-source-sans text-3xl">
            Index
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
