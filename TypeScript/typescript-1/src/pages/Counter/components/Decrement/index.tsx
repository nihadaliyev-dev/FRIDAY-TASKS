interface DecrementProps {
  decrement: () => void;
}
const Decrement = ({ decrement }: DecrementProps) => {
  return <button onClick={decrement}>Decrease</button>;
};

export default Decrement;
