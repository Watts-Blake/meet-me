import React from "react";
import { useSelector } from "react-redux";

import EventDetails from "../EventDetails";

const EventList = ({ showEventListModal, setShowEventListModal }) => {
  const eventsObj = useSelector((state) => state.event);
  const events = Object.values(eventsObj);
  return (
    <div className="top_modal_div">
      <button
        className="card collapse back"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
        onClick={() => setShowEventListModal(false)}
      >
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
      </button>
      <div className="container column list__all">
        <h1
          style={{
            position: "fixed",
            top: "23px",
            backgroundColor: "black",
            width: "auto",
            borderRadius: "5px",
            zIndex: "1",
          }}
        >
          Up Coming Events
        </h1>
        <ul>
          {events.map((event) => (
            <EventDetails event={event} key={event.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventList;
