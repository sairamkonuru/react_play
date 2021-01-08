import React, { useState } from "react";

function HookCounter3() {
  const [state, setstate] = useState({ firstName: "sairam", lastName: "" });

  return (
    <form>
      <h4>Hook counter with obj</h4>
      First Name :{" "}
      <input
        type="text"
        text={state.firstName}
        onChange={(e) => setstate({ ...state, firstName: e.target.value })}
      />
      Last Name :{" "}
      <input
        type="text"
        text={state.lastName}
        onChange={(e) =>
          setstate({
            ...state,
            lastName: e.target.value,
          })
        }
      />
      <h5>First Name : {state.firstName}</h5>
      <h5>Last Name : {state.lastName}</h5>
      <h5>{JSON.stringify(state)}</h5>
    </form>
  );
}

export default HookCounter3;
