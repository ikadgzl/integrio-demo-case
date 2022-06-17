import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UniversityContextWrapper from './context/UniversityContext';
import UserContextWrapper from './context/UserContext';
import { Home } from './pages/Home';
import UniversitySearch from './pages/UniversitySearch';
import UserSearch from './pages/UserSearch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route
            path='universities'
            element={
              <UniversityContextWrapper>
                <UniversitySearch />
              </UniversityContextWrapper>
            }
          />

          <Route
            path='users'
            element={
              <UserContextWrapper>
                <UserSearch />
              </UserContextWrapper>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
