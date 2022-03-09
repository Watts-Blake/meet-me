import { NavLink } from "react-router-dom";
import SingleEventModal from "../SingleEvent/SingleEventModal";

const EventDetail = ({ id, name }) => {
  return (
    <li>
      <SingleEventModal id={id} name={name} />
    </li>
  );
};

export default EventDetail;
