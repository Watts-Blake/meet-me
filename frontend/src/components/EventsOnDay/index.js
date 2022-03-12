import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventListModal from "../EventsList/EventListModal";
import EventDetails from "../EventDetails";
import CreateModal from "../EventForm/FormModal";
import "./eventsOnDay.css";

const EventOnDay = ({ value, onChange }) => {
  const [currentDayEvents, setCurrentDayEvents] = useState(false);

  const eventsObj = useSelector((state) => state.event);
  const events = Object.values(eventsObj);

  useEffect(() => {
    if (events.length) {
      setCurrentDayEvents(
        events.filter(
          (event) =>
            new Date(event.date).toDateString() ===
            new Date(value).toDateString()
        )
      );
    }
  }, [value, eventsObj]);

  if (!currentDayEvents) {
    return (
      <div className="container column gap border current_events">
        <h2>{new Date(value).toDateString()}</h2>
        <h3>No Events Scheduled</h3>
        <CreateModal name={"Create an Event on this day"} />
        <EventListModal></EventListModal>
      </div>
    );
  } else {
    return (
      <div className="container column border current_events">
        <h2>{new Date(value).toDateString()}</h2>

        <ul className="container column ">
          {currentDayEvents &&
            currentDayEvents.map((event) => (
              <EventDetails
                event={event}
                key={event.id}
                id={event.id}
                name={event.name}
              />
            ))}
        </ul>
        <div className="container column gap">
          <CreateModal name={"Create an Event on this day"} />
          <EventListModal events={events}></EventListModal>
        </div>
      </div>
    );
  }
};

export default EventOnDay;
