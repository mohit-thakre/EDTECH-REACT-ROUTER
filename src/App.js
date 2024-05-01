import React, { useState } from "react";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Privateroute from "./Components/Privateroute";

const App = () => {
  const [login, setlogin] = useState(false);

  return (
    <div className="w-full min-h-screen bg-slate-900">
      <Nav login={login} setlogin={setlogin} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={<Login login={login} setlogin={setlogin} />}
        ></Route>
        <Route
          path="/signup"
          element={<Signup login={login} setlogin={setlogin} />}
        ></Route>
        <Route
          path="/dashboard"
          element={
            <Privateroute login={login}>
              <Dashboard />
            </Privateroute>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
