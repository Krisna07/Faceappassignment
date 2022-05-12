import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../views/Home";
import Records from "./Records";

import Footer from "./Footer";
import logo from "./logo.png";
import "./layout.css";
import Addrecord from "../Forms/Addrecord";
import { useState, useEffect } from "react";
import Axios from "axios";
import ImageInput from "../views/ImageInput";

const Layout = () => {
  const [criminalList, setCriminalList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/criminal")
      .then(async (response) => setCriminalList(response.data.message))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <nav className="navbar" style={{ color: "white" }}>
        <div>
          <Link to="/">
            <img src={logo} className="logo" style={{ height: "60px" }} />
          </Link>
        </div>
        <div className="menus">
          <li>
            <Link to="records">Records</Link>
          </li>
          <li>
            <Link to="addrecords">Add Records</Link>
          </li>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home criminalList={criminalList} />} />
        <Route
          path="records"
          element={<Records criminalList={criminalList} />}
        />
        <Route path="addrecords" element={<Addrecord />} />
        <Route path="addImage" element={<ImageInput />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
