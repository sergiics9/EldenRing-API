import { Link } from 'react-router-dom';
import { MenuOption } from '../../models/menu.option.type';
import './menu.scss';
import { useState } from 'react';

type Props = {
  options: MenuOption[];
};

export function Menu({ options }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav role="menu">
      <img
        src="../bars.svg"
        alt="icono de menu plegable"
        className="burger-icon"
        onClick={toggleMenu}
        height={50}
        width={50}
      />
      <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
        {options.map((item) => (
          <li key={item.label}>
            <Link to={item.path} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
