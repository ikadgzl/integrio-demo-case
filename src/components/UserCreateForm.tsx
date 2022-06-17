import { ChangeEvent, FormEvent, useState } from 'react';
import { API } from '../constants/API';
import Loading from './icons/Loading';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

interface UserCreateForm {
  name: string;
  lastName: string;
  email: string;
  gender: Gender;
}

const UserCreateForm = () => {
  const [userCreateForm, setUserCreateForm] = useState<UserCreateForm>({
    name: '',
    email: '',
    gender: Gender.MALE,
    lastName: '',
  });
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCreateForm = (e: ChangeEvent<HTMLInputElement>) => {
    setUserCreateForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(false);
    setIsLoading(true);

    const response = await fetch(API.user, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCreateForm),
    });

    if (response.status === 404) {
      setError(true);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name
        <input
          type='text'
          name='name'
          value={userCreateForm.name}
          onChange={handleCreateForm}
        />
      </label>

      <label>
        Lastname
        <input
          type='text'
          name='lastName'
          value={userCreateForm.lastName}
          onChange={handleCreateForm}
        />
      </label>

      <label>
        email
        <input
          type='text'
          name='email'
          value={userCreateForm.email}
          onChange={handleCreateForm}
        />
      </label>

      <label>
        Male
        <input
          type='radio'
          name='gender'
          value={Gender.MALE}
          onChange={handleCreateForm}
          defaultChecked
        />
      </label>
      <label>
        Female
        <input
          type='radio'
          name='gender'
          value={Gender.FEMALE}
          onChange={handleCreateForm}
        />
      </label>

      <button type='submit'>{isLoading ? <Loading /> : 'Submit'}</button>
      {error && <p>Error</p>}
    </form>
  );
};

export default UserCreateForm;
