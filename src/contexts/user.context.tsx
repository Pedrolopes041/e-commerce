import { FunctionComponent, createContext, useState } from "react";
import Users from "../types/users.types";

interface Props {
  children: React.ReactNode;
}

interface IUUserContext {
  currentUser: Users | null;
  isAuthenticated: boolean;
  loginUser: (user: Users) => void;
  logautUser: () => void
}

export const UserContext = createContext<IUUserContext>({
  currentUser: null,
  isAuthenticated: false,
  loginUser: () => {},
  logautUser: () => {}
});

const UserContextProvider: FunctionComponent<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState< Users | null>(null);

  const isAuthenticated = currentUser !== null

  const loginUser = (user: Users) => {
    setCurrentUser(user)
  }

  const logautUser = () => {
    setCurrentUser(null)
  }

  return (
    <UserContext.Provider value={{ currentUser, isAuthenticated, loginUser, logautUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
