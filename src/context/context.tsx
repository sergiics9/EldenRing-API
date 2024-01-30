import { createContext } from 'react';
import { useCharacters } from '../hooks/use.characters';

export type ContextStructure = ReturnType<typeof useCharacters>;

const initialContext = {} as ContextStructure;
export const AppContext = createContext<ContextStructure>(initialContext);
