import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
const GroupSlash = ({ groupsList }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      style={{ overflowY: "auto", width: "80vw" }}
      className="container row gap splash_group"
    >
      {groupsList.map((group) => (
        <div className="container column" key={group.id} group={group}>
          <h4>{group.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default GroupSlash;
