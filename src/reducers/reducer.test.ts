import { charactersReducer } from './reducer';

describe('Characters Reducer', () => {
  const initialState = {
    characters: [],
    page: 1,
    filteredCharacters: [],
    selectedValue: '',
  };

  const testAction = (type: any, payload: any, expectedState: any) => {
    const newState = charactersReducer(initialState, { type, payload });
    expect(newState).toEqual(expectedState);
  };

  test('should return load correctly', () => {
    const mockPayload = {
      characters: [],
      page: 1,
      filteredCharacters: [],
      selectedValue: '',
    };

    testAction('load', [], mockPayload);
  });

  test('should return page correctly', () => {
    const mockPayload = {
      characters: [],
      page: 1,
      filteredCharacters: [],
      selectedValue: '',
    };

    testAction('page', 1, mockPayload);
  });

  test('should return filter correctly', () => {
    const mockPayload = {
      characters: [],
      page: 1,
      filteredCharacters: [],
      selectedValue: '',
    };

    testAction('filter', [], mockPayload);
  });

  test('should return select correctly', () => {
    const mockPayload = {
      characters: [],
      page: 1,
      filteredCharacters: [],
      selectedValue: 'selectedValue',
    };

    testAction('select', 'selectedValue', mockPayload);
  });

  test('should return default correctly', () => {
    testAction('unknown', 'somePayload', initialState);
  });
});
