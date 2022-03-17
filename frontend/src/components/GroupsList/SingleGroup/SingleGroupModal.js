import { useState } from "react";
import { Modal } from "../../../context/Modal";
import SingleGroup from ".";
import { getMembers } from "../../../store/groups";
import { getCurrentGroup } from "../../../store/groups";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const SingleGroupModal = ({
  group,
  showGroupListModal,
  setShowGroupListModal,
}) => {
  const [showSingleGroupModal, setShowSingleGroupModal] = useState(false);
  const dispatch = useDispatch();
  //     dispatch(getRsvps(event.id));
  //     dispatch(getCurrentEvent(event.id));
  console.log(group);
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(group);
    await dispatch(getCurrentGroup(group.id));
    await dispatch(getMembers(group.id));
    setShowSingleGroupModal(true);
  };
  return (
    <div className="container column list_button" style={{ width: "90%" }}>
      <button
        className="collapse container column"
        id="event_list_button"
        style={{ maxHeight: "100px", width: "100%" }}
        onClick={handleClick}
      >
        <span className="container row gap" style={{ height: "10px" }}>
          {group.name.toUpperCase()}
        </span>
        <div className="container row gap" style={{ height: "8px" }}>
          {group.GroupMembers.length}
          <h4>,</h4>
          {group.User.name}
        </div>
      </button>

      {showSingleGroupModal && (
        <Modal onClose={() => setShowSingleGroupModal(false)}>
          <SingleGroup
            setShowSingleGroupModal={setShowSingleGroupModal}
            setShowGroupListModal={setShowGroupListModal}
            groupId={group.id}
          ></SingleGroup>
        </Modal>
      )}
    </div>
  );
};

export default SingleGroupModal;
