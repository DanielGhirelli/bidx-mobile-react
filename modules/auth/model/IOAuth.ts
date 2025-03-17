import { IUser, iUserFromJson } from "@/modules/user/model/IUser";

export interface IOAuth {
  user: IUser;
  token: string;
}

export const iOAuthFromJson = (jsonData: any): IOAuth => {
  return {
    user: iUserFromJson(jsonData.data.user),
    token: jsonData.data.token,
  };
};
