import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import EventListModal from "../EventsList/EventListModal";
import EventDetails from "../EventDetails";
import CreateModal from "../EventForm/FormModal";
import "./eventsOnDay.css";

const EventOnDay = ({ value, onChange }) => {
  const [currentDayEvents, setCurrentDayEvents] = useState(null);
  const eventsObj = useSelector((state) => state.event);
  const events = Object.values(eventsObj);
  useEffect(() => {
    const eventsOnCurrentDay = events.filter(
      (event) =>
        new Date(event.date).toDateString() === new Date(value).toDateString()
    );
    if (eventsOnCurrentDay.length) {
      setCurrentDayEvents(eventsOnCurrentDay);
    } else {
      // console.log(true);
      setCurrentDayEvents(null);
    }
  }, [value]);

  if (!currentDayEvents) {
    return (
      <div className="container column border">
        <h2>{new Date(value).toDateString()}</h2>
        <h3>No Events Scheduled</h3>
        <CreateModal name={"Create an Event on this day"} />
        <EventListModal></EventListModal>
      </div>
    );
  } else {
    return (
      <div className="container column border">
        <h1>{new Date(value).toDateString()}</h1>

        <ul className="container column">
          {currentDayEvents &&
            currentDayEvents.map((event) => (
              <EventDetails
                events={events}
                key={event.id}
                id={event.id}
                name={event.name}
              />
            ))}
        </ul>
        <CreateModal name={"Create an Event on this day"} />
        <EventListModal></EventListModal>
      </div>
    );
  }
};

export default EventOnDay;
