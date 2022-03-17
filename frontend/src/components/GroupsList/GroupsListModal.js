import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import GroupList from ".";

function GroupListModal({ groups }) {
  const [showGroupListModal, setShowGroupListModal] = useState(false);
  return (
    <>
      <button
        className="card collapse"
        onClick={() => setShowGroupListModal(true)}
      >
        See All Groups
      </button>
      {showGroupListModal && (
        <Modal
          showGroupListModal={showGroupListModal}
          setShowGroupListModal={setShowGroupListModal}
          onClose={() => setShowGroupListModal(false)}
        >
          <GroupList
            groups={groups}
            setShowGroupListModal={setShowGroupListModal}
          />
        </Modal>
      )}
    </>
  );
}

export default GroupListModal;
