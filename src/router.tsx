import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';

const DefaultLayout = lazy(() => import('@/components/layout/default-layout.tsx'));
const DashboardPage = lazy(() => import('@/pages/dashboard/dashboard-page.tsx'));
const LoginPage = lazy(() => import('@/pages/login/login-page.tsx'));
const SampleMenuPage = lazy(() => import('@/pages/sample-menu/sample-menu-page.tsx'));

export default function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
