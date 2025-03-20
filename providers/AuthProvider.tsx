import React, {
  createContext,
  MutableRefObject,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { router } from "expo-router";
import Auth from "../modules/auth/auth";
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext<{
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
  token: MutableRefObject<string | null> | null;
  isLoading: boolean;
}>({
  signIn: async () => false,
  signOut: () => null,
  token: null,
  isLoading: true,
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async (): Promise<void> => {
      const token = await SecureStore.getItemAsync("token");
      tokenRef.current = token || "";
      
      console.log(token)
      if (token) {
        router.replace("/(authorized)/(tabs)");
      }

      setIsLoading(false);
    })();
  }, []);

  const isUserSwitched = async () => {
    try {
      return await Auth.isUserSwitched();
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
      value={{ signIn, signOut, token: tokenRef, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
