import { StrictMode, startTransition } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import Router from '@/router.tsx';
import ModeInitializer from './hooks/mode-initializar';
import './styles/global.scss';

const root = createRoot(document.getElementById('root')!);

startTransition(() => {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <ModeInitializer>
          <Router />
        </ModeInitializer>
      </BrowserRouter>
    </StrictMode>
  );
});
