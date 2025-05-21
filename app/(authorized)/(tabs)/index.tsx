import React, { useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { useAuthSession } from "@/providers/AuthProvider";
import AreaChart from "@/components/Charts/AreaChart";
import { Dropdown } from "react-native-element-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useThemeKey } from "@/hooks/useThemeKey";

const data = [
  { label: "General", value: "General" },
  { label: "ACOS", value: "ACOS" },
  { label: "Sales", value: "Sales" },
];

export default function Index() {
  const auth = useAuthSession();
  const theme = useThemeKey();
  const [selectedReport, setSelectedReport] = useState("General");

  if (!auth) return null;

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
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
              borderColor: "red",
              backgroundColor: theme.find("background"),
              paddingHorizontal: 20,
            }}
            placeholderStyle={{ color: theme.find("textSecondary"),  fontSize: 13 }}
            selectedTextStyle={{ color: theme.find("textSecondary"), fontSize: 13 }}
            itemTextStyle={{ color: theme.find("textSecondary"), fontSize: 13 }}
            containerStyle={{ backgroundColor: theme.find("background"), borderRadius: 8, borderColor: theme.find("background") }}
            activeColor={theme.find("cardSecondaryBackground")}
          />
        </View>

        {/* Chart container */}
        <View className="bg-card-background mt-10 rounded-xl">
          <AreaChart />
        </View>

        <Button title="Logout" onPress={auth.signOut} />
      </View>
    </ScrollView>
  );
}
