import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import { UniversityQueryParams } from '../types';
import {
  universityReducer,
  UniversityReducerAction,
} from './universityReducer';

export const INITIAL_VALUE: UniversityQueryParams = {
  country: '',
  name: '',
  nameContains: '',
};

interface UniversityContext {
  universityState: UniversityQueryParams;
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
