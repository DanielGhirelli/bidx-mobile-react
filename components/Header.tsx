import React from "react";
import {
  TouchableOpacity,
  Image,
  ImageBackground,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Left Header Component (Back Button)
export function HeaderBack() {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name="chevron-back" size={24} color="white" />
    </TouchableOpacity>
  );
}

// Header Component (Logo)
export function HeaderLogo() {
  return (
    <Image
      source={require("../assets/images/logo_white.png")}
      style={{ width: 70, height: 30 }}
      resizeMode="stretch"
    />
  );
}

// Header Component (Help)
export function HeaderHelp() {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL("https://go.bidx.io/knowledge")}
    >
      <Ionicons name="help-circle" size={27} color="white" />
    </TouchableOpacity>
  );
}

// Header Component (Background)
export function HeaderBackground() {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    />
  );
}
