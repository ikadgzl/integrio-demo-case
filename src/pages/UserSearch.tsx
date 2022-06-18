import { useEffect, useState } from 'react';
import Loading from '../components/icons/Loading';
import UserCreateForm from '../components/UserCreateForm';
import UserFilter from '../components/UserFilter';
import UserList from '../components/UserList';
import { getUserContext } from '../context/UserContext';
import { UserActionTypes } from '../context/userReducer';
import { User } from '../types';
import styles from './UserSearch.module.scss';

const UserSearch = () => {
  const { userState, dispatch } = getUserContext();

  useEffect(() => {
    dispatch({
      type: UserActionTypes.SET_READY,
      payload: { isLoading: true },
    });

    (async () => {
      const res = await fetch('https://randomuser.me/api/?results=100');
      const data = (await res.json()) as { results: User[] };

      // TODO:
      // Make these dispatch actions functions itself
      // const fetchUsers = (x) => ({type:blabla, payload: {users: x} })
      dispatch({
        type: UserActionTypes.FETCH_USERS,
        payload: { users: data.results },
      });
      dispatch({
        type: UserActionTypes.SET_READY,
        payload: { isLoading: false },
      });
    })();
  }, []);

  if (userState.isLoading) return <Loading />;

  return (
    <section className={styles.userSection}>
      <UserCreateForm />
      <UserFilter />
      <UserList />
    </section>
  );
};

export default UserSearch;
