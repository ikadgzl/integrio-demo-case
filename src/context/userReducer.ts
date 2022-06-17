import { UserState } from './UserContext';

export enum UserActionTypes {
  SET_READY = 'SET_READY',
  FETCH_USERS = 'FETCH_USERS',
  FILTER_USERS = 'FILTER_USERS',
  HANDLE_PAGE = 'HANDLE_PAGE',
}

export interface UserReducerAction {
  type: UserActionTypes;
  payload: UserState;
}

export const userReducer = (
  state: UserState,
  action: UserReducerAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_READY:
      return { ...state, isLoading: action.payload.isLoading };

    case UserActionTypes.FETCH_USERS:
      return {
        ...state,
        users: action.payload.users,
        filteredUsers: action.payload.users,
      };
    case UserActionTypes.FILTER_USERS:
      return {
        ...state,
        filteredUsers: action.payload.filteredUsers,
      };

    case UserActionTypes.HANDLE_PAGE:
      return {
        ...state,
        page: action.payload.page,
      };

    default:
      return state;
  }
};
