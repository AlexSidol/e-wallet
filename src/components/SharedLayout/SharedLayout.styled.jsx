import styled from '@emotion/styled';
import desktop from 'images/desktop_bg.jpg';
import tablet from 'images/tablet_bg.jpg';

export const Main = styled.main`
  min-height: 100vh;

  background-color: #e5e5e5;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.4) 100%
  );
  background-size: contain;

  @media (min-width: 768px) {
    background-image: url(${tablet});
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (min-width: 1280px) {
    background-image: url(${desktop});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const CommonBox = styled.div`
  @media (min-width: 768px) {
    padding-top: 32px;
  }

  @media (min-width: 1280px) {
    display: flex;
  }
`;

export const SharedBox = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media (min-width: 1280px) {
    padding-right: 69px;
    padding-bottom: 63px;
    display: block;
    border-right: 1px solid #e7e5f2;
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
  }
`;

export const OutletBox = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    padding-top: 32px;
  }

  @media (min-width: 1280px) {
    padding-top: 0;
    padding-left: 69px;
  }
`;
