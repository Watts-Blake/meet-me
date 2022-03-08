import { NavLink } from "react-router-dom";

const EventDetail = ({ id, name }) => {
  return (
    <li>
      <NavLink to={`/events/${id}`}>{name}</NavLink>
    </li>
  );
};

export default EventDetail;
