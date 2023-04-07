import styled from '@emotion/styled';

export const BalanceWrap = styled.div`
  height: 80px;
  padding: 8px 40px 13px;
  width: 280px;
  margin-bottom: 32px;
  background: #ffffff;
  border-radius: 30px;

  @media (min-width: 768px) {
    width: 334px;
    margin-bottom: 0;
  }
  @media (min-width: 1280px) {
    width: 395px;
    margin-bottom: 32px;
  }
`;

export const BalanceTitle = styled.h2`
  text-align: start;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;
  margin: 0;

  color: #a6a6a6;
`;

export const BalanceText = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  margin: 0;
  color: #000000;
`;
