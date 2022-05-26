import React, { useState } from "react";
import "./addrecord.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addrecord = () => {
  const [name, setName] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [age, setAge] = useState();
  const [offence, setoffence] = useState();
  const [address, setAddress] = useState();
  const [status, setStatus] = useState();
  const [err, setErr] = useState();

  const history = useNavigate();

  const onsubmit = (e) => {
    e.preventDefault();
    setName(firstname + " " + lastname);

    axios
      .post("http://localhost:5000/criminal", {
        name: name,
        age: age,
        offence: offence,
        address: address,
      })
      .then((res) => {
        console.log(res);
        history("/");
      })
      .catch((err) => {
        setErr(err);
      });
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
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Last Name*</label>
                <input
                  type="text"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="fromData">
              <div>
                <label>Age*</label>
                <input type="number" onChange={(e) => setAge(e.target.value)} />
              </div>
              <div>
                <label htmlFor="">No of offence*</label>
                <input
                  type="number"
                  onChange={(e) => setoffence(e.target.value)}
                />
              </div>
            </div>
            <div className="fromData">
              <div>
                <label htmlFor="">Address</label>
                <input
                  type="address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="fromData">
              <div>
                <label htmlFor="">Status</label>
                <input
                  type="checkbox"
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
            </div>
            <div className="fromData">
              <div>
                <label htmlFor="">Image</label>
                <input type="File" />
              </div>
            </div>
            <div>{setErr}</div>
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
