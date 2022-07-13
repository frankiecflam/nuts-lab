import { FC, ReactNode } from "react";
import AuthContext from "./AuthContext";

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const handleLogin = () => {};

  const handleLogout = () => {
    
  };

  const AuthContextAPI = {
    idToken: "",
    isLoggedIn: false,
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
