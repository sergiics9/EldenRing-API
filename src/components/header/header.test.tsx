import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header';
import { Menu } from '../menu/menu';
import { MenuOption } from '../../models/menu.option.type';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../menu/menu');

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    const menuOptions: MenuOption[] = [
      { label: 'Characters', path: '/' },
      { label: 'Create your avatar', path: '/custom.library' },
    ];
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Header>
            <Menu options={menuOptions}></Menu>
          </Header>
        </BrowserRouter>
      );
    });

    test('Then it should be in the document', () => {
      expect(Menu).toHaveBeenCalled();
    });
  });
});
