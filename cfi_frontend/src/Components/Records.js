import React, { useState, useEffect } from "react";
// import Axios from "axios";
import "./records.css";
import { FaEllipsisV, FaEllipsisH } from "react-icons/fa";

const Records = () => {
  const [criminalList, setCriminalList] = useState([]);
  const [action, setAction] = useState(false);

  // useEffect(() => {
  //   Axios.get("http://localhost:5000/criminal").then(async (response) => {
  //     setCriminalList(response.data.message);
  //   });
  // }, []);
  console.log(criminalList);
  const showOptions = () => {
    setAction(!action);
  };
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

  return (
    <div className="records">
      <div className="userDispaly">
        <h1> Criminal list</h1>
        <div class="table-wrapper">
          <table class="fl-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>No of offence</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {criminalList.map((data) => {
                return (
                  <tr>
                    <td key={data.id}>{data.name}</td>
                    <td>{data.Age}</td>
                    <td>{data.NoOffence}</td>
                    <td>Image</td>

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
                          display: `${action ? "flex" : "none"}`,
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <button style={buttonStyle("green")}>Edit</button>
                        <button style={buttonStyle("red")}>Delete</button>
                        <button style={buttonStyle("blue")}>View</button>
                      </div>
                      <div style={{ margin: "10px 0" }}>
                        {!action ? (
                          <FaEllipsisV onClick={() => showOptions()} />
                        ) : (
                          <FaEllipsisH onClick={() => showOptions()} />
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Records;
