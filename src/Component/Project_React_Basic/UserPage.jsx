import React, { useEffect, useState } from "react";
import "./UserPage.css";
import FormRegister from "./FormRegister";


const UserPage = () => {
  const [userData, setUserData] = useState([]);
  const [editedUser, setEditedUser] = useState(null)


  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?"
      );
      if (confirmDelete) {
        await fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        });
        fetchData();
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <table className="user-container">
        <FormRegister editedUser = {editedUser} fetchData={fetchData} />
      <tr>
        <th>ID</th>
        <th>Email</th>
        <th>Username</th>
        <th>Full Name</th>
        <th>Department</th>
        <th>Position</th>
        <th>Actions</th>
      </tr>

      {userData.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.email}</td>
          <td>{user.username}</td>
          <td>{user.fullName}</td>
          <td>{user.department}</td>
          <td>{user.position}</td>
          <td className="button-user">
            <button
              className="delete-button"
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </button>
            <button 
            className="edit-button"
            onClick={() => 
            setEditedUser(user)
            }
            >Edit</button>
          </td>
        </tr>
      ))}
    </table>

  );
};

export default UserPage;
