interface Props {
  children: React.ReactNode;
}

function FadeTransition({ children }: Props) {
  return <div>{children}</div>;
}

export default FadeTransition;
