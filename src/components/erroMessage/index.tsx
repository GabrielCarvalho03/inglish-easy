type ErroMessageProps = {
  erro: string;
};

export const ErroMessage = ({ erro }: ErroMessageProps) => {
  return <>{erro && <span className="text-red-500 text-sm">{erro}</span>}</>;
};
