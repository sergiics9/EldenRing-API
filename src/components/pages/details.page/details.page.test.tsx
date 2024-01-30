import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DetailsPage from './details.page';
import { MemoryRouter } from 'react-router-dom';
import { AppContext, ContextStructure } from '../../../context/context';
import { CharacterStructure } from '../../../models/eldenring.api';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest
    .fn()
    .mockReturnValue({ id: '17f69d71826l0i32gkm3ndn3kywxqj' }),
}));

const mockContext: ContextStructure = {
  characters: [
    {
      id: '17f69d71826l0i32gkm3ndn3kywxqj',
      name: 'Hero',
      stats: { level: '7' },
    } as unknown as CharacterStructure,
  ],
} as unknown as ContextStructure;

describe('Given DetailPage component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <MemoryRouter
          initialEntries={['/details/17f69d71826l0i32gkm3ndn3kywxqj']}
        >
          <AppContext.Provider value={mockContext}>
            <DetailsPage></DetailsPage>
          </AppContext.Provider>
        </MemoryRouter>
      );
    });

    test('renders Detail-page with Details component', () => {
      const result = screen.getByText('Hero');
      expect(result).toBeInTheDocument();
    });
  });
});
