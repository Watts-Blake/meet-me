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
    <>
      <div className="center">
        <div className="event_link" onClick={handleClick}>
          <a href="/">
            <span className="art">{name}</span>
          </a>
        </div>
      </div>
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
    </>
  );
};

export default SingleEventModal;
