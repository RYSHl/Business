import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Sponsors from './Sponsors.tsx';
import './index.css';

function Root() {
  const [isSponsors, setIsSponsors] = useState(
    window.location.hash === '#sponsors'
  );

  useEffect(() => {
    const handleHashChange = () => {
      setIsSponsors(window.location.hash === '#sponsors');
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return isSponsors ? <Sponsors /> : <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
