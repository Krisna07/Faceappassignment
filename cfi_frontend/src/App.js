import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import { useState, useEffect } from "react";
import Login from "./Forms/Login";
import Auth from "./Forms/Auth";
import Axios from "axios";
import Regester from "./Forms/Regester";

function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    Axios.get("http://localhost:5000/users")
      .then(async (response) => setUsers(response.data.message))
      .catch((err) => console.log(err));
  }, []);
  console.log(users);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Layout />} />
          <Route path="/login" element={<Login user={users} />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/regester" element={<Regester />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
