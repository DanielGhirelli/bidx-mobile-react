import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Linking,
} from "react-native";
import { fetchThemeKey } from "../themes/base";
import { LinearGradient } from "expo-linear-gradient";

import InputIcon from "@/components/InputIcon";
import { useSignIn } from "@/modules/auth/hooks/useSignIn";
import i18n from "../config/i18n";
import CircularIndicator from "@/components/CircularIndicator";
import { Ionicons } from "@expo/vector-icons";

export default function SignInScreen() {
  const {
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    passwordError,
    isPasswordVisible,
    setIsPasswordVisible,
    loading,
    handleLogin,
    handleGoogleLogin,
  } = useSignIn();

  return (
    <View className={`flex-1 bg-background`}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          padding: 24,
        }}
      >
        <InputIcon
          icon="envelope"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          errorMessage={emailError}
        />
        <InputIcon
          icon="lock"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
          isPassword
          togglePassword={() => setIsPasswordVisible(!isPasswordVisible)}
          errorMessage={passwordError}
        />

        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://app.bidx.io/en/password/reset")
          }
          style={{ alignSelf: "flex-start" }}
        >
          <Text className="font-source-sans text-text-primary text-md mb-14">
            {i18n.t("login.forgot_password")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLogin}
          disabled={loading}
          style={{ width: "100%", borderRadius: 5, overflow: "hidden" }}
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
            style={{ width: "100%", padding: 12, alignItems: "center" }}
          >
            <CircularIndicator
              loading={loading}
              text={i18n.t("core.continue")}
            />
          </LinearGradient>
        </TouchableOpacity>

        <View className="flex flex-row items-center justify-center mt-6 mb-6">
          <View className="flex-1 h-[0.4px] bg-gray-400" />
          <Text className="mx-2 text-lg font-source-sans-bold text-text-primary">
            OR
          </Text>
          <View className="flex-1 h-[0.4px] bg-gray-400" />
        </View>

        <TouchableOpacity
          onPress={handleGoogleLogin}
          disabled={loading}
          style={{ width: "100%", borderRadius: 5, overflow: "hidden" }}
        >
          <LinearGradient
            colors={[
              fetchThemeKey("buttonSecondaryGradient1"),
              fetchThemeKey("buttonSecondaryGradient2"),
              fetchThemeKey("buttonSecondaryGradient3"),
            ]}
            locations={[0.4, 0.9, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              width: "100%",
              padding: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              className="font-source-sans ml-2"
              style={{ fontSize: 20, fontWeight: "500", color: "white" }}
            >
              {i18n.t("login.google_button")}
            </Text>
            <Ionicons
              className="mr-2"
              name="logo-google"
              size={22}
              color="white"
            />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL("https://go.bidx.io/knowledge")}
        >
          <Text className="font-source-sans-bold text-link text-md mt-9">
            {i18n.t("login.description.button")}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
