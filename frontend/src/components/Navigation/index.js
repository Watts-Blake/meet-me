import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import EventForm from "../EventForm";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SearchBar from "./SearchBar";
import CreateModal from "../EventForm/FormModal";
import EventListModal from "../EventsList/EventListModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  let createLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton className="log" user={sessionUser} />;
    createLinks = (
      <div className="container row gap">
        <CreateModal></CreateModal>
        <EventListModal />
      </div>
    );
  } else {
    sessionLinks = (
      <div>
        <LoginFormModal name={`Login || Signup`} title={`Login || Signup`} />
      </div>
    );

    createLinks = (
      <div>
        {!sessionUser && (
          <div className="container row gap">
            <LoginFormModal
              name={`Create an Event`}
              title={`You Must Be Signed In To Create an Event`}
            />
            <EventListModal />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="nav container row gap sp__between" id="nav">
      <div className="container row gap">
        <div className="container row gap">
          <NavLink className="home__link" exact to="/" style={{}}>
            Up Squad
          </NavLink>
        </div>
        <div className="">
          <SearchBar />
        </div>
      </div>
      <div className="">{isLoaded && createLinks}</div>
      <div className="log">{isLoaded && sessionLinks}</div>
    </div>
  );
}

export default Navigation;
