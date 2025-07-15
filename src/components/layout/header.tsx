import { useModeSwitch } from '../../hooks/use-mode-switch';
import IconBtn from '../icon-btn';

interface HeaderProps {
  onToggleNav: () => void;
}

export default function Header({ onToggleNav }: HeaderProps) {
  const [, setUIMode] = useModeSwitch();

  return (
    <header className="header">
      <section className="head-l">
        <IconBtn className="menu" onClick={onToggleNav}></IconBtn>
        <h1>AIWORKX</h1>
      </section>
      <ul className="head-r">
        <li>
          <IconBtn className="profile"></IconBtn>
          <div>
            <a href="/login" className="mypage">
              Mypage
            </a>
            <a href="#" className="logout">
              Logout
            </a>
          </div>
        </li>
        <li>
          <IconBtn className="setting"></IconBtn>
          <div>
            <button
              type="button"
              className="light"
              onClick={() => setUIMode('light')}
            >
              Light
            </button>
            <button
              type="button"
              className="dark"
              onClick={() => setUIMode('dark')}
            >
              Dark
            </button>
          </div>
        </li>
        <li>
          <IconBtn className="more"></IconBtn>
        </li>
      </ul>
    </header>
  );
}
