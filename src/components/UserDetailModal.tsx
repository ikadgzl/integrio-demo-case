import {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { API } from '../constants/API';
import { User } from '../types';
import styles from './UserDetailModal.module.scss';

interface UserDetailModalProps {
  handleModal: MouseEventHandler<HTMLButtonElement>;
  email: string;
}

const UserDetailModal = ({ email, handleModal }: UserDetailModalProps) => {
  const [userDetail, setUserDetail] = useState<User>();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${API.user}?email=${email}`);
      const data = (await res.json()) as { results: User[] };

      setUserDetail(data.results[0]);
    })();

    console.log(`${API.user}?email=${email}`);
  }, []);

  console.log(userDetail);

  return (
    <section className={styles.profileModal}>
      <div className={styles.container}>
        <div>
          <img src={userDetail?.picture?.large} />
          <p>
            {userDetail?.name.title} {userDetail?.name.first}
            {userDetail?.name.last}
          </p>
          <p>{userDetail?.gender}</p>
          <p>{userDetail?.email}</p>

          <button onClick={handleModal}>CLOSE MODAL</button>
        </div>
      </div>
    </section>
  );
};

export default UserDetailModal;
