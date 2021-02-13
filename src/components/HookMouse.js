import React, { useState, useEffect } from "react";

export default function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePositon = (e) => {
    console.log("log mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("use effect called");
    window.addEventListener("mousemove", logMousePositon);

    return () => {
      console.log("component un mount");
      window.removeEventListener("mousemove", logMousePositon);
    };
  }, []);

  return (
    <div>
      <h5>hook mouse</h5>
      Hooks X - {x}
      Hook Y - {y}
    </div>
  );
}
