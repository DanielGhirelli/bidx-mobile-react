import { ImageBackground } from "react-native";

export default function HeaderBackground() {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    />
  );
}
