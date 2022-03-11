import { NavLink } from "react-router-dom";
import SingleEventModal from "../SingleEvent/SingleEventModal";
import { useEffect } from "react";
import { getCurrentEvent } from "../../store/setCurrentEvent";
import { useDispatch, useSelector } from "react-redux";

const EventDetails = ({ event }) => {
  // useEffect(() => {
  //   dispatch(getCurrentEvent(event.id));
  // }, [dispatch]);

  return (
    <li className="list">
      <SingleEventModal event={event} />
    </li>
  );
};

export default EventDetails;
