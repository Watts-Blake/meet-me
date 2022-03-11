import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent } from "../../store/eventReducer";

const DeleteEvent = ({
  eventId,
  showModal1,
  setShowModal1,
  showModal2,
  setShowModal2,
  showModal3,
  setShowModal3,
}) => {
  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log("handle delete function", eventId);
    dispatch(deleteEvent(eventId));
    setShowModal1(false);
  };

  return (
    <div>
      <h1>Are You Sure You Want To Delete Your Event?</h1>
      <button className="card" onClick={handleDelete}>
        Confirm Delete
      </button>
      <button className="card" onClick={() => setShowModal3(false)}>
        Cancel
      </button>
    </div>
  );
};

export default DeleteEvent;
