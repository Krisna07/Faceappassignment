import React from "react";

const AlertPage = ({ criminal }) => {
  return (
    <div
      style={{ textAlign: "left", padding: "10px", backgroundColor: "teal" }}
    >
      <h2 style={{ textAlign: "center", padding: "10px" }}> Match Found</h2>
      <p>Name: {criminal.name}</p>
      <p>Age: {criminal.Age}</p>
      <p>Offence: {criminal.NoOffence}</p>
    </div>
  );
};

export default AlertPage;
