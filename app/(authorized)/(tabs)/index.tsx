import React, { useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { useAuthSession } from "@/providers/AuthProvider";
import { Dropdown } from "react-native-element-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useThemeKey } from "@/hooks/useThemeKey";
import GeneralCards from "../cards/general";

const data = [
  { label: "General", value: "general" },
  { label: "ACOS", value: "acos" },
  { label: "Sales", value: "sales" },
];

export default function Index() {
  const auth = useAuthSession();
  if (!auth) return null;

  const theme = useThemeKey();
  const [selectedReport, setSelectedReport] = useState("general");

  return (
    <ScrollView
      className="bg-background"
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 130,
      }}
    >
      <View className="flex-1 bg-background px-4">
        <View className="bg-card-secondary-background mt-5 rounded-xl p-5">
          <View className="flex-row items-center mb-6 ml-2">
            <FontAwesomeIcon
              icon={["far", "chart-scatter"]}
              size={18}
              color={theme.find("textSecondary")}
              style={{ marginRight: 8 }}
            />
            <Text className="font-source-sans-semibold text-text-primary text-xl">
              Analytics
            </Text>
          </View>

          {/* Dropdown */}
          <Dropdown
            data={data}
            labelField="label"
            valueField="value"
            value={selectedReport}
            onChange={(item) => setSelectedReport(item.value)}
            style={{
              height: 50,
              borderRadius: 10,
              borderColor: theme.find("buttonBorder"),
              borderWidth: 1,
              backgroundColor: theme.find("background"),
              paddingHorizontal: 20,
            }}
            placeholderStyle={{
              color: theme.find("textSecondary"),
              fontSize: 14,
            }}
            selectedTextStyle={{
              color: theme.find("textSecondary"),
              fontSize: 14,
            }}
            itemTextStyle={{ color: theme.find("textSecondary"), fontSize: 14 }}
            containerStyle={{
              backgroundColor: theme.find("background"),
              borderRadius: 8,
              borderColor: theme.find("background"),
            }}
            activeColor={theme.find("cardSecondaryBackground")}
          />
        </View>

        {/* Chart container */}
        {selectedReport === "general" && <GeneralCards />}

        <Button title="Logout" onPress={auth.signOut} />
      </View>
    </ScrollView>
  );
}
