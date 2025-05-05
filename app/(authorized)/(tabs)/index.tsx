import { View, Text, Button } from "react-native";
import React from "react";
import { useAuthSession } from "@/providers/AuthProvider";
import AreaChart from "@/components/Charts/AreaChart";

export default function Index() {
  const auth = useAuthSession();

  if (!auth) return null;

  return (
    <View className={`flex-1 bg-background`}>
      <View className="bg-card-background mt-20">
        <AreaChart />
      </View>
      <Text className="font-bold text-lg my-10 font-source-sans text-3xl">
        Index
      </Text>
      <Button title="Logout" onPress={auth.signOut} />
    </View>
  );
}
