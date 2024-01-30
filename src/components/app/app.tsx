import './app.scss';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { AppRoutes } from '../app.routes/app.routes';
import { MenuOption } from '../../models/menu.option.type';
import { Menu } from '../menu/menu';

export default function App() {
  const menuOptions: MenuOption[] = [
    { label: 'Characters', path: '/' },
    { label: 'My avatars', path: '/custom-library' },
  ];

  return (
    <>
      <Header>
        <Menu options={menuOptions}></Menu>
      </Header>
      <main>
        <AppRoutes></AppRoutes>
      </main>
      <Footer></Footer>
    </>
  );
}
