import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { router } from "expo-router";
import Auth from "../modules/auth/auth";
import {
  GoogleSignin,
  isSuccessResponse,
} from "@react-native-google-signin/google-signin";

type AuthState = {
  token: string | null;
};

type AuthContextType = {
  initialized: boolean;
  isAuthenticated: boolean;

  signIn: (email: string, password: string) => Promise<boolean>;
  signInWithGoogle: () => Promise<boolean>;
  signOut: () => Promise<void>;
  isUserSwitched: () => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Access the context as a hook
export function useAuthSession(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthSession must be used within AuthProvider");
  return ctx;
}

export default function AuthProvider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const [initialized, setInitialized] = useState(false);
  const [state, setState] = useState<AuthState>({ token: null });

  // One-time boot: hydrate token
  useEffect(() => {
    (async () => {
      try {
        const token = await Auth.hasValidToken();

        setState({ token: token ?? null });
      } finally {
        setInitialized(true);
      }
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
      if (!isValid) return false;

      // If valid sign in grab token
      const token = await Auth.hasValidToken();
      setState({ token: token ?? null });

      router.replace("/(authorized)/(tabs)");
      return true;
    } catch (error) {
      console.error("AuthProvider: Error signing in", error);
      return false;
    }
  };

  const signInWithGoogle = async () => {
    try {
      // Android-only: verify Play Services. iOS returns true silently.
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
          // If valid sign in grab token
          const token = await Auth.hasValidToken();
          setState({ token: token ?? null });

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
    } catch (error) {
      console.error("AuthProvider: Error signing out", error);
    } finally {
      setState({ token: null });
      router.replace("/welcome");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        initialized,
        isAuthenticated: !!state.token,
        signIn,
        signInWithGoogle,
        signOut,
        isUserSwitched,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
