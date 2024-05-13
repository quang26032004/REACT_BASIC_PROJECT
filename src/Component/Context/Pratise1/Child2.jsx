import React, { useContext } from "react";
import { CounterContext } from "../../ContextNew/CounterContext";

const Child2 = (props) => {
  const currentContext = useContext(CounterContext);
  return (
    <div>
      <h1>Child2</h1>
      <h2>Counter from Context: {currentContext} </h2>
    </div>
  );
};

export default Child2;
