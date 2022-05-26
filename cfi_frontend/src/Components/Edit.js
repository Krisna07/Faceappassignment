import React, { useState } from "react";
import "./details.css";
import { FaTimes, FaRunning, FaLock } from "react-icons/fa";

const Edit = ({ edit, setEdit }) => {
  const editCriminal = {
    name: "",
    age: "",
    offence: "",
    status: "",
  };
  const closeEdits = () => {
    setEdit(!edit);
  };
  return (
    <div className="mainContainer">
      <div className="inpageForms">
        <h2>Edit Criminal</h2>
        <div className="imageContainer">
          <div className="image">No image source</div>
          <div className="close_icon" onClick={closeEdits}>
            <FaTimes />
          </div>
        </div>

        <div className="detailsData">
          <label>Full Name </label>
          <input type="text" placeholder={edit.name} className="changeInput" />
        </div>
        <div className="detailsData">
          <label>Age </label>
          <input type="text" placeholder={edit.age} className="changeInput" />
        </div>
        <div className="detailsData">
          <label>Offence Number </label>
          <input
            type="text"
            placeholder={edit.offence}
            className="changeInput"
          />
        </div>
        <div className="detailsData">
          <label>Status </label>
          <span>
            <select
              style={{ width: "200px", padding: ".3rem 2rem" }}
              className="changeInput"
            >
              <option value="">On run</option>
              <option value="">Found</option>
            </select>
          </span>
        </div>
        <div className="detailsData">
          <label>Upload Image </label>
          <input
            type="file"
            className="changeInput"
            style={{ color: "white" }}
          />
        </div>
        <div className="detailsData" style={{ justifyContent: "center" }}>
          <button className="submit_btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
