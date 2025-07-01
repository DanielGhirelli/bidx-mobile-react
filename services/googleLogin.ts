import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import React from "react";
import { auth } from "./firebase";

WebBrowser.maybeCompleteAuthSession();

export function useFirebaseGoogleLogin(
  callback: (profile: {
    google_id: string;
    email: string | null;
    given_name: string;
    family_name: string;
  }) => Promise<void>
) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "312625322727-8edbpoeh78ud8cf03va3blp9iuq1e6uk.apps.googleusercontent.com",
    iosClientId: "312625322727-0pfvdg6vnf2favbisbp7bs6fsdmg0p2n.apps.googleusercontent.com",
    webClientId: "312625322727-pp1ecka1eth4bbtcubehrrvertj7ca4u.apps.googleusercontent.com",
    selectAccount: true,
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const idToken = response.authentication?.idToken;

      if (!idToken) {
        console.error("Google idToken not found.");
        return;
      }

      const credential = GoogleAuthProvider.credential(idToken);

      signInWithCredential(auth, credential)
        .then(async (userCredential) => {
          const user = userCredential.user;
          const nameParts = user.displayName?.split(" ") || [];

          const profile = {
            google_id: user.uid,
            email: user.email,
            given_name: nameParts[0] ?? "",
            family_name: nameParts.slice(1).join(" "),
          };

          await callback(profile);
        })
        .catch(console.error);
    }
  }, [response]);

  return { promptAsync, request };
}
