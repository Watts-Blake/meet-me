import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";

function LoginFormModal({ name, title }) {
  const [showModal, setShowModal] = useState(false);
  const currentUser = useSelector((state) => state.session.user);
  return (
    <>
      <button className="card" onClick={() => setShowModal(true)}>
        {name}
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm name={name} title={title} />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
