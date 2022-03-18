import { useSelector } from "react-redux";
import GroupSlash from "../GroupsList/GroupSlash";
import MyCalendar from "../Calendar";
import { useState, useEffect } from "react";

import "./Splash.css";
const Slash = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const currentUser = useSelector((state) => state.session.user);
  const groupsObj = useSelector((state) => state.group.groups);
  const groupsList = Object.values(groupsObj);

  return (
    <div className="container column welcome">
      {currentUser && (
        <h1 className="welcome">{`Welcome, ${currentUser.username} 👋`}</h1>
      )}
      <GroupSlash groupsList={groupsList} />
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
