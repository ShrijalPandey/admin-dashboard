"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type AuthContextType = {
  isLoggedIn: boolean;
  currentUser: AuthUser | null;
  login: (user: AuthUser) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const isLoggedIn = currentUser !== null;

  function login(user: AuthUser) {
    setCurrentUser(user);
  }

  function logout() {
    setCurrentUser(null);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}
