import React from "react";
import { useSelector } from "react-redux";

import EventDetails from "../EventDetails";

const EventList = ({ showEventListModal, setShowEventListModal }) => {
  const eventsObj = useSelector((state) => state.event);
  const events = Object.values(eventsObj);
  return (
    <div className="container column list__all">
      <h1
        style={{
          position: "fixed",
          top: "6px",
          backgroundColor: "black",
          width: "auto",
          borderRadius: "5px",
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
  );
};

export default EventList;
