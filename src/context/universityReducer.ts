import { UniversityQueryParams } from '../types';

export enum UniversityActionTypes {
  SET_QUERY_PARAMS = 'SET_QUERY_PARAMS',
}

export interface UniversityReducerAction {
  type: UniversityActionTypes;
  payload: UniversityQueryParams;
}

export const universityReducer = (
  state: UniversityQueryParams,
  action: UniversityReducerAction
) => {
  switch (action.type) {
    case UniversityActionTypes.SET_QUERY_PARAMS:
      return { ...action.payload };

    default:
      return state;
  }
};
