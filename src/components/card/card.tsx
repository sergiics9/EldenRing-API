import { Link } from 'react-router-dom';
import { CharacterStructure } from '../../models/eldenring.api';
import './card.scss';
type Props = {
  character: CharacterStructure;
};
export function Card({ character }: Props) {
  const imageUrl = 'https://eldenring.fanapis.com/images/classes/';
  const imageType = '.png';

  return (
    <div className="card-container">
      <li className="Card">
        <img
          src={imageUrl + character.id + imageType}
          alt={character.name}
          height={400}
          width={300}
        />
      </li>
      <button className="details">
        <Link
          to={'/details/' + character.id}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Show Details
        </Link>
      </button>
    </div>
  );
}
