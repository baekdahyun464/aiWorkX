import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import Router from '@/router.tsx';
import { BrowserRouter } from 'react-router';
import ModeInitializer from './hooks/mode-initializar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ModeInitializer>
        <Router />
      </ModeInitializer>
    </BrowserRouter>
  </StrictMode>,
);
