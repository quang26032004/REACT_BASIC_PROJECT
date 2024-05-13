import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { CounterContext } from "../../ContextNew/CounterContext";

const Home = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <CounterContext.Provider value={counter}>
      <div>
        <h1>Home</h1>
        <Child1 />
        <button onClick={() => setCounter(counter + 1)}>
          Increment
        </button>
        <Child2 counter={counter} />
      </div>
    </CounterContext.Provider>
  );
};

export default Home;
