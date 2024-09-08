import { createContext, SetStateAction, useEffect, useState } from "react";
import { UserType } from "../types/UserType";
import React from "react";
import Cookies from "js-cookie";

type contextType = {
  user: UserType | null;
  setUser: React.Dispatch<SetStateAction<UserType | null>>;
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<contextType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const context = {
    user,
    setUser,
    loading,
    setLoading,
  };

  useEffect(() => {
    const token = Cookies.get("haus_token");
    console.log(token);
    if (token) {
      console.log("Authenticated");
    }
  }, []);

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
