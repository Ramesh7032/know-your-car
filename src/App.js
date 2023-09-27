import React from "react";
import Admin from "./Components/Admin";
import About from "./Components/About";
import Cars from "./Components/Cars";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Lamborghini from "./Components/Lamborghini";
import Ferrari from "./Components/Ferrari";
import BMW from "./Components/Bmw";
import Audi from "./Components/Audi";
import Mercedes from "./Components/Mercedes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleCar from "./Components/SingleCar";
import Landrover from "./Components/Landrover";
import Rolls from "./Components/Rolls";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Cars />} />
        <Route path="/:id" element={<SingleCar />} />
        <Route path="/about" element={<About />} />
        <Route path="/Lamborghini" element={<Lamborghini />} />
        <Route path="/ferrari" element={<Ferrari />} />
        <Route path="/bmw" element={<BMW />} />
        <Route path="/mercedes" element={<Mercedes />} />
        <Route path="/audi" element={<Audi />} />
        <Route path="/rangerover" element={<Landrover />} />
        <Route path="/rolls-royce" element={<Rolls />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>

      {/* <Signup /> */}
    </Router>
  );
}
