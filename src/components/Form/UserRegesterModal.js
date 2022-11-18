import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function UserRegesterModal({ handleClose, show }) {
    const navigate = useNavigate()
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>⭕ Login Is Needed</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Login To Like & Download Files You Desire</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => navigate('/login')}>
          👉 Login Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
