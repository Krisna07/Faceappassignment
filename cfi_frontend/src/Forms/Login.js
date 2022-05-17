import React, { useState, useEffect } from "react";
import "./Login.css";
import { FaUser } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import emailjs from "emailjs-com";

// import createHistory from "history/createBrowserHistory";

const Login = () => {
  const history = useNavigate();
  const [user, setUser] = useState();

  const getUser = () => {
    setUser(JSON.parse(localStorage.getItem("user")));
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errmsg, setErrmsg] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const genRandomOTP = Math.floor(100000 + Math.random() * 900000);

    console.log(genRandomOTP);
    axios
      .post("http://localhost:5000/users/login", {
        email: email,
        password: password,
        OTP: genRandomOTP,
      })
      .then((res) => {
        console.log(res);
        history("/auth");
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((Error) => {
        setErrmsg(Error.response.data.message);
      });
  };

  return (
    <div
      className="loginConatiner"
      style={{
        position: "absolute",
        transition: "right 300ms ease",
      }}
    >
      <div className="pageContainer">
        <form action="" onSubmit={submitForm} className="formContainer">
          <h2>Face Recognition App</h2>
          <FaUser style={{ fontSize: "100px" }} />
          <div className="login-Field">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="name"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="login-Field">
            <label htmlFor="">Password</label>
            <input
              type="Password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className="errMessage">
              <p>{errmsg}</p>
            </p>
          </div>

          <button className="btn">Login</button>
          <p>
            New to the app. Please{" "}
            <Link to={"/regester"} style={{ color: "lightblue" }}>
              Register
            </Link>{" "}
            here.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
