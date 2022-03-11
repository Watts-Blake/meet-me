import { NavLink } from "react-router-dom";
import SingleEventModal from "../SingleEvent/SingleEventModal";

const EventDetail = ({ id, name }) => {
  return (
    <li className="list">
      <SingleEventModal id={id} name={name} />
    </li>
  );
};

export default EventDetail;
