import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { useEffect } from "react";
import { Platform } from "react-native";
import {
  ANDROID_CLIENT_ID,
  IOS_CLIENT_ID,
  WEB_CLIENT_ID,
} from "@/keys/google_cloud";

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  tokenEndpoint: "https://oauth2.googleapis.com/token",
  revocationEndpoint: "https://oauth2.googleapis.com/revoke",
};

export default function useGoogleAuth() {
  const redirectUri = AuthSession.makeRedirectUri({
    scheme: "bidx-mobile-app",
  });

  const clientId =
    Platform.OS === "android"
      ? ANDROID_CLIENT_ID
      : Platform.OS === "ios"
        ? IOS_CLIENT_ID
        : WEB_CLIENT_ID;

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId,
      redirectUri,
      scopes: ["openid", "profile", "email"],
    },
    discovery
  );

  useEffect(() => {
    console.log(response);
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("Access Token", authentication?.accessToken);
    }
  }, [response]);

  return {
    signIn: () => promptAsync({}),
    request,
    response,
  };
}
