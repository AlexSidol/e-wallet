import styled from '@emotion/styled';

export const OverlayLogOut = styled.div`
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
`;

export const ModalWindowLogOut = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 10px 20px 10px 20px;
  text-align: center;
`;
