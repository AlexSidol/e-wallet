import { NavLinkStyled, TextStyled } from './Navigation.styled';
import { useMedia } from 'components/Media/useMedia';
import { Box } from '@chakra-ui/react';
import CustomIcon from 'components/CustomIcon/CustomIcon';

const Navigation = () => {
  const { isNotMobile } = useMedia();
  return (
    <>
      {isNotMobile ? (
        <Box as="nav" pb="28px">
          <Box
            as="ul"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap="21px"
            style={{
              listStyle: 'none',
            }}
          >
            <li>
              <NavLinkStyled to="/" end>
                <Box display="flex" alignItems="center" gap="23px">
                  <CustomIcon
                    name="icon-home"
                    color="currentColor"
                    size="22px"
                  />
                  <TextStyled>Home</TextStyled>
                </Box>
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/statistics">
                <Box display="flex" alignItems="center" gap="23px">
                  <CustomIcon
                    name="icon-statistics"
                    color="currentColor"
                    size="22px"
                  />
                  <TextStyled>Statistics</TextStyled>
                </Box>
              </NavLinkStyled>
            </li>
          </Box>
        </Box>
      ) : (
        <Box as="nav" py="15px">
          <Box
            as="ul"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="36px"
            style={{
              listStyle: 'none',
            }}
          >
            <li>
              <NavLinkStyled to="/" end>
                <CustomIcon name="icon-home" color="currentColor" size="38px" />
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/statistics">
                <CustomIcon
                  name="icon-statistics"
                  color="currentColor"
                  size="38px"
                />
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/currency">
                <CustomIcon
                  name="icon-currency"
                  color="currentColor"
                  size="38px"
                />
              </NavLinkStyled>
            </li>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Navigation;
