import { createContext, SetStateAction, useEffect, useState } from "react";
import React from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

type contextType = {
  user: User | null;
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  createAccount: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  updateAccount: (name: string, photoURL?: string) => Promise<void>;
};

export const AuthContext = createContext<contextType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const createAccount = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateAccount = (name: string, photoURL?: string) => {
    return updateProfile(auth.currentUser as User, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const login = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setLoading(true);
    await axiosPublic.get("/auth/logout", { withCredentials: true });
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };

        await axiosPublic.post("/auth/jwt", userInfo, {
          withCredentials: true,
        });
        setLoading(false);
      } else {
        console.log("Running else");
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [axiosPublic]);

  const context = {
    user,
    loading,
    setLoading,
    createAccount,
    updateAccount,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
