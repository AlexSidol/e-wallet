import { AddIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useMedia } from 'components/Media/useMedia';
import { isModalAddTransaction } from 'redux/modal/modalSlice';

const OpenModalTransitionBtn = () => {
  const dispatch = useDispatch();
  const { isNotMobile } = useMedia();

  const padding = isNotMobile ? '40px' : '20px';

  return (
    <Box>
      <Button
        position="fixed"
        right={padding}
        bottom={padding}
        borderRadius="50"
        backgroundColor="#24CCA7"
        _hover={{
          background: '#13f0bf',
        }}
        boxSize="44px"
        boxShadow=" 0px 6px 15px rgba(36, 204, 167, 0.5)"
        onClick={() => dispatch(isModalAddTransaction(true))}
      >
        <AddIcon boxSize="20px" color="#FFFFFF" />
      </Button>
    </Box>
  );
};

export default OpenModalTransitionBtn;
