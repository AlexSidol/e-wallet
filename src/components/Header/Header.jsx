import { useMedia } from 'components/Media/useMedia';
import { Box, Text } from '@chakra-ui/react';
import Container from 'components/Container/Container';
import UserMenu from 'components/UserMenu/UserMenu';
import CustomIcon from 'components/CustomIcon/CustomIcon';

const Header = () => {
  const { isNotMobile } = useMedia();
  return (
    <header>
      <Container>
        {isNotMobile ? (
          <Box
            py="20px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" gap="20px">
              <CustomIcon name="icon-logo" color="currentColor" size="40px" />
              <Text
                fontSize="30px"
                fontWeight="700"
                fontFamily="Poppins, sans-serif"
              >
                Wallet
              </Text>
            </Box>
            <UserMenu />
          </Box>
        ) : (
          <Box
            py="15px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" gap="15.5px">
              <CustomIcon name="icon-logo" color="currentColor" size="30px" />
              <Text
                fontSize="24px"
                fontWeight="700"
                fontFamily="Poppins, sans-serif"
              >
                Wallet
              </Text>
            </Box>
            <UserMenu />
          </Box>
        )}
      </Container>
    </header>
  );
};

export default Header;
