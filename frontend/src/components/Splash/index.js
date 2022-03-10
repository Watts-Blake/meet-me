import EventList from "../EventsList";
import EventOnDay from "../EventsOnDay";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getTypes } from "../../store/types";
import { getEvents } from "../../store/eventReducer";
import { getVenues } from "../../store/venues";
import Calendar from "react-calendar";
const Splash = () => {
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());
  const currentUser = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(getEvents());
    dispatch(getVenues());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <>
      {currentUser && <h1>{`Welcome, ${currentUser.username} 👋`}</h1>}
      <div className="item__container sp__around gap">
        <div>
          <h2>Events Calendar</h2>
          <Calendar className="card" onChange={onChange} value={value} />
        </div>
        <div className="container">
          <EventOnDay onChange={onChange} value={value} />
        </div>
      </div>
    </>
  );
};

export default Splash;
