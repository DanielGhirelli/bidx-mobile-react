export interface IUser {
    id: string;
    name: string;
    email: string;
  }
  
  export interface IOAuth {
    user: IUser;
    token: string;
  }
  
  export const iOAuthFromJson = (jsonString: string): IOAuth => {
    const jsonData = JSON.parse(jsonString);
    return {
      user: jsonData.data.user as IUser,
      token: jsonData.data.token as string,
    };
  };
  