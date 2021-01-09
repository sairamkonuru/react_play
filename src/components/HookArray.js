import React, { useState } from "react";

export default function HookArray() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };

  const popItem = () => {
    setItems(() => {
      let temp = [...items];
      temp.pop();
      return temp;
    });
  };

  const clearItem = () => {
    setItems([]);
  };

  return (
    <div>
      <h5>Hook Arry</h5>
      <button onClick={addItem}>Push</button>
      <button onClick={clearItem}>Clear</button>
      <button onClick={popItem}>Pop</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}> {item.value} </li>
        ))}
      </ul>
    </div>
  );
}
