import React from "react";
import { NameContext } from "../ContextNew/NameContext";

//hiển thị thông tin đã nhập ra màn hình

const FormResult = () => {
  const currentData = React.useContext(NameContext);
  return (
    <div>
      <h1>Result</h1>
      <p>First Name: {currentData.firstName}</p>
      <p>Last Name: {currentData.lastName}</p>
      <p>Age: {currentData.age}</p>
      <p>Address: {currentData.address}</p>
    </div>
  );
};

export default FormResult;
