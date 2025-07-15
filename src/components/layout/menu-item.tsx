interface SubMenu {
  name: string;
  link: string;
}

interface Menu {
  name: string;
  subMenu?: SubMenu[];
}

interface MenuItemProps {
  menu: Menu;
  isOpen: boolean;
  isDisabled?: boolean;
  onClick: () => void;
}

// li에 sub-menu가 있을때 open
export default function MenuItem({
  menu,
  isOpen,
  isDisabled,
  onClick,
}: MenuItemProps) {
  const hasSubMenu = !!menu.subMenu;

  return (
    <li className={isOpen && hasSubMenu ? 'open' : ''} onClick={onClick}>
      <a href="#" className={isDisabled ? 'nav-link disabled' : 'nav-link'}>
        {menu.name}
      </a>
      {hasSubMenu && (
        <ul className="sub-menu">
          {menu.subMenu?.map(sub => (
            <li key={sub.name}>
              <a href={sub.link} className={isDisabled ? 'disabled' : ''}>
                {sub.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

/* // li에 sub-menu가 없어도 클릭시 open
export default function MenuItem({ menu, isOpen, onClick }: MenuItemProps) {
  return (
    <li className={isOpen ? 'open' : ''} onClick={onClick}>
      <p className="nav-link">{menu.name}</p>
      {menu.subMenu && (
        <ul className="sub-menu">
          {menu.subMenu.map(sub => (
            <li key={sub.name}>
              <a href={sub.link}>{sub.name}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
} */
