import { render, screen } from '@testing-library/react';
import { AppContext, ContextStructure } from '../../context/context';
import { CardList } from './card.list';
import '@testing-library/jest-dom';
import { CharacterStructure } from '../../models/eldenring.api';
import { AppState } from '../../reducers/actions';
import { BrowserRouter } from 'react-router-dom';

const mockContext: ContextStructure = {
  appState: {
    characters: [{ name: 'Hero' }],
    page: 1,
    filteredCharacters: [{ name: 'Hero' }],
  } as AppState,
  loadCharacters: jest
    .fn()
    .mockResolvedValue([{ name: 'Hero' } as CharacterStructure]),
} as unknown as ContextStructure;

describe('Given List component', () => {
  describe('When we instantiate', () => {
    test('renders List with Card', () => {
      render(
        <BrowserRouter>
          <AppContext.Provider value={mockContext}>
            <CardList></CardList>
          </AppContext.Provider>
        </BrowserRouter>
      );
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });

    test('renders loading message while characters are being loaded', () => {
      const loadedContext: ContextStructure = {
        appState: {
          characters: null,
        } as unknown as AppState,
        loadCharacters: jest
          .fn()
          .mockResolvedValue([{ name: 'Hero' } as CharacterStructure]),
      } as unknown as ContextStructure;

      render(
        <BrowserRouter>
          <AppContext.Provider value={loadedContext}>
            <CardList></CardList>
          </AppContext.Provider>
        </BrowserRouter>
      );
      const loadingElement = screen.getByText('Loading characters...');
      expect(loadingElement).toBeInTheDocument();
    });

    test('renders List with Card when selectedValue is empty', () => {
      const emptySelectedValueContext: ContextStructure = {
        appState: {
          characters: [{ name: 'Hero' }],
          page: 1,
          filteredCharacters: [{ name: 'Hero' }],
          selectedValue: '',
        } as AppState,
        loadCharacters: jest
          .fn()
          .mockResolvedValue([{ name: 'Hero' } as CharacterStructure]),
      } as unknown as ContextStructure;

      render(
        <BrowserRouter>
          <AppContext.Provider value={emptySelectedValueContext}>
            <CardList></CardList>
          </AppContext.Provider>
        </BrowserRouter>
      );
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
