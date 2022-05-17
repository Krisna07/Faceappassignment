import React, { useState, useEffect } from "react";

import "./records.css";
import { FaEllipsisV, FaEllipsisH } from "react-icons/fa";
import Details from "./Details";
import Edit from "./Edit";
import Delete from "./Delete";

const Records = ({ criminalList }) => {
  const [action, setAction] = useState(false);
  const [detailss, setDetaills] = useState();
  const [edit, setEdit] = useState();
  const [remove, setRemove] = useState();

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

    setDetaills(criminalList.find((obj) => obj._id === id));
    setEdit("");
    setRemove("");

    console.log(detailss);
  };

  const editDetails = (id) => {
    console.log(id);

    setEdit(criminalList.find((obj) => obj._id === id));
    setDetaills("");
    setRemove("");
    console.log(detailss);
  };
  const deleteThis = (id) => {
    console.log(id);

    setRemove(criminalList.find((obj) => obj._id === id));
    setDetaills("");
    setEdit("");
    console.log(detailss);
  };

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
                          onClick={() => editDetails(criminal._id)}
                        >
                          Edit
                        </button>
                        <button
                          style={buttonStyle("blue")}
                          onClick={() => viewDetails(criminal._id)}
                        >
                          View
                        </button>
                        <button
                          style={buttonStyle("red")}
                          onClick={() => deleteThis(criminal._id)}
                        >
                          Delete
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
        {detailss ? <Details detail={detailss} /> : ""}
        {edit ? <Edit criminal={edit} /> : ""}
        {remove ? <Delete criminal={remove} /> : ""}
      </div>
    </div>
  );
};

export default Records;
