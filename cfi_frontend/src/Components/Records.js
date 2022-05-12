import React, { useState, useEffect } from "react";

import "./records.css";
import { FaEllipsisV, FaEllipsisH } from "react-icons/fa";
import Details from "./Details";

const Records = ({ criminalList }) => {
  const [action, setAction] = useState(false);

  console.log(criminalList);

  // criminalList.map((criminal) => {
  //   if (criminal.Image) {
  //     console.log(criminal.Image.data.data);
  //   }
  // });
  const buttonStyle = (color) => {
    return {
      margin: "0 2px",
      backgroundColor: color,
      padding: "4px 6px",
      fontSize: "10px",
      border: "none",
      color: "white",
      borderRadius: "8px",
    };
  };

  const viewDetails = (id) => {
    console.log(id);

    const thiscriminal = criminalList.find(() => {
      return (criminalList._id = id);
    });
    console.log(thiscriminal);
  };
  // const imageSource = (source) => {
  //   return btoa(String.fromCharCode(...new Uint8Array(source.Image.data.data)));
  // };

  return (
    <div className="records">
      <div className="userDispaly">
        <h1> Criminal list</h1>
        <div className="table-wrapper">
          <table className="fl-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>No of offence</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {criminalList.map((criminal) => {
                // const imageData = btoa(
                //   String.fromCharCode(
                //     ...new Uint8Array(criminal.Image.data.data)
                //   )
                // );
                // console.log(imageData);
                return (
                  <tr key={criminal._id}>
                    <td>{criminal.name}</td>
                    <td>{criminal.Age}</td>
                    <td>{criminal.NoOffence}</td>

                    <td
                      style={{
                        display: "grid",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: `flex`,
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <button
                          style={buttonStyle("green")}
                          onClick={() => viewDetails(criminal._id)}
                        >
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="details">
        <Details />
      </div>
    </div>
  );
};

export default Records;
