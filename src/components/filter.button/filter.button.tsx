import './filter.button.scss';
import { AppContext } from '../../context/context';
import { useContext } from 'react';

export function FilterButton() {
  const { handleFilter, appState } = useContext(AppContext);

  return (
    <div className="filter-button">
      <label htmlFor="filter">Filter by: </label>
      <select
        onChange={handleFilter}
        name="filter"
        id="filter"
        value={appState.selectedValue}
      >
        <option value="">All</option>
        <option value="10">Strength over 10</option>
        <option value="9">Strength under 10</option>
      </select>
    </div>
  );
}
