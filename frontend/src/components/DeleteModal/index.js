import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent } from "../../store/eventReducer";

const DeleteEvent = ({
  eventId,
  setShowEventListModal,
  setShowSingleEventModal,
  setShowEditModal,
  setShowDeleteModal,
}) => {
  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log("handle delete function", eventId);
    dispatch(deleteEvent(eventId));
    setShowSingleEventModal(false);
  };

  return (
    <div>
      <h1>Are You Sure You Want To Delete Your Event?</h1>
      <button className="card" onClick={handleDelete}>
        Confirm Delete
      </button>
      {/* <button className="card collapse" onClick={handleDelete}>
        Cancel
      </button> */}
    </div>
  );
};

export default DeleteEvent;
