import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import EventForm from "../EventForm";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SearchBar from "./SearchBar";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  let createLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
    createLinks = (
      <NavLink exact to="/events/add">
        <button className="card">Create an Event</button>
      </NavLink>
    );
  } else {
    sessionLinks = (
      <div>
        <LoginFormModal />

        {/* <NavLink
          exact
          to="/signup"
          style={{ textDecoration: "none", color: "red" }}
        >
          <button className="card">SignUp</button>
        </NavLink> */}
      </div>
    );

    createLinks = (
      <div>
        {!sessionUser && <button className="card">Create an Event</button>}
      </div>
    );
  }

  return (
    <div className="container nav" id="nav">
      <div className="container">
        <div className="container">
          <NavLink
            className="home__link"
            exact
            to="/"
            style={{
              textDecoration: "none",
              color: "red",
            }}
          >
            Up Squad
          </NavLink>
        </div>
        <div className="container">
          <SearchBar />
        </div>
      </div>
      <div className="container">{isLoaded && createLinks}</div>
      <div className="container">{isLoaded && sessionLinks}</div>
    </div>
  );
}

export default Navigation;
