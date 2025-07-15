//poc파일 복사

import { useEffect, useState } from 'react';

type UIModeParam = 'light' | 'dark';
// 단말 사용 함수
declare global {
  interface Window {
    uiModeSwitch: (mode: UIModeParam) => void;
  }
}

type ModeSwitch = () => [boolean, (UIModeParam: UIModeParam) => void];

export const useModeSwitch: ModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setUIMode = (mode: UIModeParam) => {
    if (mode === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else if (mode === 'light') {
      setIsDarkMode(false);
      document.body.classList.remove('dark-mode');
    }
  };

  useEffect(() => {
    window.uiModeSwitch = setUIMode;
  }, []);

  return [isDarkMode, setUIMode];
};
