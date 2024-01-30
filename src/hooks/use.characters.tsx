import { SyntheticEvent, useCallback, useMemo, useReducer } from 'react';
import { ApiRepo } from '../services/api.repo';
import { charactersReducer } from '../reducers/reducer';
import {
  AppState,
  changePage,
  selectedValue,
  loadActionCreator,
  filterCharacters,
} from '../reducers/actions';

export function useCharacters() {
  const initialState: AppState = {
    characters: [],
    filteredCharacters: [],
    page: 0,
    selectedValue: '',
  };
  const [appState, dispatch] = useReducer(charactersReducer, initialState);

  const repo = useMemo(
    () => new ApiRepo(appState.page),
    [appState.page, appState.selectedValue]
  );

  const loadCharacters = useCallback(async () => {
    try {
      const loadedCharacters = await repo.getClasses();

      if (appState.selectedValue === '10') {
        const filtered = loadedCharacters.filter(
          (character) => parseInt(character.stats.strength, 10) >= 10
        );
        dispatch(filterCharacters(filtered));
      } else if (appState.selectedValue === '9') {
        const filtered = loadedCharacters.filter(
          (character) => parseInt(character.stats.strength, 10) < 10
        );
        dispatch(filterCharacters(filtered));
      } else {
        dispatch(loadActionCreator(loadedCharacters));
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo, appState.selectedValue, dispatch]);
  const handleNext = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(changePage(appState.page + 1));
  };

  const handlePrevious = (event: SyntheticEvent) => {
    event.preventDefault();

    const newPage = Math.max(0, appState.page - 1);
    dispatch(changePage(newPage));
  };

  const handleFilter = (event: SyntheticEvent) => {
    event.preventDefault();
    const element = event.target as HTMLInputElement;
    const value = element.value;
    dispatch(selectedValue(value));
  };

  return {
    characters: appState.characters,
    page: initialState.page,
    appState,
    loadCharacters,
    handleNext,
    handlePrevious,
    handleFilter,
  };
}
