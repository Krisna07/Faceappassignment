// import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import Axios from "axios";

import { useNavigate } from "react-router-dom";
import AlertPage from "./AlertPage";

import VideoInput from "./VideoInput";

const Home = ({ criminalList, user }) => {
  const history = useNavigate();
  const getCriminal = () => {
    return localStorage.getItem("Matched");
  };

  useEffect(() => {
    const getUser = localStorage.getItem("user");

    if (!getUser) {
      history("/login");
    }
  }, []);
  console.log(user);
  const [criminalProfile, setCriminalProfile] = useState();
  const found = getCriminal();

  if (criminalProfile) {
    Axios.put(`http://localhost:5000/criminal/${criminalProfile._id}`, {
      Found: true,
    }).then(async (response) => {
      console.log(response);
    });
  }
  //   const isAdmin = () => {
  //     if (user.isAdmin) {
  //     return addImage.style.display = "block"
  //     }
  //     addImage.style.display = "none"
  //  }

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <p>Hi {user.name}</p>
      <h1>Camera</h1>
      <VideoInput />

      {criminalProfile ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            top: "0",
            color: "red",
            fontSize: "40px",
          }}
        >
          <AlertPage criminal={criminalProfile} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
