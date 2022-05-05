import React from "react";

const Addrecord = () => {
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
          <form action="" className="formContainer">
            <h2>Add New Criminal</h2>

            <div className="login-Field">
              <label htmlFor="">First Name</label>
              <input type="text" />
            </div>
            <div className="login-Field">
              <label htmlFor="">Password</label>
              <input type="Password" onChange={(e) => {}} />
            </div>

            <button className="btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addrecord;

// <p className="errMessage">
// <p style={{ display: `${userErr ? "block" : "none"}` }}>
//   Wrong Password
// </p>
// <p style={{ display: `${passwordErr ? "block" : "none"}` }}>
//   Envalid Username
// </p>
