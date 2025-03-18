import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter, useSegments } from "expo-router";
import Auth from "../modules/auth/auth";

interface AuthContextProps {
  hasValidToken: boolean;
  isUserSwitched: () => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [hasValidToken, setHasValidToken] = useState<boolean>(false);
  const router = useRouter();
  const segments = useSegments();

  const checkAuth = async () => {
    try {
      const hasToken = await Auth.hasValidToken();
      setHasValidToken(hasToken);

      if (!hasToken && (`/${segments.join("/")}` !== "/")) {
        router.replace("/");
      }
    } catch (error) {
      console.error("AuthProvider: Error checking authentication", error);
    }
  };

  useEffect(() => {
    checkAuth();
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
        setHasValidToken(true);

        router.replace("/(tabs)");
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
      setHasValidToken(false);

      router.replace("/sign_in");
    } catch (error) {
      console.error("AuthProvider: Error signing out", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ hasValidToken, isUserSwitched, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
