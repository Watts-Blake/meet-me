import Calendar from "react-calendar";
import EventOnDay from "../EventsOnDay";
import { differenceInCalendarDays, isBefore } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const MyCalendar = () => {
  const [value, setValue] = useState(new Date());
  const eventsObj = useSelector((state) => state.event);
  const events = Object.values(eventsObj);
  const eventsDateArr = events.map((event) => new Date(event.date));

  function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }

  function tileContent({ date, view }) {
    // Add class to tiles in month view only
    if (view === "month") {
      if (eventsDateArr.find((dDate) => isSameDay(dDate, date))) {
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
    <div className="container row gap">
      <div className="main_calendar">
        <Calendar
          className="card "
          onChange={onChange}
          value={value}
          tileContent={tileContent}
          onClickDay={console.log(value)}
          id=""
        />
      </div>
      <div className="current_events_container">
        <EventOnDay onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default MyCalendar;
