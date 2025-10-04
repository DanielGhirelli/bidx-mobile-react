import { useEffect } from "react";
import * as Sentry from "@sentry/react-native";
import Auth from "@/modules/auth/auth";

export function SentrySetup() {
  useEffect(() => {
    Auth.getUserCompany().then((company) => {
      if (!company?.user?.id) return;

      Sentry.setContext("Secure Store", {
        companyId: company.user.companyId,
        userId: company.user.id,
      });
    });
  }, []);

  return null;
}
