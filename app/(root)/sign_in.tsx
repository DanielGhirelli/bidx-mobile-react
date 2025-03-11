import React from "react";
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import { fetchThemeKey } from "../../themes/bidx";
import { LinearGradient } from "expo-linear-gradient";

import i18n from "../../i18n";
import { Link, useRouter } from "expo-router";

export default function SignInScreen() {
  const router = useRouter();

  const handleSignIn = async () => {
    router.push("/(tabs)");
  };

  return (
    <View className={`flex-1`}>
      <ImageBackground
        source={fetchThemeKey("bodyBackground")}
        className={`flex-1`}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <TouchableOpacity
            onPress={handleSignIn}
            style={{ width: "100%", borderRadius: 8, overflow: "hidden" }}
          >
            <LinearGradient
              colors={[
                fetchThemeKey("buttonGradient1"),
                fetchThemeKey("buttonGradient2"),
                fetchThemeKey("buttonGradient3"),
              ]}
              locations={[0.4, 0.9, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ width: "100%", padding: 14, alignItems: "center" }}
            >
              <Text style={{ fontSize: 18, fontWeight: "400", color: "white" }}>
                {i18n.t("welcome.signup_button")}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
