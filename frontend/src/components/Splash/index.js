import EventList from "../EventsList";
import EventOnDay from "../EventsOnDay";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getTypes } from "../../store/types";
import { getEvents } from "../../store/eventReducer";
import { getVenues } from "../../store/venues";
import Calendar from "react-calendar";
import { differenceInCalendarDays, isBefore } from "date-fns";
import "./Splash.css";
const Splash = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(new Date());
  const currentUser = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(getEvents());
    dispatch(getVenues());
    dispatch(getTypes());
  }, [dispatch]);
  const eventsObj = useSelector((state) => state.event);
  const events = Object.values(eventsObj);
  const eventDateArr = events.map((event) => new Date(event.date));

  function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }

  function tileContent({ date, view }) {
    // Add class to tiles in month view only
    if (view === "month") {
      if (eventDateArr.find((dDate) => isSameDay(dDate, date))) {
        return (
          <div
            style={{
              fontSize: "8px",
            }}
          >
            🔵
          </div>
        );
      } else {
        return <div>•</div>;
      }
    }
  }

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <div className="container column">
      {currentUser && (
        <h1 className="welcome">{`Welcome, ${currentUser.username} 👋`}</h1>
      )}
      <div className="container row">
        <div className="event_h2">
          <h2 className="event_h2">Events Calendar</h2>
        </div>
        <div className="space_holder"></div>
      </div>
      <div className="container row sp__around gap">
        <div className="container column"></div>
        <div className="container calendar_container">
          <Calendar
            className="card"
            onChange={onChange}
            value={value}
            tileContent={tileContent}
          />
        </div>
        <div className="current_events_container">
          <EventOnDay onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  );
};

export default Splash;
