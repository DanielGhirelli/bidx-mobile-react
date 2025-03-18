import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

export default function HomeScreen() {
  const auth = useContext(AuthContext);

  if (!auth) return null;

  return (
    <View className={`flex-1 bg-background`}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text className="font-bold text-lg my-10 font-source-sans text-3xl">
          Index
        </Text>
        <Button title="Logout" onPress={auth.signOut} />
      </View>
    </View>
  );
}
