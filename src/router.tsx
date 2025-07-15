import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import LoadingSpinner from '@/components/loading-spinner';

// Lazy load components for code splitting
const DefaultLayout = lazy(() => import('@/components/layout/default-layout.tsx'));
const DashboardPage = lazy(() => import('@/pages/dashboard/dashboard-page.tsx'));
const LoginPage = lazy(() => import('@/pages/login/login-page.tsx'));
const SampleMenuPage = lazy(() => import('@/pages/sample-menu/sample-menu-page.tsx'));

export default function Router() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={
            <Suspense fallback={<LoadingSpinner text="Loading Dashboard..." />}>
              <DashboardPage />
            </Suspense>
          } />
          <Route path="/sample-menu" element={
            <Suspense fallback={<LoadingSpinner text="Loading Sample Menu..." />}>
              <SampleMenuPage />
            </Suspense>
          } />
        </Route>
        <Route path="/login" element={
          <Suspense fallback={<LoadingSpinner text="Loading Login..." />}>
            <LoginPage />
          </Suspense>
        } />
      </Routes>
    </Suspense>
  );
}
