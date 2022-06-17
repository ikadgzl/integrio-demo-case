import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='App'>
      <Link to='/universities'>
        <p>Universities</p>
      </Link>

      <Link to='/users'>
        <p>Users</p>
      </Link>
    </div>
  );
};
