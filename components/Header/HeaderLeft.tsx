import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function HeaderLeft() {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name="chevron-back" size={24} color="white" />
    </TouchableOpacity>
  );
}
