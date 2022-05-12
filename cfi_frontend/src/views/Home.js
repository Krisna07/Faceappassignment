// import { render } from "@testing-library/react";
import React from "react";
import Axios from "axios";

import { useNavigate } from "react-router-dom";
import AlertPage from "./AlertPage";

import VideoInput from "./VideoInput";

const Home = ({ criminalList }) => {
  const getCriminal = () => {
    return localStorage.getItem("Matched");
  };

  const found = getCriminal();
  console.log(found);
  const criminalProfile = criminalList.find(() => {
    return (criminalList.name = found);
  });
  console.log(criminalList);
  console.log(criminalProfile);
  if (criminalProfile) {
    Axios.put(`http://localhost:5000/criminal/${criminalProfile._id}`, {
      Found: true,
    }).then(async (response) => {
      console.log(response);
    });
  }
  const history = useNavigate();

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <h1>Camera</h1>
      <VideoInput />

      {!criminalProfile ? (
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
        ></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
