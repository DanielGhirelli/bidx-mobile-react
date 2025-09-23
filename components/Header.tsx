import React from "react";
import { TouchableOpacity, Image, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

// Left Header Component (Back Button)
export function HeaderBack() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 35,
      }}
    >
      <Ionicons name="chevron-back" size={24} color="white" />
    </TouchableOpacity>
  );
}

// Header Component (Logo)
export function HeaderLogo() {
  return (
    <Image
      source={require("../assets/images/bidx_logo_white.png")}
      style={{ width: 80, height: 30, paddingHorizontal: 5 }}
      resizeMode="stretch"
    />
  );
}

// Header Component (Help)
export function HeaderHelp() {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL("https://go.bidx.io/knowledge")}
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 35,
      }}
    >
      <Ionicons name="help-circle" size={27} color="white" />
    </TouchableOpacity>
  );
}

// Header Component (Background)
export function HeaderBackground() {
  return (
    <LinearGradient
      colors={[
        "#13144A",
        "#252666",
        "#424392",
        "#814e7e",
        "#FD6053",
        "#F8F9FA",
      ]}
      start={{ x: 0.5, y: -0.2 }}
      end={{ x: 0.5, y: 1.6 }}
      style={{ flex: 1 }}
    />
  );
}
