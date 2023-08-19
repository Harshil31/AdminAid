import React from "react";
import "./Modal.css";

export default function Modal({ isOpen, onClose, patient }) {
  // Use the 'isOpen' prop to determine whether the modal should be displayed
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div onClick={onClose} className="overlay"></div>
      <div className="modal-content">
        <h2>{patient.name}</h2>
        <p>Condition: {patient.condition}</p>
        <p>{patient.info}</p>
        <button className="close-modal" onClick={onClose}>
          CLOSE
        </button>
      </div>
    </div>
  );
}