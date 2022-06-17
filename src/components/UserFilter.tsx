import { ChangeEvent, useState } from 'react';
import { getUserContext } from '../context/UserContext';
import { UserActionTypes } from '../context/userReducer';

interface UserParams {
  email: string;
  gender: string;
}

const UserFilter = () => {
  const [userParams, setUserParams] = useState<UserParams>({
    email: '',
    gender: '',
  });

  const { userState, dispatch } = getUserContext();

  const handleUserDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const newUserParams = {
      ...userParams,
      [e.target.name]: e.target.value,
    };

    setUserParams(newUserParams);

    let filteredUsersByGender = userState.users;
    if (newUserParams.gender) {
      filteredUsersByGender = filteredUsersByGender?.filter(
        (user) => user.gender === newUserParams.gender
      );
    }

    const filteredUsers = filteredUsersByGender?.filter((user) =>
      user.email.includes(newUserParams.email)
    );

    dispatch({
      type: UserActionTypes.FILTER_USERS,
      payload: { filteredUsers },
    });
  };

  return (
    <form>
      <label>
        Email:
        <input
          type='text'
          name='email'
          value={userParams.email}
          onChange={handleUserDetails}
        />
      </label>

      <label>
        All
        <input
          type='radio'
          name='gender'
          value=''
          onChange={handleUserDetails}
        />
      </label>

      <label>
        Male
        <input
          type='radio'
          name='gender'
          value='male'
          onChange={handleUserDetails}
        />
      </label>

      <label>
        Female
        <input
          type='radio'
          name='gender'
          value='female'
          onChange={handleUserDetails}
        />
      </label>
    </form>
  );
};

export default UserFilter;
