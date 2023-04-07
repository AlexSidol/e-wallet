import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  padding: 10px;
  @media (max-width: 767px) {
    padding: 0;
  }
`;

export const ModalWindow = styled.div`
  position: relative;
  width: 540px;
  background: white;
  border-radius: 5px;
  padding: 40px 64px;
  text-align: center;
  @media (max-width: 767px) {
    height: 100%;
    padding: 20px;
  }
`;
