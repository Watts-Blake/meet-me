import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import SingleEvent from "../SingleEvent";
import EventDetails from "../EventDetails";

const EventList = ({ showEventListModal, setShowEventListModal }) => {
  const dispatch = useDispatch();

  const eventsObj = useSelector((state) => state.event);
  const events = Object.values(eventsObj);
  return (
    <div>
      <h1>Up Coming Events</h1>
      <ul>
        {events.map((event) => (
          <EventDetails
            events={events}
            key={event.id}
            id={event.id}
            thisEvent={event}
            name={event.name}
          />
        ))}
      </ul>

      {/* <Switch>
        <Route path="/events/:id">
          <SingleEvent
            showEventListModal={showEventListModal}
            setShowEventListModal={setShowEventListModal}
            events={events}
          />
        </Route>
      </Switch> */}
    </div>
  );
};

export default EventList;
