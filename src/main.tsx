import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Sponsors from './Sponsors.tsx';
import './index.css';

const isSponsorsPage = window.location.pathname === '/sponsors';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isSponsorsPage ? <Sponsors /> : <App />}
  </StrictMode>
);
