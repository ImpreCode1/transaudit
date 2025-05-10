import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ViajeModal = ({ isOpen, toggle, fechaSeleccionada, onSaveViaje }) => {
  const handleSave = () => {
    onSaveViaje({ fecha: fechaSeleccionada });
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Registrar Viaje</ModalHeader>
      <ModalBody>
        <p>Fecha seleccionada: {fechaSeleccionada}</p>
       
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>Guardar</Button>
        <Button color="secondary" onClick={toggle}>Cancelar</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ViajeModal;