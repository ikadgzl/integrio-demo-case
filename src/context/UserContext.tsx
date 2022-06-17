import { User } from '../types';
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import { userReducer, UserReducerAction } from './userReducer';

export interface UserState {
  users?: User[];
  filteredUsers?: User[];
  isLoading?: boolean;
  page?: number;
}

const INITIAL_STATE: UserState = {
  users: [],
  filteredUsers: [],
  isLoading: false,
  page: 0,
};

interface UserContext {
  userState: UserState;
  dispatch: Dispatch<UserReducerAction>;
}

const UserContext = createContext<UserContext>({} as UserContext);

interface UserContextProps {
  children: ReactNode;
}

const UserContextWrapper = ({ children }: UserContextProps) => {
  const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE);

  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextWrapper;
export const getUserContext = (): UserContext => useContext(UserContext);
