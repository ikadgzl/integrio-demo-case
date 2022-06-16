import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UniversityContextWrapper from './context/UniversityContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Maybe wrap only university components at app.tsx */}
    <UniversityContextWrapper>
      <App />
    </UniversityContextWrapper>
  </React.StrictMode>
);
