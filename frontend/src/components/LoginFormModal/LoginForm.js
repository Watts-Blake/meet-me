import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
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
    <form className="container" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label className="container">
        Username or Email
        <input
          className="card"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label className="container">
        Password
        <input
          className="card"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <div className="container">
        <button className="card" type="submit">
          Log In
        </button>
        <button className="card" onClick={handleClick}>
          Demo User
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
