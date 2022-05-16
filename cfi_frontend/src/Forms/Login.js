import React, { useState } from "react";
import "./Login.css";
import { FaUser } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
// import createHistory from "history/createBrowserHistory";

const Login = ({ user }) => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const userValidation = () => {
    if (user.toLowerCase() === "student" && password === "123456") {
      return true;
    }
    if (user.toLowerCase() !== "student") {
      setUserErr(true);
    }
    if (password !== "123456") {
      setPasswordErr(true);
    }
  };
  // const authUser = () => {
  //   if (email) {
  //     return user.filter((user) => (user.email = email));
  //   }
  // };
  // console.log(authUser());

  const submitForm = (e) => {
    e.preventDefault();
    if (!userValidation) {
      return history("/");
    }

    history("/auth");
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
            <label htmlFor="">Username</label>
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="login-Field">
            <label htmlFor="">Password</label>
            <input
              type="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className="errMessage">
              <p style={{ display: `${userErr ? "block" : "none"}` }}>
                Wrong Password
              </p>
              <p style={{ display: `${passwordErr ? "block" : "none"}` }}>
                Envalid Username
              </p>
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
