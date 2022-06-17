import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import { University, UniversityQueryParams } from '../types';
import {
  universityReducer,
  UniversityReducerAction,
} from './universityReducer';

export interface UniversityState {
  queryParams?: UniversityQueryParams;
  universities?: University[];
  page?: number;
  isLoading?: boolean;
}

const INITIAL_VALUE: UniversityState = {
  queryParams: {
    country: '',
    name: '',
    nameContains: '',
  },
  universities: [],
  page: 0,
  isLoading: false,
};

interface UniversityContext {
  universityState: UniversityState;
  dispatch: Dispatch<UniversityReducerAction>;
}

// TODO: maybe handle types better.
const UniversityContext = createContext<UniversityContext>(
  {} as UniversityContext
);

interface UniversityContextProps {
  children: ReactNode;
}

const UniversityContextWrapper = ({ children }: UniversityContextProps) => {
  const [universityState, dispatch] = useReducer(
    universityReducer,
    INITIAL_VALUE
  );

  return (
    <UniversityContext.Provider value={{ universityState, dispatch }}>
      {children}
    </UniversityContext.Provider>
  );
};

export default UniversityContextWrapper;
export const getUniversityContext = (): UniversityContext =>
  useContext(UniversityContext);
