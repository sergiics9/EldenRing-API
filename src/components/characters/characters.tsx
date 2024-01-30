type Props = {
  children: JSX.Element;
};
export function Characters({ children }: Props) {
  return (
    <div className="character" role="main">
      {children}
    </div>
  );
}
