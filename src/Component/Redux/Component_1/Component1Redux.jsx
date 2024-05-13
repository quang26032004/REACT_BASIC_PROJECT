import React, { useEffect, useState } from "react";
import Component2Redux from "../Component_2/Component2Redux";

const Component1Redux = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const data = await fetch("http://localhost:3000/users");
    const userList = await data.json();
    console.log("userList", userList);
    setUsers(userList);

  };

    useEffect(() => {
        getUsers();
    }, []);

  return (
    <div>
        <h1>Component1Redux</h1>
        <Component2Redux
        users={users}
        />
    </div>
  );
};

export default Component1Redux;
