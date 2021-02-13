import React, { useState, useEffect } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("use effect updating doc title");
    document.title = `you clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h5>Count : {count}</h5>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <button onClick={() => setCount(count + 1)}> Counter</button>
    </div>
  );
}

export default UseEffectHook;
