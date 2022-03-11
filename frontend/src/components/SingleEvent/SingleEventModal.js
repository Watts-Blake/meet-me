import { useState } from "react";
import { Modal } from "../../context/Modal";
import SingleEvent from ".";
import { getRsvps } from "../../store/rsvp";
import { getCurrentEvent } from "../../store/setCurrentEvent";
import { useDispatch } from "react-redux";
const SingleEventModal = ({
  id,
  name,
  showEventListModal,
  setShowEventListModal,
}) => {
  const [showModal1, setShowModal1] = useState(false);
  const dispatch = useDispatch();
  const handleClick = async (e) => {
    e.preventDefault();
    await dispatch(getCurrentEvent(id));
    dispatch(getRsvps(id));
    setShowModal1(true);
  };
  return (
    <div className="container">
      <button className="collapse" onClick={handleClick}>
        {name}
      </button>

      {showModal1 && (
        <Modal onClose={() => setShowModal1(false)}>
          <SingleEvent
            showModal1={showModal1}
            setShowModal1={setShowModal1}
            setShowEventListModal={setShowEventListModal}
            showEventListModal={setShowEventListModal}
            id={id}
          ></SingleEvent>
        </Modal>
      )}
    </div>
  );
};

export default SingleEventModal;
