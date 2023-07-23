import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { default as TransitionModal } from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const defaultStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '.5rem'
};

interface IProps {
  isOpen: boolean, 
  onClose: VoidFunction,
  children: string | React.ReactElement | React.ReactNode | JSX.Element ,
  width?: number
}

const Modal = (props: IProps) => {

  if (props.isOpen) {
    return (
      <TransitionModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.isOpen}
        onClose={props.onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 200,
          },
        }}
        style={{ marginLeft: '10px', marginRight: '10px' }}
      >
        <Fade in={props.isOpen}>
          <Box sx={(theme)=>{
            
            return {
              ...defaultStyle,
              [theme.breakpoints.down('md')] : {
                width: '100%'
              },
              [theme.breakpoints.up('md')] : {
                width: props.width
              }
            }
          }}>
            {props.children}
          </Box>
        </Fade>
      </TransitionModal>
    )
  }
  return <></>
};

export default Modal;
