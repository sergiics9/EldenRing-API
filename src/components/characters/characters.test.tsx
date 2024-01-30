import { Characters } from './characters';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Given Characters component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Characters>
          <></>
        </Characters>
      );
    });

    test('Then it should be the role', () => {
      const element = screen.getByRole('main');
      expect(element).toBeInTheDocument();
    });
  });
});
