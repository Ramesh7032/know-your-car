import React, { useState } from "react";

export default function Signup() {
  const [data1, setdata1] = useState({
    username: "",
    password: "",
    email: "",
    confirmpassword: "",
  });
  const { username, password, email, confirmpassword } = data1;
  const changeHandler = (e) => {
    setdata1({ ...data1, [e.target.name]: [e.target.value] });
  };
  const submitHandler1 = (e) => {
    e.preventDefault();
    if (username.length <= 5) {
      alert("username incorrect");
    } else {
      console.log(data1);
    }
  };

  return (
    <div>
      <center>
        <form autoComplete="off" onSubmit={submitHandler1}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={changeHandler}
          />{" "}
          <br />
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
          <br /> <br />
          <input
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            onChange={changeHandler}
          />
          {password !== confirmpassword ? (
            <p>passwords are not matching</p>
          ) : null}
          <br />
          <br />
          <input type="submit" name="submit" />
          <br />
          <br />
        </form>
      </center>
    </div>
  );
}
