import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";
import { Link } from "react-router-dom";
import web1 from "./Free_Sample_By_Wix.jpg";

const App = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [engine, setEngine] = useState("");
  const [powerTorque, setPowerTorque] = useState("");
  const [seating, setSeating] = useState("");
  const [img, setImg] = useState("");
  const [bmwList, setBmwList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBmw = {
        title,
        price,
        brand,
        rating: parseFloat(rating),
        fual_type: fuelType,
        engine,
        power_torque: powerTorque,
        seating: parseInt(seating),
        img,
        completed: false,
      };
      await axios.post("/user", newBmw);
      setTitle("");
      setPrice("");
      setBrand("");
      setRating("");
      setFuelType("");
      setEngine("");
      setPowerTorque("");
      setSeating("");
      setImg("");
      fetchData(); // Fetch data again after creating the new entry
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/user");
      setBmwList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="admin">
      <div className="head">
        <div className="logo21">
          <img src={web1} width="150" height="110" alt="" className="logo1" />
        </div>
        <div className="list21">
          <Link to="/" className="p-link">
            <p>Home</p>
          </Link>
          <Link to="/about" className="p-link">
            <p>About</p>
          </Link>
        </div>
      </div>
      <div className="div1">
        <h2 className="admin-h2">Welcome Admin</h2>
        <center>
          <form onSubmit={handleSubmit} className="admin-form">
            <label>
              Title:
              <br></br>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input21"
              />
            </label>
            <br></br>
            <br></br>
            <label>
              image:
              <br></br>
              <input
                type="text"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                className="input21"
              />
            </label>
            <br></br>
            <br></br>
            <label>
              Price:
              <br></br>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="input21"
              />
            </label>
            <br></br>
            <br></br>
            <label>
              Brand:
              <br></br>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="input21"
              />
            </label>
            <br></br>
            <br></br>
            <label>
              Rating:
              <br></br>
              <input
                type="text"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="input21"
              />
            </label>
            <br></br>
            <br></br>
            <label>
              Fual:
              <br></br>
              <input
                type="text"
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                className="input21"
              />
            </label>
            <br></br>
            <br></br>
            <label>
              Engine:
              <br></br>
              <input
                type="text"
                value={engine}
                onChange={(e) => setEngine(e.target.value)}
                className="input21"
              />
            </label>
            <br></br>
            <br></br>
            <label>
              power_torque:
              <br></br>
              <input
                type="text"
                value={powerTorque}
                onChange={(e) => setPowerTorque(e.target.value)}
                className="input21"
              />
            </label>
            <br></br>
            <br></br>
            <label>
              Seating:
              <br></br>
              <input
                type="text"
                value={seating}
                onChange={(e) => setSeating(e.target.value)}
                className="input21"
              />
            </label>
            <br></br>
            <br></br>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </center>
      </div>
    </div>
  );
};

export default App;
