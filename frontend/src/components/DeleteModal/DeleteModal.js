import { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteEvent from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteModal = ({
  eventId,
  setShowEventListModal,
  setShowSingleEventModal,
  setShowEditModal,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowDeleteModal(true);
  };

  return (
    <>
      <button className="collapse_delete" onClick={handleClick}>
        <i className="fa-regular fa-square-minus"></i>
      </button>
      {showDeleteModal && (
        <Modal onClose={() => showDeleteModal(false)}>
          <DeleteEvent
            eventId={eventId}
            setShowEventListModal={setShowEventListModal}
            setShowSingleEventModal={setShowSingleEventModal}
            setShowEditModal={setShowEditModal}
            setShowDeleteModal={showDeleteModal}
          ></DeleteEvent>
        </Modal>
      )}
    </>
  );
};

export default DeleteModal;
