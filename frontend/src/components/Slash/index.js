import { useSelector } from "react-redux";

import MyCalendar from "../Calendar";

import "./Splash.css";
const Slash = () => {
  const currentUser = useSelector((state) => state.session.user);

  return (
    <div className="container column welcome">
      {currentUser && (
        <h1 className="welcome">{`Welcome, ${currentUser.username} 👋`}</h1>
      )}
      <div className="container row">
        <div className="event_h2 events_caledar_title">
          <h2 className="event_h2">Events Calendar</h2>
        </div>
        <div className="space_holder"></div>
      </div>

      <MyCalendar className="card" />
    </div>
  );
};

export default Slash;
