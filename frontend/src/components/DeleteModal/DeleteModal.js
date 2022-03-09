import { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteEvent from ".";

const DeleteModal = ({
  eventId,
  showModal1,
  setShowModal1,
  showModal2,
  setShowModal2,
}) => {
  const [showModal3, setShowModal3] = useState(false);

  return (
    <>
      <button className="card" onClick={() => setShowModal3(true)}>
        Delete Event
      </button>
      {showModal3 && (
        <Modal onClose={() => setShowModal3(false)}>
          <DeleteEvent
            eventId={eventId}
            showModal1={showModal1}
            setShowModal1={setShowModal1}
            showModal2={showModal2}
            setShowModal2={setShowModal2}
            showModal3={showModal3}
            setShowModal3={setShowModal3}
          ></DeleteEvent>
        </Modal>
      )}
    </>
  );
};

export default DeleteModal;
