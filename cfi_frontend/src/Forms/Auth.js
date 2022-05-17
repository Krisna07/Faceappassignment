import axios from "axios";
import React, { useState } from "react";
// import createHistory from "history/createBrowserHistory";

import { FaKey } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./auth.css";

const Auth = () => {
  const history = useNavigate();

  const [count, setCount] = useState(60);
  const [inputValue, setInput] = useState("");
  const [err, setErr] = useState();

  // setTimeout(() => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   } else {
  //     history("/login");
  //     localStorage.clear();
  //   }
  // }, 1000);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.OTP);
  const submitForm = (e) => {
    e.preventDefault();
    console.log("form submitted");
    if (user.OTP !== inputValue) {
      return setErr(!err);
    }

    history("/");
  };

  return (
    <div className="pageContainer">
      <form action="" onSubmit={submitForm} className="formContainer">
        <h2>Face Recognition App</h2>
        <FaKey style={{ fontSize: "100px" }} />

        <div className="login-Field">
          <label htmlFor="">Code</label>
          <div className="inputFields">
            <input
              type="text"
              maxLength={6}
              minLength={6}
              className="authCode"
              onInput={(e) => setInput(e.target.value)}
              onKeyPress={() =>
                inputValue.length === 6 ? console.log(inputValue) : ""
              }
            />
          </div>
        </div>
        {count}
        <p style={{ color: "red", fontSize: "12px" }}>
          {!err
            ? "Please enter the code sent in XXXXXX90"
            : "OTP didn't match !!!"}
        </p>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Auth;
