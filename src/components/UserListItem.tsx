import { MouseEvent, useState } from 'react';
import { User } from '../types';
import UserDetailModal from './UserDetailModal';
import styles from './UserListItem.module.scss';

interface UserItemListProps {
  user: User;
}

const UserListItem = ({ user }: UserItemListProps) => {
  const [modal, setModal] = useState<boolean>(false);

  const handleModal = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    setModal(e.currentTarget.ariaPlaceholder === 'open' ? true : false);
  };

  if (modal)
    return <UserDetailModal email={user.email} handleModal={handleModal} />;

  return (
    <div aria-placeholder='open' onClick={handleModal} className={styles.card}>
      <img src={user.picture.large} />
      <div>
        <p>
          {user.name.title} {user.name.first} {user.name.last}
        </p>
        <p>{user.gender}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserListItem;
