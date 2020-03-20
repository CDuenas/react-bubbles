import React, { useState } from "react";
import axios from "axios";

const initialLogin = {
  username: "",
  password
};

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login, setLogin]= useState(initialLogin);

  const changeHandler = e => {
    e.preventDefault();

    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  }

  const loginHandler = e => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", login)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        // props.history.push("/protected")
      })
      .catch(err => {
        console.log(err)
      });
  }
  return (
    <>
      <form onSubmit={loginHandler}>
        <input 
        type="text"
        name="username"
        value={login.username}
        onChange={changeHandler}
        />
        <input 
        type="text"
        name="password"
        value={login.password}
        onChange={changeHandler}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;
