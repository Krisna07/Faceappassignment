import React, { useState } from "react";
import "./Login.css";
import { FaUser } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
// import createHistory from "history/createBrowserHistory";

const Regester = () => {
  const history = useNavigate();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [batchid, setbatchid] = useState();
  const [department, setdepartment] = useState();
  const [password, setpassword] = useState();
  const [repassword, setRepassword] = useState();
  const [err, setErr] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    console.log("from submitted");
    if (!password || password !== repassword) {
      return setErr("Password not matched");
    }
    axios
      .post("http://localhost:5000/users/register", {
        name: name,
        email: email,
        batchid: batchid,
        department: department,
        password: password,
      })
      .then((res) => {
        console.log(res);
        history("/login");
      })
      .catch((error) => {
        setErr(error);
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
        <form action="" className="formContainer" onSubmit={submitForm}>
          <h2>Face Recognition App</h2>
          <FaUser style={{ fontSize: "100px" }} />
          <div className="login-Field">
            <label htmlFor="">Username</label>
            <input type="text" onChange={(e) => setname(e.target.value)} />
          </div>
          <div className="login-Field">
            <label htmlFor="">Email</label>
            <input type="email" onChange={(e) => setemail(e.target.value)} />
          </div>

          <div className="login-Field">
            <label htmlFor="">Batch No ID</label>
            <input onChange={(e) => setbatchid(e.target.value)} />
          </div>
          <div className="login-Field">
            <label htmlFor="">Department</label>
            <input
              type="place"
              onChange={(e) => setdepartment(e.target.value)}
            />
          </div>
          <div className="login-Field">
            <label htmlFor="">Password</label>
            <input onChange={(e) => setpassword(e.target.value)} />
          </div>
          <div className="login-Field">
            <label htmlFor="">Re-type Password</label>
            <input
              type={"password"}
              onChange={(e) => setRepassword(e.target.value)}
            />
          </div>
          <div>{err}</div>

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
            </Link>
            here.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Regester;

// <div className="login-Field">
// <label htmlFor="">Enter the Image for varification</label>
// <input type={"file"} />
// <p style={{ width: "25ch" }}>
//   Image should be in uniform with Batch Id visible.
// </p>
// </div>
