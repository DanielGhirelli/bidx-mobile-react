import { useEffect } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export default function useGoogleSignin() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "312625322727-pp1ecka1eth4bbtcubehrrvertj7ca4u.apps.googleusercontent.com", // Web client (firebase)
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);
}
