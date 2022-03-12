import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EventList from ".";

function EventListModal({ events }) {
  const [showEventListModal, setShowEventListModal] = useState(false);
  return (
    <>
      <button
        className="card collapse"
        onClick={() => setShowEventListModal(true)}
      >
        See All Events
      </button>
      {showEventListModal && (
        <Modal
          showEventListModal={showEventListModal}
          setShowEventListModal={setShowEventListModal}
          onClose={() => setShowEventListModal(false)}
        >
          <EventList events={events} />
        </Modal>
      )}
    </>
  );
}

export default EventListModal;
