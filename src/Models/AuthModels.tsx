export type User = {
  userId?: number;
  email: string;
  name?: string;
  password?: string;
  passwordConfirm?: string;
};
export type State = {
  user: User | null;
  isAuthenticated: true | false;
  isLoginLoading: true | false;
};
export type Action =
  | {
      type: "login";
      payload: User;
    }
  | {
      type: "logout";
    }
  | {
      type: "toggleLoading";
    };

export type ChildrenProps = {
  children: React.ReactNode;
};

export type AuthContextType = State & {
  login: (user: User) => Promise<void>;
  logout: () => void;
  createUser: (user: User) => Promise<void>;
  loadingToggle: () => void;
  forgetPassword: (user: User) => Promise<void>;
};
