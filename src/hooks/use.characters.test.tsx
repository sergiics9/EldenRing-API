import { renderHook, act } from '@testing-library/react';
import { useCharacters } from './use.characters';

jest.mock('../services/api.repo', () => ({
  ApiRepo: jest.fn(() => ({
    getClasses: jest.fn(() => Promise.resolve([])),
  })),
}));

describe('useCharacters Hook', () => {
  test('should initialize correctly', () => {
    const { result } = renderHook(() => useCharacters());

    expect(result.current.characters).toEqual([]);
    expect(result.current.page).toBe(0);
    expect(result.current.appState).toEqual({
      characters: [],
      filteredCharacters: [],
      page: 0,
      selectedValue: '',
    });
  });

  test('should load characters and update state', async () => {
    const { result } = renderHook(() => useCharacters());

    await act(async () => {
      await result.current.loadCharacters();
    });

    act(() => {}); // Wait for state to update

    expect(result.current.appState.characters).toHaveLength(0); // Adjust based on actual data
    expect(result.current.appState.page).toBe(0); // Adjust based on actual data
  });

  test('should change the page correctly', () => {
    const { result } = renderHook(() => useCharacters());
    const event = {
      preventDefault: jest.fn(),
    } as unknown as React.SyntheticEvent;

    act(() => {
      result.current.handleNext(event);
    });

    expect(result.current.appState.page).toBe(1);
  });

  test('should handle decrement that goes below the minimum page correctly', () => {
    const { result } = renderHook(() => useCharacters());
    const event = {
      preventDefault: jest.fn(),
    } as unknown as React.SyntheticEvent;

    act(() => {
      result.current.handlePrevious(event);
    });

    expect(result.current.appState.page).toBe(0);
  });

  test('should handle filter correctly', () => {
    const { result } = renderHook(() => useCharacters());
    const event = {
      preventDefault: jest.fn(),
      target: { value: 'someValue' },
    } as unknown as React.SyntheticEvent;

    act(() => {
      result.current.handleFilter(event);
    });

    expect(result.current.appState.selectedValue).toBe('someValue');
    expect(result.current.appState.filteredCharacters).toHaveLength(0); // Adjust based on actual data
    expect(result.current.appState.page).toBe(0); // Adjust based on actual data
  });
});
