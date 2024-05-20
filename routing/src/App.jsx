import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import { Navigate, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Nav from "./pages/Nav";
import Rcourse from "./pages/Rcourse";
import Notfound from "./pages/Notfound";

const App = () => {
  return (
    <div>
    <Nav/>
    <button   onClick={() => navigator(-1)}>Go to Back</button>
    <button   onClick={() => navigator(1)}>Go to forword</button>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/rcourse/:coursename" element={<Rcourse/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>
  );
};

export default App;
