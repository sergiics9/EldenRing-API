import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/context';
import { Card } from '../card/card.tsx';
import './card.list.scss';
import { CharacterStructure } from '../../models/eldenring.api.tsx';

export function CardList() {
  const { appState, loadCharacters } = useContext(AppContext);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  let chars: CharacterStructure[] = [];
  if (appState.selectedValue === '') {
    chars = appState.characters;
  } else {
    chars = appState.filteredCharacters;
  }
  return (
    <ul>
      {chars ? (
        chars.map((item) => <Card key={item.id} character={item}></Card>)
      ) : (
        <p>Loading characters...</p>
      )}
    </ul>
  );
}
