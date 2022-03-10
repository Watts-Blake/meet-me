import EventList from "../EventsList";
import EventOnDay from "../EventsOnDay";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getEvents } from "../../store/eventReducer";
import Calendar from "react-calendar";
const Splash = () => {
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());
  const eventsObj = useSelector((state) => state.event);
  const events = Object.values(eventsObj);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <div className="container sp__around">
      <div>
        <Calendar className="card" onChange={onChange} value={value} />
      </div>
      <div>
        <EventOnDay onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default Splash;
