import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PageButton } from './page.button';
import { AppContext, ContextStructure } from '../../context/context';
import { AppState } from '../../reducers/actions';

const value: ContextStructure = {
  appState: { page: 0 } as unknown as AppState,
} as unknown as ContextStructure;

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <AppContext.Provider value={value}>
          <PageButton></PageButton>;
        </AppContext.Provider>
      );
    });

    test('It should be in the document', () => {
      const element = screen.getAllByRole('button');
      expect(element[0]).toBeInTheDocument();
    });
  });
});
