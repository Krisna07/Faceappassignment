import React from "react";
import "./details.css";

const Edit = ({ criminal }) => {
  const editCriminal = {
    name: "",
    age: "",
    offence: "",
    status: "",
  };
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
        <h2>Edit Criminal</h2>
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
          Full Name <span></span>
          <input type="text" placeholder={criminal.name} />
        </div>
        <div className="detailsData">
          Age
          <input type="text" placeholder={criminal.Age} />
        </div>
        <div className="detailsData">
          No offence
          <input type="text" placeholder={criminal.NoOffence} />
        </div>
        <div className="detailsData">
          Status <span></span>{" "}
          <span>
            <select name="" id="" style={{ width: "150px" }}>
              <option value="">On run</option>
              <option value="">Found</option>
            </select>
          </span>
        </div>
        <div className="detailsData">
          Upload Image
          <input type="file" />
        </div>
        <div className="detailsData" style={{ justifyContent: "center" }}>
          <button
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              background: "lightgreen",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
