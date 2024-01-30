import { AppContext } from '../../context/context';
import { useContext } from 'react';
import './page.button.scss';

export function PageButton() {
  const { appState, handleNext, handlePrevious } = useContext(AppContext);

  return (
    <div className="image-birds-container">
      <div className="image-birds-pagination-next">
        <button onClick={handlePrevious} disabled={appState.page === 0}>
          <img
            src="../../arrow-bird.png"
            alt="imagenes de pajaros de paginado"
            height={123}
            width={125}
          />
        </button>
      </div>
      <div className="image-birds-pagination-previous">
        <button onClick={handleNext} disabled={appState.page === 4}>
          <img
            src="../../arrow-bird.png"
            alt="imagenes de pajaros de paginado"
            height={123}
            width={125}
          />
        </button>
      </div>
    </div>
  );
}
