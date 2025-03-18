import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { fetchThemeKey } from "../themes/base";
import { useState } from "react";

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
  icon: keyof typeof FontAwesome.glyphMap;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  isPassword?: boolean;
  togglePassword?: () => void;
  errorMessage?: string;
} & TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`w-full ${!errorMessage ? "mb-5" : "mb-3"}`}>
      <View
        className={`border 
          ${isFocused ? "border-button" : errorMessage ? "border-error" : "border-gray-500"} 
          bg-background rounded-lg flex-row items-center p-5`}
      >
        {/* Left Icon */}
        <FontAwesome
          name={icon}
          size={20}
          color={fetchThemeKey("textSecondary")}
          style={{ marginRight: 16 }}
        />

        {/* Input Field */}
        <TextInput
          className={`flex-1 font-source-sans text-xl text-text-secondary`}
          autoCapitalize="none"
          placeholder={placeholder}
          placeholderTextColor={fetchThemeKey("textPlaceholder")}
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
              color={fetchThemeKey("textSecondary")}
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
