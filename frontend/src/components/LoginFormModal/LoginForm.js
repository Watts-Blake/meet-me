import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import SignupFormPage from "../SignUpFormPage";
import { Route } from "react-router-dom";

function LoginForm({ title }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [hover, setHover] = useState("false");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    return dispatch(
      sessionActions.login({ credential: "Demo-User", password: "password" })
    );
  };

  return (
    <div className="container">
      <div className="container column">
        <h2>{title}</h2>
        <form className="container column" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label className="container column">
            Username or Email
            <input
              className="card"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label className="container column">
            Password
            <input
              className="card"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <div className="container row gap">
            <button className="card" type="submit">
              Log In
            </button>
            <button className="card" onClick={handleClick}>
              Demo User
            </button>
          </div>
        </form>
      </div>
      <div className="container column">
        <h2>Sign Up</h2>
        <SignupFormPage className="container column">Sign Up</SignupFormPage>
      </div>
    </div>
  );
}

export default LoginForm;
