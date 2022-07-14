import { FC, ReactNode } from "react";
import AuthContext from "./AuthContext";
import { useState, useEffect } from "react";

interface AuthContextProviderProps {
  children: ReactNode;
  idTokenFromCookies: string;
}

const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
  idTokenFromCookies,
}) => {
  const [idToken, setIdToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Automatically log in user whenever there is a valid idToken retrived from Cookies
    // If no, do nothing
    idTokenFromCookies && handleLogin(idTokenFromCookies);
  }, [idTokenFromCookies]);

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
