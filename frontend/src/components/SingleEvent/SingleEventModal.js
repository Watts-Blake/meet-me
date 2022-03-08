import { useState } from "react";
import { Modal } from "../../context/Modal";
import SingleEvent from ".";

const SingleEventModal = ({ id, name }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="card" onClick={() => setShowModal(true)}>
        {name}
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SingleEvent id={id}></SingleEvent>
        </Modal>
      )}
    </>
  );
};

export default SingleEventModal;
