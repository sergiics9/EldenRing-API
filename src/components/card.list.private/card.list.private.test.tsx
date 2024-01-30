import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CardListPrivate } from './card.list.private';
import { AppContext, ContextStructure } from '../../context/context';
import { MemoryRouter } from 'react-router-dom';

const mockContext: ContextStructure = {
  characters: [{ name: 'Hero', id: 4 }],
  loadCharacters: jest.fn(),
} as unknown as ContextStructure;

describe('Given List component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={mockContext}>
            <CardListPrivate></CardListPrivate>
          </AppContext.Provider>
        </MemoryRouter>
      );
    });
    test('renders List with Card', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
    test('', () => {
      expect(mockContext.loadCharacters).toHaveBeenCalled();
      const element = screen.getByAltText('Hero');
      expect(element).toBeInTheDocument();
    });

    test('', () => {
      const mockContext: ContextStructure = {
        characters: null,
        loadCharacters: jest.fn(),
      } as unknown as ContextStructure;
      render(
        <AppContext.Provider value={mockContext}>
          <CardListPrivate></CardListPrivate>
        </AppContext.Provider>
      );
      expect(mockContext.loadCharacters).toHaveBeenCalled();
      const element = screen.getByText('Loading characters...');
      expect(element).toBeInTheDocument();
    });
  });
});
