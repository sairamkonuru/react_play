import React, { useState } from "react";

function HookCounter2() {
  const initialState = 10;
  const [state, setstate] = useState(initialState);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setstate((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      Count{state} <button onClick={() => setstate(initialState)}>Reset</button>{" "}
      <button onClick={() => setstate((prevState) => prevState + 1)}>
        Increment
      </button>{" "}
      <button onClick={() => setstate((prevState) => prevState - 1)}>
        Decrement
      </button>{" "}
      <button onClick={incrementFive}>Increment 5</button>{" "}
    </div>
  );
}

export default HookCounter2;
