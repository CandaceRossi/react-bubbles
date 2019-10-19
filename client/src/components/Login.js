import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
  const [form, setForm] = React.useState({
    username: "",
    password: ""
  });
  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", form)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err.response);
        setForm({
          username: "",
          password: ""
        });
      });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChanges}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChanges}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
