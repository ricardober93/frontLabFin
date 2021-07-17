import { createContext, useContext } from "react";

export type User = {
  id: number;
  email: string;
};

export type UserContextType = {
  user: User;
  setUser: (User: User) => void;
};

export const UserContext = createContext<UserContextType>({
  user: { id: 0, email: "" },
  setUser: (User) => console.log("no hay user"),
});
export const useUser = () => useContext(UserContext);

