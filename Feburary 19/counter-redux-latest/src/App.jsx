import { useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
  reset,
} from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  console.log(count);

  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleIncrementByValue = () => {
    const value = Number(inputRef?.current?.value);
    dispatch(incrementByValue(value));
  };
  return (
    <>
      <p>Counter Application</p>
      <div className="flex gap-2 justify-center items-center">
        <button onClick={handleDecrement}>-</button>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
      <hr />
      <button onClick={handleReset}>Reset</button>
      <hr />
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleIncrementByValue}>Add Value</button>
      </div>
    </>
  );
}

export default App;
