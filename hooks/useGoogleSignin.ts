import { useEffect } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { WEB_CLIENT_ID } from "@/keys/google_cloud";

export default function useGoogleSignin() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);
}
