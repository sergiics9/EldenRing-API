import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/context';
import { CardPrivate } from '../card.private/card.private.tsx';
import '../card.list/card.list.scss';
import '../card.private/card.private.scss';
import { CharacterStructure } from '../../models/eldenring.api.tsx';

export function CardListPrivate() {
  const { characters, loadCharacters } = useContext(AppContext);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return (
    <ul>
      {characters ? (
        characters.map((item: CharacterStructure) => (
          <CardPrivate key={item.id} character={item}></CardPrivate>
        ))
      ) : (
        <p>Loading characters...</p>
      )}
    </ul>
  );
}
