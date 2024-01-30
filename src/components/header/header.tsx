import { Link } from 'react-router-dom';
import './header.scss';

type Props = {
  children: JSX.Element;
};
export function Header({ children }: Props) {
  return (
    <header>
      <div className="logo">
        <Link to={'/'}>
          <img
            className="container-header-img"
            src="../../logoheader.png"
            alt="Logo de header de elden ring"
            width={280}
            height={90}
          />
        </Link>

        <h1>Elden Ring</h1>
      </div>
      {children}
    </header>
  );
}
