import { useState } from 'react';
import { User } from '../types';
import UserDetailModal from './UserDetailModal';

interface UserItemListProps {
  user: User;
}

const UserListItem = ({ user }: UserItemListProps) => {
  const [modal, setModal] = useState<boolean>(false);

  const handleModal = () => {
    setModal((prevModal) => !prevModal);
  };

  if (modal) return <UserDetailModal email={user.email} />;

  return (
    <div>
      <img onClick={handleModal} src={user.picture.large} />
      <p>
        {user.name.title} {user.name.first} {user.name.last}
      </p>
      <p>{user.gender}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserListItem;
