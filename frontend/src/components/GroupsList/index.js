import React from "react";
import { useSelector } from "react-redux";

import GroupDetails from "./GroupDetails";

const GroupList = ({ showGroupListModal, setShowGroupListModal }) => {
  const groupsObj = useSelector((state) => state.group.groups);
  const groups = Object.values(groupsObj);
  return (
    <div className="top_modal_div">
      <button
        className="card collapse back"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
        onClick={() => setShowGroupListModal(false)}
      >
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
        <i className="fa-solid fa-circle-chevron-left"></i>
      </button>
      <div className="container column list__all">
        <h1
          style={{
            position: "fixed",
            top: "23px",
            backgroundColor: "black",
            width: "auto",
            borderRadius: "5px",
            zIndex: "1",
          }}
        >
          Groups
        </h1>
        <ul>
          {groups.map((group) => (
            <GroupDetails group={group} key={group.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroupList;
