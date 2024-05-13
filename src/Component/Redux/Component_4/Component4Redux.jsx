import React from "react";
import "./c4.css";
import { useSelector } from "react-redux";

const Component4Redux = (props) => {
  

  return (
    <div>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Component4Redux</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Username</th>
          <th>FullName</th>
          <th>Department</th>
          <th>Position</th>
        </tr>
        {props.users.map((user) => {
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.fullName}</td>
              <td>{user.department}</td>
              <td>{user.position}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Component4Redux;
