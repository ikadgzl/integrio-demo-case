import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UniversitySearch from './pages/UniversitySearch';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <UniversitySearch />
    </div>
  );
}

export default App;
