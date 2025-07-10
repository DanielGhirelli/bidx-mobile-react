import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from "react";
import { router } from "expo-router";
import Auth from "../modules/auth/auth";
import {
  GoogleSignin,
  isSuccessResponse,
} from "@react-native-google-signin/google-signin";

const AuthContext = createContext<{
  signIn: (email: string, password: string) => Promise<boolean>;
  signInWithGoogle: () => Promise<boolean>;
  signOut: () => void;
  isUserSwitched: () => Promise<boolean>;
  token: React.RefObject<string | null> | null;
}>({
  signIn: async () => false,
  signInWithGoogle: async () => false,
  signOut: () => null,
  isUserSwitched: async () => false,
  token: null,
});

// Access the context as a hook
export function useAuthSession() {
  return useContext(AuthContext);
}

export default function AuthProvider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const tokenRef = useRef<string | null>(null);

  useEffect(() => {
    (async (): Promise<void> => {
      const token = await Auth.hasValidToken();
      tokenRef.current = token || null;
    })();
  }, []);

  const isUserSwitched = async () => {
    try {
      const prevToken = await Auth.isUserSwitched();
      return !!prevToken;
    } catch (error) {
      console.error("AuthProvider: Error checking user switch status", error);
      return false;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const isValid = await Auth.validateCredentials({ email, password });

      if (isValid) {
        router.replace("/(authorized)/(tabs)");
        return true;
      }

      return false;
    } catch (error) {
      console.error("AuthProvider: Error signing in", error);
      return false;
    }
  };

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      const isValid = isSuccessResponse(response);

      if (isValid) {
        const { user } = response.data;

        const success = await Auth.authWithGoogle({
          google_id: user.id,
          user_data: {
            email: user.email,
            given_name: user?.givenName ?? "",
            family_name: user?.familyName ?? "",
          },
        });

        if (success) {
          router.replace("/(authorized)/(tabs)");
          return true;
        }
      }

      return false;
    } catch (error) {
      console.error("AuthProvider: Error google signing in", error);
      return false;
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      router.replace("/welcome");
    } catch (error) {
      console.error("AuthProvider: Error signing out", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signInWithGoogle,
        signOut,
        isUserSwitched,
        token: tokenRef,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
