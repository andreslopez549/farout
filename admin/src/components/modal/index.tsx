import React from 'react';
import { Modal, Button } from 'react-bootstrap';

type CustomModalProps = {
  show: boolean;
  message: string;
  onClose: () => void;
};

const CustomModal: React.FC<CustomModalProps> = ({ show, message, onClose }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
