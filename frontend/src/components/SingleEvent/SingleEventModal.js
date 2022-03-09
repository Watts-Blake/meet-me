import { useState } from "react";
import { Modal } from "../../context/Modal";
import SingleEvent from ".";

const SingleEventModal = ({ id, name }) => {
  const [showModal1, setShowModal1] = useState(false);

  return (
    <>
      <button className="card" onClick={() => setShowModal1(true)}>
        {name}
      </button>
      {showModal1 && (
        <Modal onClose={() => setShowModal1(false)}>
          <SingleEvent
            showModal1={showModal1}
            setShowModal1={setShowModal1}
            id={id}
          ></SingleEvent>
        </Modal>
      )}
    </>
  );
};

export default SingleEventModal;
