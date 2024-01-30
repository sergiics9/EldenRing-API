import { AppContext, ContextStructure } from './context';
import { useCharacters } from '../hooks/use.characters';

type Props = {
  children: JSX.Element;
};

export function AppContextProvider({ children }: Readonly<Props>) {
  const charactersState = useCharacters();
  const context: ContextStructure = charactersState;
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
