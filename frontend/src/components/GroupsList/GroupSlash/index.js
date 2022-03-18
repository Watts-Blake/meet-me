import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import SingleGroupModal from "../SingleGroup/SingleGroupModal";
const GroupSlash = ({ groupsList }) => {
  return (
    <ul className="splash_group_ul">
      {groupsList.map((group) => (
        <SingleGroupModal key={group.id} group={group} />
      ))}
    </ul>
  );
};

export default GroupSlash;
