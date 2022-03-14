import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";

function LoginFormModal({ name, title }) {
  const [showModal, setShowModal] = useState(false);
  const currentUser = useSelector((state) => state.session.user);
  return (
    <>
      <button className="card collapse" onClick={() => setShowModal(true)}>
        {name}
      </button>
      {showModal && (
        <Modal className="modal" onClose={() => setShowModal(false)}>
          <LoginForm
            className="login_modal"
            name={name}
            title={title}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
