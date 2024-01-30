type Props = {
  children: JSX.Element;
};
export function CustomLibrary({ children }: Props) {
  return (
    <div className="character" data-testid="mocked-custom-library">
      {children}
    </div>
  );
}
