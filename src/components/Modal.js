import React from 'react';
import { Modal } from '@material-ui/core';

const ModalItem = ({ open, handleClose, children }) => (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
        {children}
    </Modal>
);

export default ModalItem;