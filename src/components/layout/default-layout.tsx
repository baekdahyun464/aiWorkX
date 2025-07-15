import { useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '@/components/layout/header';
import Navi from './navi';
import { menuData } from '@/testLoading'; // 화면 로딩용 데이터

export default function DefaultLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleNav = () => setIsNavOpen(prev => !prev);
  const toggleSub = (index: number) =>
    setOpenIndex(prev => (prev === index ? null : index));

  return (
    <div className={`container ${isLoginPage ? 'login' : ''}`}>
      <div className={`content ${isNavOpen ? 'nav-open' : ''}`}>
        {!isLoginPage && (
          <>
            <Header onToggleNav={toggleNav} />
            <Navi
              menuList={menuData}
              isOpen={isNavOpen}
              openIndex={openIndex}
              onToggleSub={toggleSub}
            />
          </>
        )}
        <Outlet />
      </div>
    </div>
  );
}
