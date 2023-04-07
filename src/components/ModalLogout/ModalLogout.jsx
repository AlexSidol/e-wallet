import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { Box, Button, Text } from '@chakra-ui/react';
import { isModalLogout } from '../../redux/modal/modalSlice';
import authOperations from 'redux/auth/authOperations';
import { ModalWindowLogOut, OverlayLogOut } from './ModalLogout.styled';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const ModalLogout = () => {
  const dispatch = useDispatch();
  const { logOut } = authOperations;

  useEffect(() => {
    const onClickEscape = e => {
      if (e.code === 'Escape') {
        dispatch(isModalLogout(false));
      }
    };
    document.addEventListener('keydown', onClickEscape);
    return () => {
      document.removeEventListener('keydown', onClickEscape);
    };
  }, [dispatch]);

  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      dispatch(isModalLogout(false));
    }
  };

  const modalCloseLogOut = () => {
    dispatch(logOut());
    dispatch(isModalLogout(false));
  };

  return ReactDOM.createPortal(
    <OverlayLogOut onClick={handleBackdrop}>
      <ModalWindowLogOut position="fixed">
        <Box
          padding="50px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <Button
            position="absolute"
            right="5px"
            top="5px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="0px"
            onClick={() => dispatch(isModalLogout(false))}
            _hover={{ backgroundColor: '#ffffff' }}
            backgroundColor="#ffffff"
          >
            <AiOutlineClose style={{ fontSize: '20px', color: 'black' }} />
          </Button>
          <Text mb="8px" fontSize="30px" lineHeight="45px">
            Do you want to keep your wallet?
          </Text>
          <Box display="flex" gap="30px">
            <Button
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              padding="15px"
              onClick={() => modalCloseLogOut()}
              _hover={{ backgroundColor: '#24CCA7' }}
              backgroundColor="#57ceb4"
            >
              <AiOutlineCheck style={{ fontSize: '25px', color: 'green' }} />
              Yes
            </Button>
            <Button
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              padding="10px"
              onClick={() => dispatch(isModalLogout(false))}
              _hover={{ backgroundColor: '#24CCA7' }}
              backgroundColor="#57ceb4"
            >
              <AiOutlineClose style={{ fontSize: '25px', color: 'red' }} />
              No
            </Button>
          </Box>
        </Box>
      </ModalWindowLogOut>
    </OverlayLogOut>,

    document.body
  );
};

export default ModalLogout;
