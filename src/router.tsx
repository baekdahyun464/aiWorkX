import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';

// Lazy load page components
const DefaultLayout = lazy(() => import('@/components/layout/default-layout.tsx'));
const DashboardPage = lazy(() => import('@/pages/dashboard/dashboard-page.tsx'));
const LoginPage = lazy(() => import('@/pages/login/login-page.tsx'));
const SampleMenuPage = lazy(() => import('@/pages/sample-menu/sample-menu-page.tsx'));

// Loading fallback component
const PageLoader = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontSize: '18px',
    color: '#666'
  }}>
    Loading...
  </div>
);

export default function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/sample-menu" element={<SampleMenuPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
}
