import { createContext, useContext } from "react";

const AuthContext = createContext({
  idToken: "",
  isLoggedIn: false,
  login: (idToken: string) => {},
  logout: () => {},
});

export default AuthContext;

// Global Hook for useContext
export const useAuthContext = () => useContext(AuthContext);
