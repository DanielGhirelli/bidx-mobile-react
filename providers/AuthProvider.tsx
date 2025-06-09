import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from "react";
import { router } from "expo-router";
import Auth from "../modules/auth/auth";

const AuthContext = createContext<{
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
  isUserSwitched: () => Promise<boolean>;
  token: React.RefObject<string | null> | null;
}>({
  signIn: async () => false,
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
      value={{ signIn, signOut, isUserSwitched, token: tokenRef }}
    >
      {children}
    </AuthContext.Provider>
  );
}
