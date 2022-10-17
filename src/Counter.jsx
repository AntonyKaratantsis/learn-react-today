import { useState } from "react";

const Counter = ({ initialCount }) => {
  // You might ask: how in the world is my current state saved by React??
  // React counts on us calling Hooks at the exact same order every
  // single time and it relies on them being at the very top level of
  // our function component. 
  // That's why HOOKS CAN NOT BE CALLED CONDITIONALLY (ifs, loops, functions etc)

  // setCount is an asynchronous function.
  // Calls to this function are batched instead of run
  // one after the other
  const [count, setCount] = useState(initialCount);

  // We pass a callback function as an argument is setCount, instead
  // of passing count + amount as a value, because the operation
  // depends on the previous state
  const clickHandler = (amount) => setCount((prevCount) => prevCount + amount);

  return (
    <div>
      <button onClick={() => clickHandler(-1)}>-</button>
      <span> {count} </span>
      <button onClick={() => clickHandler(+1)}>+</button>
    </div>
  );
};

export default Counter;
