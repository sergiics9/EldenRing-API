import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { FilterButton } from './filter.button';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from '../../context/context.provider';

describe('Given Filter component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AppContextProvider>
            <FilterButton></FilterButton>
          </AppContextProvider>
        </BrowserRouter>
      );
    });
    test('It should be in the document', () => {
      const element = screen.getByRole('combobox');
      expect(element).toBeInTheDocument();
    });
  });
});
