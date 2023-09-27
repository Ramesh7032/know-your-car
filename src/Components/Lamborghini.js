import React, { useEffect, useState } from "react";
import "./Models.css";
import lamlogo from "./Lamlogo.webp";
import web1 from "./Free_Sample_By_Wix.jpg";
import { Link } from "react-router-dom";

function Lamborghini() {
  const [car, setcar] = useState([]);
  useEffect(() => {
    fetch("https://know-your-car-server.vercel.app/user")
      .then((res) => res.json())
      .then((ans) => setcar(ans))
      .catch((err) => console.log(err.message));
  }, []);
  console.log(car);
  const bmw = [];
  const Audi = [];
  const LR = [];
  const mercedes = [];
  const L = [];
  const F = [];
  const Rolls = [];
  for (let i in car) {
    if (car[i].brand === "BMW") bmw.push(car[i]);
    else if (car[i].brand === "Audi") Audi.push(car[i]);
    else if (car[i].brand === "Land-Rover") LR.push(car[i]);
    else if (car[i].brand === "Mercedes") mercedes.push(car[i]);
    else if (car[i].brand === "Ferrari") F.push(car[i]);
    else if (car[i].brand === "Lamborghini") L.push(car[i]);
    else if (car[i].brand === "Lamborghini") L.push(car[i]);
    else if (car[i].brand === "Rolls-Royce") Rolls.push(car[i]);
  }

  return (
    <div className="lamborghini">
      <div className="lamhead">
        <img src={web1} width="150" height="110" alt="" className="logo1" />

        <div className="heading1">
          <Link to="/">
            {" "}
            <h2 className="link">Home</h2>{" "}
          </Link>
          <Link to="/about">
            <h2>About</h2>{" "}
          </Link>
          <img src={lamlogo} alt="" />
        </div>
      </div>

      <div className="lamborghini2">
        {L.map((car) => (
          <div className="lam3">
            <Link
              to={`/${car._id}`}
              key={car._id}
              style={{ textDecoration: "none" }}
            >
              <img src={car.img} alt="ff" width={250} />
              <h3>{car.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lamborghini;
