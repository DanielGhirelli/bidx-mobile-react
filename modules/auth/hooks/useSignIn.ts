import { useState, useCallback } from "react";
import i18n from "../../../config/i18n";
import { useAuthSession } from "@/providers/AuthProvider";

interface UseSignIn {
  email: string;
  setEmail: (email: string) => void;
  emailError: string;
  password: string;
  setPassword: (password: string) => void;
  passwordError: string;
  isPasswordVisible: boolean;
  setIsPasswordVisible: (visible: boolean) => void;
  loading: boolean;
  handleLogin: () => Promise<void>;
  handleGoogleLogin: () => Promise<void>;
}

export function useSignIn(): UseSignIn {
  const { signIn, signInWithGoogle } = useAuthSession();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = useCallback((email: string) => {
    if (!email) return i18n.t("login.email_input.invalid");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return i18n.t("login.email_input.invalid");
    return "";
  }, []);

  const validatePassword = useCallback((password: string) => {
    if (!password) return i18n.t("core.required");
    return "";
  }, []);

  const handleLogin = async () => {
    if (loading) return;

    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setEmailError(emailValidation);
    setPasswordError(passwordValidation);

    if (emailValidation || passwordValidation) return;

    try {
      setLoading(true);

      const isValid = await signIn(email, password);

      if (!isValid) {
        setEmailError(i18n.t("login.email_input.error"));
        return;
      }
    } catch (error) {
      setEmailError(i18n.t("An error occurred") + error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (loading) return;

    try {
      setLoading(true);

      const isValid = await signInWithGoogle();

      if (!isValid) {
        setEmailError(i18n.t("login.email_input.error"));
        return;
      }
    } catch (error) {
      setEmailError(i18n.t("An error occurred") + error);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail: (value) => {
      setEmail(value);
      if (emailError) setEmailError(validateEmail(value));
    },
    emailError,
    password,
    setPassword: (value) => {
      setPassword(value);
      if (passwordError) setPasswordError(validatePassword(value));
    },
    passwordError,
    isPasswordVisible,
    setIsPasswordVisible,
    loading,
    handleLogin,
    handleGoogleLogin,
  };
}
