import MenuItem from './menu-item';

interface SubMenu {
  name: string;
  link: string;
}

interface Menu {
  name: string;
  subMenu?: SubMenu[];
}

interface NavMenuProps {
  menuList: Menu[];
  isOpen: boolean;
  openIndex: number | null;
  onToggleSub: (index: number) => void;
}

export default function Navi({
  menuList,
  isOpen,
  openIndex,
  onToggleSub,
}: NavMenuProps) {
  return (
    <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
      <ul className="nav-ul">
        {menuList.map((menu, index) => (
          <MenuItem
            key={menu.name}
            menu={menu}
            isOpen={openIndex === index}
            onClick={() => onToggleSub(index)}
          />
        ))}
      </ul>
    </nav>
  );
}
