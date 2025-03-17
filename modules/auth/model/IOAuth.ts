export interface IUser {
    id: number;
    name: string;
    email: string;
  }
  
  export interface IOAuth {
    user: IUser;
    token: string;
  }
  
  export const iOAuthFromJson = (jsonData: any): IOAuth => {
    return {
      user: jsonData.data.user as IUser,
      token: jsonData.data.token as string,
    };
  };
  