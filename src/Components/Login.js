import React, { useState } from "react";
import web1 from "./Free_Sample_By_Wix.jpg";
import { Link } from "react-router-dom";
import "./Login.css";

const correctEmail = "bodaramesh02@gmail.com";
const correctPassword = "Rami7032";

const App = () => {
  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { username, password } = data;

  const changeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (username === correctEmail && password === correctPassword) {
      // If credentials are correct, redirect to the admin page.
      window.location.href = "/Admin"; // Replace with your actual admin page route.
    } else {
      // If credentials are incorrect, display an error message.

      alert("Incorrect Email or Password");
    }
  };

  return (
    <div className="login">
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

      <center className="center1">
        <br />
        <div className="mainform">
          <form onSubmit={submitHandler} className="form1">
            <h3>LOGIN</h3>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Gmail"
              onChange={changeHandler}
              className="input1"
            />
            <br />
            <br />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              className="input2"
              onChange={changeHandler}
            />
            <br />
            <br />
            <button type="submit" className="btn21">
              Login
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </center>
      <br />
      <br />
    </div>
  );
};

export default App;
