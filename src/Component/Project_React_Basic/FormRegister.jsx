import React, { useEffect, useState } from "react";
import "./FormRegister.css";

const FormRegister = (props) => {
    const [newUser, setNewUser] = useState({
        email: "",
        username: "",
        fullName: "",
        department: "",
        position: "",
    });

    useEffect(() => {
        setNewUser(props.editedUser);
    }, [props.editedUser]);

    const handleEdit = async () => {
            await fetch(`http://localhost:3000/users/${props?.editedUser?.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
                body: JSON.stringify({...newUser}),
            });
            props?.fetchData();
            
          }

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };
    console.log("newUser", newUser); // "newUser {email: "", username: "", fullName: "", department: "", position: ""}"

    const handleAddUser = async () => {
        try {
            await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });
            fetchData();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="register-form">
            <input onChange={handleChange} value={newUser?.email} name="email" className="register-input" placeholder="Email" />
            <input onChange={handleChange} value={newUser?.username} name="username" type="text" className="register-input" placeholder="Username" />
            <input onChange={handleChange} value={newUser?.fullName} name="fullName" type="text" className="register-input" placeholder="Full Name" />
            <input onChange={handleChange} value={newUser?.department} name="department" type="text" className="register-input" placeholder="Department" />
            <input onChange={handleChange} value={newUser?.position} name="position" type="text" className="register-input" placeholder="Position" />

            <button
                className="register-button"
                onClick={!!props.editedUser ? handleEdit :  handleAddUser}
            >
                {props?.editedUser ? "Edit" : "Add"}
            </button>
        </div>
    );
};

export default FormRegister;
