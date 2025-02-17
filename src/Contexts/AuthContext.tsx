import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  State,
  Action,
  ChildrenProps,
  AuthContextType,
} from "../Models/AuthModels";

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoginLoading: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case "toggleLoading":
      return { ...state, isLoginLoading: !state.isLoginLoading };
    default:
      throw new Error("unknown action");
  }
}
const AuthContext = createContext<AuthContextType>({
  ...initialState,
  login: async () => {},
  logout: () => {},
  createUser: async () => {},
  loadingToggle: () => {},
  forgetPassword: async () => {},
});
function AuthProvider({ children }: ChildrenProps) {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, isAuthenticated, isLoginLoading } = state;

  async function login(user: User) {
    dispatch({ type: "toggleLoading" });
    const data = await dbIsValidUser(user);
    console.log(data);
    dispatch({ type: "toggleLoading" });
    if (data?.status === "success") {
      dispatch({
        type: "login",
        payload: {
          email: user.email,
          password: user.password,
          name: data.data.name,
        },
      });

      alert("Successfully logged in!");
    } else {
      alert(data.message);
    }
  }
  async function createUser(newUser: User) {
    dispatch({ type: "toggleLoading" });
    const data = await dbPostUser(newUser);
    dispatch({ type: "toggleLoading" });
    if (data?.status === "success") {
      alert("Successfully created user! Please login.");
      navigate("/login");
    } else {
      console.log(data);
      alert(data.message);
    }
  }

  function logout() {
    dispatch({ type: "logout" });
    dispatch({ type: "toggleLoading" });
  }

  function loadingToggle() {
    dispatch({ type: "toggleLoading" });
  }

  async function dbIsValidUser(user: User) {
    try {
      const res = await fetch(
        `https://damp-dawn-22073-c78b7e8643df.herokuapp.com/api/v1/users/login`,
        {
          method: "post",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      console.log(data);
      return data;
    } catch {
      alert(
        "There was an error validating user... please try again logging in again."
      );
    }
  }

  async function dbPostUser(newUser: User) {
    try {
      const res = await fetch(
        `https://damp-dawn-22073-c78b7e8643df.herokuapp.com/api/v1/users/signup`,
        {
          method: "post",
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      alert("There was an error loading data... please try signing up again.");
    }
  }

  async function dbForgetPassword(email: string) {
    try {
      const res = await fetch(
        `https://damp-dawn-22073-c78b7e8643df.herokuapp.com/api/v1/users/forgotPassword`,
        {
          method: "post",
          body: JSON.stringify({ email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      alert("There was an error loading data... please send another email.");
    }
  }

  async function forgetPassword(user: User) {
    dispatch({ type: "toggleLoading" });
    const data = await dbForgetPassword(user.email);
    dispatch({ type: "toggleLoading" });
    if (data?.status === "success") {
      alert("Successfully sent email!");
      navigate("/login");
    } else {
      alert(data.message);
    }
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        createUser,
        isLoginLoading,
        loadingToggle,
        forgetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
