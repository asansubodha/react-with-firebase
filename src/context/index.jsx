import { createContext } from "react";

export const AuthContext = createContext(null);

export default function AuthState({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
