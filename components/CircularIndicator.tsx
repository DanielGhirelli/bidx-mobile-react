import { fetchThemeKey } from "@/themes/base";
import React from "react";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";

interface CircularIndicatorProps {
  loading?: boolean;
  text?: string;
}

export default function CircularIndicator({
  loading = false,
  text,
}: CircularIndicatorProps) {
  return (
    <View>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={fetchThemeKey("circularProgress")}
        />
      ) : (
        <Text
          className="font-source-sans"
          style={{ fontSize: 20, fontWeight: "500", color: "white" }}
        >
          {text}
        </Text>
      )}
    </View>
  );
}
