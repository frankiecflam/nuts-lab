import { FC, ReactNode } from "react";
import AuthContext from "./AuthContext";
import { useState } from "react";

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [idToken, setIdToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (idToken: string) => {
    setIdToken(idToken);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIdToken("");
    setIsLoggedIn(false);
  };

  const AuthContextAPI = {
    idToken: idToken,
    isLoggedIn: isLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={AuthContextAPI}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
