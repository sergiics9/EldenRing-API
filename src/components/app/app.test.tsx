import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './app';
import { AppContextProvider } from '../../context/context.provider';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Given App component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Router>
          <AppContextProvider>
            <App></App>
          </AppContextProvider>
        </Router>
      );
    });

    test('Then it should be the role', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
