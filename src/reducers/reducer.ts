import { ActionCharacters, AppState } from './actions';

export function charactersReducer(
  state: AppState,
  { type, payload }: ActionCharacters
): AppState {
  switch (type) {
    case 'load':
      return { ...state, characters: payload };

    case 'page':
      return {
        characters: state.characters,
        page: payload,
        filteredCharacters: state.filteredCharacters,
        selectedValue: state.selectedValue,
      };

    case 'filter':
      return {
        characters: state.characters,
        page: state.page,
        filteredCharacters: payload,
        selectedValue: state.selectedValue,
      };

    case 'select':
      return {
        characters: state.characters,
        page: state.page,
        filteredCharacters: state.filteredCharacters,
        selectedValue: payload,
      };

    // case 'create':
    //   return {
    //     characters: [...state.characters, payload],
    //     page: state.page,
    //     filteredCharacters: state.filteredCharacters,
    //     selectedValue: state.selectedValue,
    //   };

    // case 'update':
    //   return {
    //     characters: state.characters.map((item) =>
    //       item.id === payload.id ? payload : item
    //     ),
    //     page: state.page,
    //     filteredCharacters: state.filteredCharacters,
    //     selectedValue: state.selectedValue,
    //   };

    // case 'delete':
    //   return {
    //     characters: state.characters.filter((item) => item.id !== payload),
    //     page: state.page,
    //     filteredCharacters: state.filteredCharacters,
    //     selectedValue: state.selectedValue,
    //   };

    default:
      return { ...state };
  }
}
