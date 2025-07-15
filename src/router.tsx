import { lazy, Suspense } from 'react';
import DefaultLayout from '@/components/layout/default-layout.tsx';
import { Route, Routes } from 'react-router';

// Lazy load pages for better performance
const DashboardPage = lazy(() => import('@/pages/dashboard/dashboard-page.tsx'));
const LoginPage = lazy(() => import('@/pages/login/login-page.tsx'));
const SampleMenuPage = lazy(() => import('@/pages/sample-menu/sample-menu-page.tsx'));

// Loading component
const PageLoader = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontSize: '18px'
  }}>
    Loading...
  </div>
);

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route 
          index 
          element={
            <Suspense fallback={<PageLoader />}>
              <DashboardPage />
            </Suspense>
          } 
        />
        <Route 
          path="/sample-menu" 
          element={
            <Suspense fallback={<PageLoader />}>
              <SampleMenuPage />
            </Suspense>
          } 
        />
      </Route>
      <Route 
        path="/login" 
        element={
          <Suspense fallback={<PageLoader />}>
            <LoginPage />
          </Suspense>
        } 
      />
    </Routes>
  );
}
