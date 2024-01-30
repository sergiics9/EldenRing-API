import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardPrivate } from './card.private';
import { BrowserRouter } from 'react-router-dom';

describe('Given List component', () => {
  describe('When we instantiate', () => {
    render(
      <BrowserRouter>
        <CardPrivate
          character={{
            id: '4',
            name: 'Character test',
            image: '',
            description: '',
            region: undefined,
            location: undefined,
            drops: undefined,
            healthPoints: undefined,
            stats: {
              level: '',
              vigor: '',
              mind: '',
              endurance: undefined,
              strength: '',
              dexterity: undefined,
              intelligence: undefined,
              faith: undefined,
              arcane: undefined,
            },
          }}
        ></CardPrivate>
      </BrowserRouter>
    );

    test('It should be in the document', () => {
      const element = screen.getByText('Character test');
      expect(element).toBeInTheDocument();
    });
  });
});
