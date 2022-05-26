import axios from "axios";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Delete = ({ remove, setRemove }) => {
  const history = useNavigate();
  const goback = () => {
    setRemove(!remove);
  };
  const deleteAlert = {
    width: "30%",
    padding: ".5rem",
    background: "aqua",
    position: "absolute",
    top: "35%",
    left: "35%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  };
  const deleteCriminal = () => {
    if (remove) {
      axios
        .delete(`http://localhost:5000/criminal/${remove._id}`)
        .then((res) => {
          console.log(res);
          history("/records");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div style={deleteAlert}>
      <div onClick={goback} style={{ margin: ".5rem" }}>
        <FaTimes
          style={{
            fontSize: "20px",
            textAlign: "right",
            position: "absolute",
            left: "90%",
            top: "10%",
          }}
        />
      </div>
      <p>Are you sure You want to delete {remove.name} ?</p>

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
          onClick={deleteCriminal}
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
          onClick={goback}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Delete;
