import { useEffect, useState } from 'react';
import { User } from '../types';

interface UserDetailModalProps {
  email: string;
}

const UserDetailModal = ({ email }: UserDetailModalProps) => {
  const [userDetail, setUserDetail] = useState<User>();

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://randomuser.me/api?email=${email}`);
      const data = (await res.json()) as { results: User };

      setUserDetail(data.results);
    })();
  }, []);

  console.log(userDetail);

  return <div>UserDetailModal</div>;
};

export default UserDetailModal;
