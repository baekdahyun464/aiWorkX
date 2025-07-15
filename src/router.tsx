import DefaultLayout from '@/components/layout/default-layout.tsx';
import DashboardPage from '@/pages/dashboard/dashboard-page.tsx';
import LoginPage from '@/pages/login/login-page.tsx';
import SampleMenuPage from '@/pages/sample-menu/sample-menu-page.tsx';
import { Route, Routes } from 'react-router';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/sample-menu" element={<SampleMenuPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
