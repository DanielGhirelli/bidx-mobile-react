import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { useThemeKey } from "@/hooks/useThemeKey";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Platform } from "react-native";

export default function InputIcon({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  isPassword = false,
  togglePassword,
  errorMessage,
  ...rest
}: {
  icon: IconName;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  isPassword?: boolean;
  togglePassword?: () => void;
  errorMessage?: string;
} & TextInputProps) {
  const theme = useThemeKey();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`w-full ${!errorMessage ? "mb-5" : "mb-3"}`}>
      <View
        className={`border 
          ${isFocused ? "border-text-hover" : errorMessage ? "border-error" : "border-gray-500"} 
          bg-background rounded-lg flex-row items-center`}
        style={{
          paddingVertical: Platform.OS === "android" ? 8 : 20,
          paddingHorizontal: Platform.OS === "android" ? 12 : 20,
        }}
      >
        {/* Left Icon */}
        <FontAwesomeIcon
          icon={["far", icon]}
          size={20}
          color={theme.find("textSecondary")}
          style={{ marginRight: 16 }}
        />

        {/* Input Field */}
        <TextInput
          className={`flex-1 font-source-sans text-xl text-text-secondary`}
          autoCapitalize="none"
          placeholder={placeholder}
          placeholderTextColor={theme.find("textPlaceholder")}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />

        {/* Password Visibility Toggle */}
        {isPassword && togglePassword && (
          <TouchableOpacity
            className="absolute right-6"
            onPress={togglePassword}
          >
            <FontAwesome
              name={secureTextEntry ? "eye-slash" : "eye"}
              size={20}
              color={theme.find("textSecondary")}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Display Validation Error */}
      {errorMessage ? (
        <Text className="text-error text-md mt-2 ml-2 mb-3 font-source-sans">
          {errorMessage}
        </Text>
      ) : null}
      {""}
    </View>
  );
}
