import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import i18n from "../../config/i18n";
import InputIcon from "@/components/InputIcon";
import { useSignIn } from "@/modules/auth/hooks/useSignIn";
import CircularIndicator from "@/components/CircularIndicator";
import { useThemeKey } from "@/hooks/useThemeKey";

export default function Index() {
  const theme = useThemeKey();

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
              theme.find("buttonGradient1"),
              theme.find("buttonGradient2"),
              theme.find("buttonGradient3"),
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

        <View className="flex flex-row items-center justify-center mt-10 mb-10">
          <View className="flex-1 h-[0.4px] bg-gray-400" />
          <Text className="mx-2 text-sm font-source-sans-light text-text-secondary">
            {i18n.t("login.or_sign_in")}
          </Text>
          <View className="flex-1 h-[0.4px] bg-gray-400" />
        </View>

        <TouchableOpacity className="rounded-full border border-button-border bg-button-background p-4 items-center justify-center ">
          <Ionicons
            name="logo-google"
            size={30}
            color={theme.find("textPrimary")}
          />
        </TouchableOpacity>
      </ScrollView>

      <View className="items-center justify-center mb-[60px]">
        <TouchableOpacity
          onPress={() => Linking.openURL("https://go.bidx.io/knowledge")}
        >
          <Text className="font-source-sans-bold text-link text-md mt-10">
            {i18n.t("login.description.button")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
