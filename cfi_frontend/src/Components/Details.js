import React from "react";
import "./details.css";
import { FaTimes } from "react-icons/fa";

const Details = ({ detail, setDetail }) => {
  const closeView = () => setDetail(!detail);
  return (
    <div className="mainContainer">
      <div className="inpageForms">
        <h2>Criminal Details</h2>
        <div className="imageContainer">
          <div className="image">No image source</div>
          <div className="close_icon" onClick={closeView}>
            <FaTimes />
          </div>
        </div>
        <div className="detailsData">
          <label> Full Name</label> <span></span> <span>{detail.name}</span>
        </div>
        <div className="detailsData">
          <label htmlFor="">Age</label> <span></span> <span>{detail.Age}</span>
        </div>
        <div className="detailsData">
          <label htmlFor=""> No offence</label> <span></span>{" "}
          <span>{detail.NoOffence}</span>
        </div>
        <div className="detailsData">
          <label htmlFor="">Status</label> <span></span> <span>On run</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
