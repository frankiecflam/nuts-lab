import { createContext, useContext } from "react";

const AuthContext = createContext({
  idToken: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export default AuthContext;

// Global Hook for useContext
export const useAuthContext = () => useContext(AuthContext);
