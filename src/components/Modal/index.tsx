import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { default as TransitionModal } from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IModalProps } from './modalInterface';

const defaultStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  p: 4,
  borderRadius: '.5rem'
};



const Modal = ({isOpen, onClose, width = 400, header = false, children}: IModalProps) => {

  if (isOpen) {
    return (
      <TransitionModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 200,
          },
        }}
        style={{ marginLeft: '10px', marginRight: '10px' }}
      >
        <Fade in={isOpen}>
          <Box className='bg-white' sx={(theme)=>{
            return {
              ...defaultStyle,
              padding: 0,
              [theme.breakpoints.down('md')] : {
                width: '100%'
              },
              [theme.breakpoints.up('md')] : {
                width: width
              }
            }
          }}>
            {children}
          </Box>
        </Fade>
      </TransitionModal>
    )
  }
  return <></>
};

export default Modal;
