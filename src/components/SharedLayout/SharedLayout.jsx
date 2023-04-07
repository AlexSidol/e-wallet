import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useMedia } from 'components/Media/useMedia';
import { Main, CommonBox, SharedBox, OutletBox } from './SharedLayout.styled';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';

const SharedLayout = () => {
  const { isNotMobile } = useMedia();

  return (
    <>
      <Header />
      <Main>
        <Container>
          <CommonBox>
            <SharedBox>
              <Box>
                <Navigation />
                {isNotMobile && <Balance />}
              </Box>
              {isNotMobile && <Currency />}
            </SharedBox>
            <OutletBox>
              <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
              </Suspense>
            </OutletBox>
          </CommonBox>
        </Container>
      </Main>
    </>
  );
};

export default SharedLayout;
