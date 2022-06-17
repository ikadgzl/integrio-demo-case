import { useEffect, useState } from 'react';
import { API } from '../constants/API';
import { User } from '../types';

interface UserDetailModalProps {
  email: string;
}

const UserDetailModal = ({ email }: UserDetailModalProps) => {
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
    <section>
      <div>
        <img src={userDetail?.picture?.large} />
        <p>
          {userDetail?.name.title} {userDetail?.name.first}
          {userDetail?.name.last}
        </p>
        <p>{userDetail?.gender}</p>
        <p>{userDetail?.email}</p>
      </div>
    </section>
  );
};

export default UserDetailModal;
