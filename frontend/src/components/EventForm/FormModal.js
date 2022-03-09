import { useState } from "react";
import { Modal } from "../../context/Modal";
import EventForm from ".";

const CreateModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="card" onClick={() => setShowModal(true)}>
        Create an Event
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EventForm
            showModal={showModal}
            setShowModal={setShowModal}
          ></EventForm>
        </Modal>
      )}
    </>
  );
};

export default CreateModal;
