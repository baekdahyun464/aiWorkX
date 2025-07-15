import { useEffect } from 'react';
import { useModeSwitch } from './use-mode-switch';

export default function ModeInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [, setUIMode] = useModeSwitch();

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    setUIMode(saved ?? 'light'); // 기본값: light
  }, []);

  return <>{children}</>;
}
