import React from "react";
import { useState, useEffect } from "react";

const Delete = ({ criminal }) => {
  const [crime, setCriminal] = useState(criminal);

  const goback = () => {
    setCriminal("");
  };
  return (
    <div
      style={{
        width: "400px",
        background: "cyan",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        borderRadius: "10px",
        position: "fixed",
        top: "20%",
        left: "40%",
      }}
    >
      <p
        style={{ width: "90%", textAlign: "right", fontSize: "20px" }}
        onClick={goback}
      >
        x
      </p>
      <p>Are you sure You want to delete {criminal.name} ?</p>
      <p>
        Even the data is deleted it will be stored in database for future use.
        Thanks
      </p>
      <div
        style={{
          width: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            background: "white",
          }}
        >
          Yes
        </button>
        <button
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            background: "lightgreen",
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Delete;
