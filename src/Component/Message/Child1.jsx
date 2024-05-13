import React from "react";
import { ContextMes } from "../ContextNew/ContextMes";

const Child1 = (props) => {
    const currentTheme = React.useContext(ContextMes);

  return (
    <div
    
    style={{
        backgroundColor: currentTheme === "dark" ? "black" : "white",
        color: currentTheme === "dark" ? "white" : "black",
    }}>
      {props.children}
    </div>
  );
};

export default Child1;
