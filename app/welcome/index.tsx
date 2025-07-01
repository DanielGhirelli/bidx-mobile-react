import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

import i18n from "../../config/i18n";
import { useThemeKey } from "@/hooks/useThemeKey";
import { useFirebaseGoogleLogin } from "@/services/googleLogin";

export default function Index() {
  const theme = useThemeKey();

  const { promptAsync, request } = useFirebaseGoogleLogin(
    async (googleUser) => {
      const payload = {
        google_id: googleUser.google_id,
        user_data: {
          email: googleUser.email,
          given_name: googleUser.given_name,
          family_name: googleUser.family_name,
        },
      };

      await fetch("https://your-api.com/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }
  );

  return (
    <View className={`flex-1`}>
      <ImageBackground
        source={theme.find("bodyBackground")}
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
          <Image
            source={require("../../assets/images/welcome_1.png")}
            className="w-96 h-96 object-contain"
          />

          <Text className="font-source-sans-light text-text-primary text-3xl text-center mt-5 mb-[50px]">
            {i18n.t("welcome.title")}
            <Text className="font-source-sans-semibold">
              {i18n.t("welcome.title_2")}
            </Text>
            {i18n.t("welcome.title_3")}
            <Text className="font-source-sans-semibold">
              {i18n.t("welcome.title_4")}
            </Text>
          </Text>

          <Link href="/login" asChild>
            <TouchableOpacity className="mb-5 w-full rounded overflow-hidden">
              <LinearGradient
                colors={theme.find("buttonGradient")}
                locations={[0.4, 0.9, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ width: "100%", padding: 12, alignItems: "center" }}
              >
                <Text className="font-source-sans text-white text-[20px] font-medium">
                  {i18n.t("welcome.signin_button")}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity
            onPress={() => promptAsync()}
            disabled={!request}
            className="mb-5 w-full rounded border border-button-border bg-button-background p-3"
          >
            <View className="flex-row items-center justify-center">
              <Ionicons
                name="logo-google"
                size={22}
                color={theme.find("textPrimary")}
                style={{ marginRight: 8 }}
              />
              <Text className="font-source-sans text-text-primary text-[20px]">
                {i18n.t("welcome.signin_with_google_button")}
              </Text>
            </View>
          </TouchableOpacity>

          <Text className="font-source-sans text-text-primary text-md text-center mt-3">
            {i18n.t("welcome.not_registered")}
            <Link href="/login" asChild>
              <Text className="font-source-sans-semibold text-link text-md underline">
                {i18n.t("welcome.not_registered_link")}
              </Text>
            </Link>
          </Text>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
