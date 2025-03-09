import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import i18n from "../i18n";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { fetchThemeKey } from "../themes/bidx";

const WelcomeScreen = () => {
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
          <Image
            source={require("../assets/images/rocket.png")}
            className="w-64 h-64 object-contain"
          />

          <Text className="text-text-primary text-2xl font-source-sans-bold text-center mt-5">
            {i18n.t("welcome.title")}
          </Text>
          <Text className="text-text-secondary text-lg font-source-sans-semibold text-center mt-2">
            {i18n.t("welcome.sub_title_bold")}
          </Text>
          <Text className="text-text-secondary text-base text-center mt-1 mb-20">
            {i18n.t("welcome.sub_title")}
          </Text>

          <TouchableOpacity
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

          <Text className="text-text-secondary text-sm text-center mt-3">
            {i18n.t("welcome.signup_description")}
          </Text>
        </ScrollView>
      </ImageBackground>

      {/* Bottom Section with White Background */}
      <View
        className="bg-background"
        style={{
          paddingVertical: 16,
          shadowColor: fetchThemeKey("primary"),
          shadowOpacity: 0.4,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 1 }, 
          elevation: 1,
        }}
      >
        <View className="flex-row justify-evenly mb-5">
          <TouchableOpacity className="ml-7 flex-1 flex-row items-center justify-center py-3 mx-2 rounded-full bg-bottom-bar-secondary-shadow">
            <Text className="text-lg font-semibold text-text-primary primary-dark mr-2">
              Google
            </Text>
            <Ionicons
              name="logo-google"
              size={22}
              color={fetchThemeKey("textPrimary")}
            />
          </TouchableOpacity>

          <TouchableOpacity className="mr-7 flex-1 items-center justify-center py-3 mx-2 rounded-full bg-bottom-bar-secondary-shadow">
            <Text className="text-lg font-semibold text-text-primary">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
