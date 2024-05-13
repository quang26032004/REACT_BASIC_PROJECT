import React from "react";
import Component3Redux from "../Component_3/Component3Redux";

const Component2Redux = (props) => {
    return (
        <div>
            <h1>&nbsp;&nbsp;&nbsp;Component2Redux</h1>
            <Component3Redux 
            users={props.users}
            />
        </div>
    );
};

export default Component2Redux;