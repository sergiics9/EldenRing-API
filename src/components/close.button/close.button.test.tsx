import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CloseButton } from './close.button';

describe('Given DetailButton component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<CloseButton></CloseButton>);
    });

    test('Then it should be the role', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
