import React from "react";
import Component4Redux from "../Component_4/Component4Redux";

const Component3Redux = (props) => {
  return (
    <div>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Component3Redux</h1>
      <Component4Redux 
      users = {props.users}
      />
    </div>
  );
};

export default Component3Redux;
