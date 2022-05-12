import React from "react";
import "./details.css";

const Details = ({ detail }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "600px",
          disply: "flex",
        }}
      >
        <h2>Criminal Details</h2>
        <div className="detailsData">
          <div
            style={{
              width: "100px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "cyan",
              marginLeft: "200px",
            }}
          >
            No image source
          </div>
        </div>
        <div className="detailsData">
          Full Name <span></span> <span>{detail.name}</span>
        </div>
        <div className="detailsData">
          Age <span></span> <span>{detail.Age}</span>
        </div>
        <div className="detailsData">
          No offence <span></span> <span>{detail.NoOffence}</span>
        </div>
        <div className="detailsData">
          Status <span></span> <span>On run</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
