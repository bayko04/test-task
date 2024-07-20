export interface IAuthSlice {
  user: IUser;
  isLoading: boolean;
  error: any;
  errorAuth: any;
  isAuth: boolean;
  isAuthProcessing: boolean;
}

export interface IUser {
  roles: any[];
  user: {
    name: string;
  };
}
