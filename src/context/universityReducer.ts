import { UniversityState } from './UniversityContext';

export enum UniversityActionTypes {
  SET_READY = 'SET_READY',
  SET_QUERY_PARAMS = 'SET_QUERY_PARAMS',
  FETCH_UNIVERSITIES = 'FETCH_UNIVERSITIES',
  HANDLE_PAGE = 'HANDLE_PAGE',
}

export interface UniversityReducerAction {
  type: UniversityActionTypes;
  payload: UniversityState;
}

export const universityReducer = (
  state: UniversityState,
  action: UniversityReducerAction
): UniversityState => {
  switch (action.type) {
    case UniversityActionTypes.SET_READY:
      return { ...state, isLoading: action.payload.isLoading };

    case UniversityActionTypes.SET_QUERY_PARAMS:
      return { ...state, queryParams: action.payload.queryParams };

    case UniversityActionTypes.FETCH_UNIVERSITIES:
      return { ...state, universities: action.payload.universities };

    case UniversityActionTypes.HANDLE_PAGE:
      return {
        ...state,
        page: action.payload.page,
      };

    default:
      return state;
  }
};
