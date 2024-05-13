import React from "react";
import Child1 from "./Child1";
import { ContextMes } from "../ContextNew/ContextMes";

const Main = () => {
  const [theme, setTheme] = React.useState("light");

  return (
    <ContextMes.Provider value={theme}>
      <div>
        <button
        onClick={() => setTheme("light")}
        >Change theme light</button>
        <button
        onClick={() => setTheme("dark")}
        >Change theme dark</button>
      </div>
      <Child1>
        Message from Parents: Cố học đi con
      </Child1>
    </ContextMes.Provider>
  );
};

export default Main;
