import React, { useState } from "react";
import "./addrecord.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addrecord = () => {
  const [formData, setFromdata] = useState({
    name: "",
    lastname: "",
    age: "",
    noOffence: "",
    address: "",
  });
  const { name, age, noOffence, address, lastname } = formData;
  const history = useNavigate();

  const onchange = (e) => {
    setFromdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onsubmit = (e) => {
    e.preventDefault();
    history("/");

    // axios.post("http://localhost:5000/criminal/");
  };

  return (
    <div>
      <div
        className="loginConatiner"
        style={{
          position: "absolute",
          transition: "right 300ms ease",
        }}
      >
        <div className="pageContainer">
          <form
            method="POST"
            action="/"
            className="addform"
            onSubmit={onsubmit}
          >
            <h2>Add New Criminal</h2>

            <div className="fromData">
              <div>
                <label htmlFor="">First Name*</label>
                <input
                  type="text"
                  value={name}
                  name="name"
                  onChange={onchange}
                />
              </div>
              <div>
                <label htmlFor="">Last Name*</label>
                <input
                  type="text"
                  value={lastname}
                  name="lastname"
                  onChange={onchange}
                />
              </div>
            </div>
            <div className="fromData">
              <div>
                <label>Age*</label>
                <input
                  type="number"
                  name="age"
                  value={age}
                  onChange={onchange}
                />
              </div>
              <div>
                <label htmlFor="">No of offence*</label>
                <input
                  type="number"
                  name="offence"
                  value={noOffence}
                  onChange={onchange}
                />
              </div>
            </div>
            <div className="fromData">
              <div>
                <label htmlFor="">Address</label>
                <input
                  type="address"
                  name="address"
                  value={address}
                  onChange={onchange}
                />
              </div>
            </div>
            <div className="fromData">
              <div>
                <label htmlFor="">Status</label>
                <input type="checkbox" />
              </div>
            </div>
            <div className="fromData">
              <div>
                <label htmlFor="">Image</label>
                <input type="File" />
              </div>
            </div>

            <button className="btn">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addrecord;
// <div className="fromData">
// <div>
//   <label htmlFor="">Image*</label>
//   <input type="file" onChange={(e) => setimage(e.target.value)} />
// </div>
// </div>
