interface ResetProps {
  reset: () => void;
}
const Reset = ({ reset }: ResetProps) => {
  return <button onClick={reset}>Reset</button>;
};

export default Reset;
