import { createContext, useContext } from "react";

interface AuthContextInterface {
  idToken: string;
  isLoggedIn: boolean;
  login: (idToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextInterface>({
  idToken: "",
  isLoggedIn: false,
  login: (idToken: string) => {},
  logout: () => {},
});

export default AuthContext;

// Global Hook for useContext
export const useAuthContext = () => useContext(AuthContext);
