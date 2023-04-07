import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { isModalUpdateTransaction } from '../../redux/modal/modalSlice';
import {
  ModalWindow,
  Overlay,
} from '../ModalAddTransaction/ModalAddTransaction.styled';
import { Box, CloseButton, Text } from '@chakra-ui/react';
import { useMedia } from 'components/Media/useMedia';
import CustomIcon from 'components/CustomIcon/CustomIcon';
import UserMenu from 'components/UserMenu/UserMenu';
import { UpdateTransactionForm } from 'components/UpdateTransactionForm/UpdateTransactionForm';

const ModalUpdateTransaction = () => {
  const dispatch = useDispatch();
  const { isMobile, isNotMobile } = useMedia();

  useEffect(() => {
    const onClickEscape = e => {
      if (e.code === 'Escape') {
        dispatch(isModalUpdateTransaction(false));
      }
    };
    document.addEventListener('keydown', onClickEscape);
    return () => {
      document.removeEventListener('keydown', onClickEscape);
    };
  }, [dispatch]);

  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      dispatch(isModalUpdateTransaction(false));
    }
  };

  return ReactDOM.createPortal(
    <Overlay onClick={handleBackdrop}>
      <ModalWindow>
        {isMobile && (
          <Box
            mb="20px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            w="100%"
          >
            <Box display="flex" alignItems="center" gap="15.5px">
              <CustomIcon name="icon-logo" color="currentColor" size="30px" />
              <Text fontSize="24px" fontWeight="700">
                Wallet
              </Text>
            </Box>
            <UserMenu />
          </Box>
        )}
        <Text mb="40px" fontSize={isMobile ? '2xl' : '3xl'}>
          Edit transaction
        </Text>
        {isNotMobile && (
          <CloseButton
            p="11"
            pos="absolute"
            top="5"
            right="5"
            size="md"
            onClick={() => dispatch(isModalUpdateTransaction(false))}
          />
        )}
        <UpdateTransactionForm />
      </ModalWindow>
    </Overlay>,

    document.body
  );
};

export default ModalUpdateTransaction;
