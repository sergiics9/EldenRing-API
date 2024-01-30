import { CharacterStructure } from '../../models/eldenring.api';
import './card.private.scss';
type Props = {
  character: CharacterStructure;
};
export function CardPrivate({ character }: Props) {
  const imageUrl = 'https://eldenring.fanapis.com/images/classes/';
  const imageType = '.png';
  return (
    <div className="card-container">
      <li className="Card">
        <div className="card-buttons-container">
          <button>
            <img src="delete-button.svg" alt="delete button" />
          </button>
          <button>
            <img src="edit-button.svg" alt="edit button" />
          </button>
        </div>
        <div>
          <img
            src={imageUrl + character.id + imageType}
            alt={character.name}
            height={400}
            width={300}
          />
        </div>
        <button className="details">{character.name}</button>
      </li>
    </div>
  );
}
