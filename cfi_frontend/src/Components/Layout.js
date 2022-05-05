import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../views/Home";
import Records from "./Records";

import Footer from "./Footer";
import logo from "./logo.png";
import "./layout.css";
import Addrecord from "../Forms/Addrecord";
import AlertPage from "../views/AlertPage";

const Layout = () => {
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
        <Route path="/" element={<Home />} />
        <Route path="records" element={<Records />} />
        <Route path="addrecords" element={<Addrecord />} />
        <Route path="alert" element={<AlertPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
