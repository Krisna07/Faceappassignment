import React, { useState } from "react";
import "./Login.css";
import { FaUser } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
// import createHistory from "history/createBrowserHistory";

const Regester = ({ user }) => {
  return (
    <div
      className="loginConatiner"
      style={{
        position: "absolute",
        transition: "right 300ms ease",
      }}
    >
      <div className="pageContainer">
        <form action="" className="formContainer">
          <h2>Face Recognition App</h2>
          <FaUser style={{ fontSize: "100px" }} />
          <div className="login-Field">
            <label htmlFor="">Username</label>
            <input type="text" />
          </div>

          <div className="login-Field">
            <label htmlFor="">Batch No ID</label>
            <input />
          </div>
          <div className="login-Field">
            <label htmlFor="">Department</label>
            <input />
          </div>
          <div className="login-Field">
            <label htmlFor="">Password</label>
            <input />
          </div>
          <div className="login-Field">
            <label htmlFor="">Re-type Password</label>
            <input />
          </div>
          <div className="login-Field">
            <label htmlFor="">Enter the Image for varification</label>
            <input type={"file"} />
            <p style={{ width: "25ch" }}>
              Image should be in uniform with Batch Id visible.
            </p>
          </div>

          <button className="btn">Request Registration</button>
          <p
            style={{
              width: "40ch",
            }}
          >
            All your details will be sumitted for the verifiation. We will
            contact you sortly with your user login id after verification is
            completed.
          </p>
          <p>
            Already a memeber. Please
            <Link to={"/Login"} style={{ color: "lightblue" }}>
              <span> Login</span>
            </Link>{" "}
            here.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Regester;
