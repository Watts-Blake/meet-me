import { useState } from "react";
import { Modal } from "../../context/Modal";

import EditEventForm from ".";

const EditModal = ({ setShowSingleEventModal, setShowEventListModal }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowEditModal(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setShowEditModal(false);
  };

  return (
    <>
      <button className="card collapse" onClick={handleClick}>
        <i className="fa-solid fa-gear"></i>
      </button>
      {showEditModal && (
        <Modal onClose={handleClose}>
          <EditEventForm
            setShowEventListModal={setShowEventListModal}
            setShowSingleEventModal={setShowSingleEventModal}
            setShowEditModal={setShowEditModal}
          ></EditEventForm>
        </Modal>
      )}
    </>
  );
};

export default EditModal;
