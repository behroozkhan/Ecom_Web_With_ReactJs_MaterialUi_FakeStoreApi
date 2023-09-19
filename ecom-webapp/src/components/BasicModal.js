import * as React from 'react';
import Box from '@mui/material/Box';
import MediaControlCard from './MediaControlCard.js'
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 850
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  // p:2

};

export default function BasicModal({detail,handleClose,open}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <h1>Hello World</h1>
        <MediaControlCard detail={detail} />
        </Box>
      </Modal>
    </div>
  );
}