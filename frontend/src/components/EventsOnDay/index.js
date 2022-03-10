import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import EventListModal from "../EventsList/EventListModal";
import EventDetails from "../EventDetails";
import CreateModal from "../EventForm/FormModal";

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
      <>
        <h1>{new Date(value).toDateString()}</h1>
        <h2>No Events Scheduled</h2>
        <CreateModal name={"Create an Event on this day"} />
        <EventListModal></EventListModal>
      </>
    );
  } else {
    return (
      <div>
        <h1>{new Date(value).toDateString()}</h1>

        <ul>
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
