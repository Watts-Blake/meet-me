import { useState } from "react";
import { Modal } from "../../context/Modal";
import EditEventForm from ".";

const EditModal = ({ singleEvent }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="card" onClick={() => setShowModal(true)}>
        Edit
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditEventForm singleEvent={singleEvent}></EditEventForm>
        </Modal>
      )}
    </>
  );
};

export default EditModal;
