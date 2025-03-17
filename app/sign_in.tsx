import React from "react";
import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { fetchThemeKey } from "../themes/base";
import { LinearGradient } from "expo-linear-gradient";

import InputIcon from "@/components/InputIcon";
import { useSignIn } from "@/modules/auth/hooks/useSignIn";
import i18n from "../config/i18n";
import CircularIndicator from "@/components/CircularIndicator";

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
          onPress={handleLogin}
          disabled={loading}
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
            <CircularIndicator
              loading={loading}
              text={i18n.t("core.continue")}
            />
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
