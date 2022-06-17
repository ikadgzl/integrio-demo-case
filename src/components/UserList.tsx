import { MouseEvent, useEffect } from 'react';
import { getUserContext } from '../context/UserContext';
import { UserActionTypes } from '../context/userReducer';
import { LeftArrowIcon } from './icons/LeftArrowIcon';
import { RightArrowIcon } from './icons/RightArrowIcon';
import UserListItem from './UserListItem';

enum ArrowTypes {
  LEFT = 'leftArrow',
  RIGHT = 'rightArrow',
}

const UserList = () => {
  const { userState, dispatch } = getUserContext();

  const USERS_PER_PAGE = 10;
  const TOTAL_PAGES = userState.filteredUsers!.length / USERS_PER_PAGE - 1;
  const BEGINNING_OF_THE_PAGE = userState.page! * USERS_PER_PAGE;

  const handlePagination = (e: MouseEvent<SVGElement>) => {
    switch (e.currentTarget.ariaLabel) {
      case ArrowTypes.LEFT:
        userState.page! > 0 &&
          dispatch({
            type: UserActionTypes.HANDLE_PAGE,
            payload: { page: userState.page! - 1 },
          });
        break;

      case ArrowTypes.RIGHT:
        userState.page! < TOTAL_PAGES &&
          dispatch({
            type: UserActionTypes.HANDLE_PAGE,
            payload: { page: userState.page! + 1 },
          });
        break;
    }
  };

  useEffect(() => {
    if (userState.page! > TOTAL_PAGES) {
      dispatch({
        type: UserActionTypes.HANDLE_PAGE,
        payload: { page: 0 },
      });
    }
  }, [TOTAL_PAGES]);

  return (
    <section>
      {userState.filteredUsers
        ?.slice(BEGINNING_OF_THE_PAGE, BEGINNING_OF_THE_PAGE + USERS_PER_PAGE)
        .map((user) => (
          <UserListItem key={user.email} user={user} />
        ))}

      <LeftArrowIcon
        disabled={userState.page! < 1}
        onClick={handlePagination}
      />
      <RightArrowIcon
        disabled={userState.page! >= TOTAL_PAGES}
        onClick={handlePagination}
      />
    </section>
  );
};

export default UserList;
