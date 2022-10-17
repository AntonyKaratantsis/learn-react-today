import { useState } from "react";

const Counter = ({ initialCount }) => {
  console.log("Render Counter");

  // setState is an asynchronous function.
  // Calls to this function are batched instead of run
  // one after the other
  const [state, setState] = useState({ count: initialCount });

  // We pass a callback function as an argument is setState,
  // because the operation
  // depends on the previous state
  const clickHandler = (amount) =>
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + amount,
      };
    });

  return (
    <div>
      <button onClick={() => clickHandler(-1)}>-</button>
      <span> {state.count} </span>
      <button onClick={() => clickHandler(+1)}>+</button>
    </div>
  );
};

export default Counter;
