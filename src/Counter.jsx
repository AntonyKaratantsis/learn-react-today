import { useState } from "react";

const Counter = (props) => {
  console.log("Render Counter");

  // setCount is an asynchronous function.
  // Calls to this function are batched instead of run
  // one after the other
  const [count, setCount] = useState(props.initialCount);

  // We pass a callback function as an argument is setCount, instead
  // of passing count + amount as a value, because the operation
  // depends on the previous state
  const clickHandler = (amount) => setCount((prevCount) => prevCount + amount);

  // To demonstrate the error that happens due to the asynchronous nature of useState,
  // switch the handlers and call clickhandler twice on each button click
  //    const clickHandler = (amount) => setCount(count + amount);

  return (
    <div>
      <button onClick={() => clickHandler(-1)}>-</button>
      <span> {count} </span>
      <button onClick={() => clickHandler(+1)}>+</button>
    </div>
  );
};

export default Counter;
