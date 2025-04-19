import { View, Text, Button } from "react-native";
import React from "react";
import { useAuthSession } from "@/providers/AuthProvider";
import AreaChart from "@/modules/kpi/components/AreaChart";

export default function Index() {
  const auth = useAuthSession();

  if (!auth) return null;

  return (
    <View className={`flex-1 bg-background`}>
      <View
        className="bg-card-background mt-10"
        style={{
          height: 300,
          paddingTop: 100,
        }}
      >
        <AreaChart />
      </View>
      <Text className="font-bold text-lg my-10 font-source-sans text-3xl">
        Index
      </Text>
      <Button title="Logout" onPress={auth.signOut} />
    </View>
  );
}
