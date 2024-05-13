import React from "react";
import "./res.css";
import { NameContext } from "../ContextNew/NameContext";
import FormResult from "./FormResult";

const MainForm = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    age: 1,
    address: "",
  });

  console.log(formData);

  return (
    <NameContext.Provider value={formData}>
      <div className="form-container">
        <h1>Form</h1>
        <div className="form-field">
          <label>First Name:</label>
          <input
            type="text"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>
        <br />
        <div className="form-field">
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
        <br />
        <div className="form-field">
          <label>Age:</label>
          <input
            type="text"
            placeholder="Enter your age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
        </div>
        <br />
        <div className="form-field">
          <label>Address:</label>
          <input
            type="text"
            placeholder="Enter your address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>
        <br />
        <button className="btn">Submit</button>
      </div>

      <div className="form-result">
        <h1>Form Result</h1>
      </div>
      <FormResult />
    </NameContext.Provider>
  );
};

export default MainForm;
