import React from "react";
import { ImageBackground, View } from "react-native";
import { fetchThemeKey } from "../../themes/bidx";

export default function SignInScreen() {
  return (
    <View className={`flex-1`}>
      <ImageBackground
        source={fetchThemeKey("bodyBackground")}
        className={`flex-1`}
      />
    </View>
  );
}
