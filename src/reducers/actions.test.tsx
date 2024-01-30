import { CharacterStructure } from '../models/eldenring.api';
import {
  loadActionCreator,
  changePage,
  filterCharacters,
  selectedValue,
  createActionCreator,
  updateActionCreator,
  deleteActionCreator,
} from './actions';

describe('Action Creators', () => {
  test('should create a "load" action', () => {
    const characters: CharacterStructure[] = [];

    const action = loadActionCreator(characters);

    expect(action.type).toBe('load');
    expect(action.payload).toEqual(characters);
  });

  test('should create a "changePage" action', () => {
    const page = 2;

    const action = changePage(page);

    expect(action.type).toBe('page');
    expect(action.payload).toBe(page);
  });

  test('should create a "filterCharacters" action', () => {
    const filteredCharacters: CharacterStructure[] = [];

    const action = filterCharacters(filteredCharacters);

    expect(action.type).toBe('filter');
    expect(action.payload).toEqual(filteredCharacters);
  });

  test('should create a "selectedValue" action', () => {
    const value = 'someValue';

    const action = selectedValue(value);

    expect(action.type).toBe('select');
    expect(action.payload).toBe(value);
  });

  test('should create a "create" action', () => {
    const character: CharacterStructure = {
      id: '',
      name: '',
      image: '',
      description: '',
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
    };

    const action = createActionCreator(character);

    expect(action.type).toBe('create');
    expect(action.payload).toEqual(character);
  });

  test('should create an "update" action', () => {
    const character: CharacterStructure = {
      id: '',
      name: '',
      image: '',
      description: '',
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
    };

    const action = updateActionCreator(character);

    expect(action.type).toBe('update');
    expect(action.payload).toEqual(character);
  });

  test('should create a "delete" action', () => {
    const characterId = 'someId';

    const action = deleteActionCreator(characterId);

    expect(action.type).toBe('delete');
    expect(action.payload).toBe(characterId);
  });
});
