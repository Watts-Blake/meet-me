import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import SingleEvent from "../EventModal";
import EventDetails from "../EventDetails";
import { getEvents } from "../../store/eventReducer";

const EventList = () => {
  const dispatch = useDispatch();

  const eventsObj = useSelector((state) => state.event.entries);
  const events = Object.values(eventsObj);
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <div>
      <h1>Up Coming Events</h1>
      <ul>
        {events.map(({ id, name }) => (
          <EventDetails events={events} key={id} id={id} name={name} />
        ))}
      </ul>

      <Switch>
        <Route path="/events/:id">
          <SingleEvent events={events} />
        </Route>
      </Switch>
    </div>
  );
};

export default EventList;
