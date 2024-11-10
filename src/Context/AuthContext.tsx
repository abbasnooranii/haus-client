import { createContext, SetStateAction, useEffect, useState } from "react";
import React from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

interface UserType extends User {
  saved_properties?: [string];
}

type contextType = {
  user: UserType | null;
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  setUser: React.Dispatch<SetStateAction<UserType | null>>;
  createAccount: (email: string, password: string) => Promise<UserCredential>;
  forgotPassword: (email: string) => Promise<void>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  updateAccount: (name: string, photoURL?: string) => Promise<void>;
  handleAuthState: (currentUser: UserType | null) => void;
};

export const AuthContext = createContext<contextType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

  const forgotPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logout = async () => {
    setLoading(true);
    await axiosPublic.get("/auth/logout", { withCredentials: true });
    return signOut(auth);
  };

  const handleAuthState = async (currentUser: UserType | null) => {
    setUser(currentUser);
    if (currentUser) {
      const userInfo = { email: currentUser.email };
      await axiosPublic.post("/auth/jwt", userInfo, {
        withCredentials: true,
      });
      const res = await axiosPublic.get("/user", {
        withCredentials: true,
      });
      const { user } = res.data;
      setUser({
        ...user,
        displayName: user.name,
        saved_properties: user.saved_properties,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      await handleAuthState(currentUser);
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [axiosPublic]);

  const context = {
    user,
    loading,
    setLoading,
    setUser,
    createAccount,
    updateAccount,
    login,
    logout,
    handleAuthState,
    forgotPassword,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
