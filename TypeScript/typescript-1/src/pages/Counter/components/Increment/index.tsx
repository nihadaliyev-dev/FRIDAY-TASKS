interface IncrementProps {
  increment: () => void;
}
const Increment: React.FC<IncrementProps> = ({ increment }) => {
  return <button onClick={increment}>Increase</button>;
};
export default Increment;
