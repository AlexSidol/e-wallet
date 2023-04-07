import { useMedia } from 'components/Media/useMedia';
import Container from 'components/Container/Container';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box, Image, Text } from '@chakra-ui/react';
import CustomIcon from 'components/CustomIcon/CustomIcon';
import MainImg from 'images/Main_img.svg';
import pinkEllipse from 'images/pink_elipse.svg';
import purpleEllipse from 'images/purple_elipse.svg';

const SignInPage = () => {
  const { isMobile, isTablet, isDesktop } = useMedia();

  if (isMobile) {
    return (
      <Container>
        <Box
          pt="107px"
          pb="107px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="15.5px"
        >
          <CustomIcon name="icon-logo" color="currentColor" size="30px" />
          <Text fontSize="24px" fontWeight="700">
            Wallet
          </Text>
        </Box>
        <LoginForm />
      </Container>
    );
  }

  if (isTablet) {
    return (
      <Box
        bgImage={purpleEllipse}
        bgSize="628px 547px"
        bgRepeat="no-repeat"
        bgPosition="-140px 680px"
        bgColor="#E5E5E5"
      >
        <Box
          bgImage={pinkEllipse}
          bgSize="628px 547px"
          bgRepeat="no-repeat"
          bgPosition="420px -130px"
        >
          <Container pt="60px" pb="196px" h="100%">
            <Box
              pb="50px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="51px"
            >
              <Box w="248px">
                <Image src={MainImg} alt="Main_Image" />
              </Box>
              <Text fontSize="30px" lineHeight="45px">
                Finance App
              </Text>
            </Box>
            <Box mx="auto" w="533px" bgColor="#FFFFFF" borderRadius="20px">
              <Box pt="40px" pr="58.5px" pb="66px" pl="65px">
                <Box
                  pb="60px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap="15.5px"
                >
                  <CustomIcon
                    name="icon-logo"
                    color="currentColor"
                    size="40px"
                  />
                  <Text fontSize="30px" lineHeight="45px" fontWeight="700">
                    Wallet
                  </Text>
                </Box>
                <LoginForm />
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    );
  }

  if (isDesktop) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor="#E5E5E5"
        bgImage={purpleEllipse}
        bgSize="628px 547px"
        bgRepeat="no-repeat"
        bgPosition="-135px 355px"
      >
        <Box
          pt="150px"
          pr="49px"
          pb="77.5px"
          pl="90px"
          h="100%"
          textAlign="center"
        >
          <Box mb="32px" w="100%">
            <Image src={MainImg} alt="Main_Image" />
          </Box>
          <Text fontSize="30px" lineHeight="45px">
            Finance App
          </Text>
        </Box>
        <Box
          py="136px"
          pr="91px"
          pl="116px"
          w="60%"
          h="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="51px"
          bgImage={pinkEllipse}
          bgSize="628px 547px"
          bgRepeat="no-repeat"
          bgPosition="200% -140px"
          bgColor="rgba(255, 255, 255, 0.4)"
        >
          <Box mx="auto" w="533px" bgColor="#FFFFFF" borderRadius="20px">
            <Box pt="40px" pr="58.5px" pb="66px" pl="65px">
              <Box
                pb="60px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="15.5px"
              >
                <CustomIcon name="icon-logo" color="currentColor" size="40px" />
                <Text fontSize="30px" lineHeight="45px" fontWeight="700">
                  Wallet
                </Text>
              </Box>
              <LoginForm />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default SignInPage;
