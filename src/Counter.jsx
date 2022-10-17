const Counter = (props) => {
  return (
    <div>
      <button>-</button>
      <span> {props.initialCount} </span>
      <button>+</button>
    </div>
  );
};

export default Counter;