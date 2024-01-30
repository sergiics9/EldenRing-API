import { Link } from 'react-router-dom';
import { CardListPrivate } from '../../card.list.private/card.list.private';
import './custom.library.scss';

export default function CustomLibraryPage() {
  return (
    <>
      <button>
        <Link className="addButton" to="/form">
          Add Character
        </Link>
      </button>
      <CardListPrivate></CardListPrivate>
    </>
  );
}
