import { useState } from "react";
import Reset from "./components/Reset";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <Increment increment={increment} />
      <span>Count: {count}</span>
      <Decrement decrement={decrement} />

      <hr />
      <Reset reset={reset} />
    </>
  );
};

export default Counter;
