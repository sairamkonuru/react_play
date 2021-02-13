import React, { useState } from "react";
import ClassMouse from "./ClassMouse";
import HookMouse from "./HookMouse";

export default function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {
        display && <HookMouse></HookMouse>
        /*{ <ClassMouse></ClassMouse> }*/
      }
    </div>
  );
}
