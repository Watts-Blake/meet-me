import { useState } from "react";
import { Modal } from "../../context/Modal";
import { getVenues } from "../../store/venues";
import { getTypes } from "../../store/types";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import EditEventForm from ".";

const EditModal = ({ singleEvent, setShowModal1, showModal1 }) => {
  const [showModal2, setShowModal2] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVenues());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <>
      <button className="card" onClick={() => setShowModal2(true)}>
        Edit
      </button>
      {showModal2 && (
        <Modal onClose={() => setShowModal2(false)}>
          <EditEventForm
            singleEvent={singleEvent}
            showModal1={showModal1}
            setShowModal1={setShowModal1}
            showModal2={showModal2}
            setShowModal2={setShowModal2}
          ></EditEventForm>
        </Modal>
      )}
    </>
  );
};

export default EditModal;
