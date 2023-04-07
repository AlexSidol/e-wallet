import styled from '@emotion/styled';
import CurrencyMob from '../../currency-images/CurrencyMob.svg';
import CurrencyTab from '../../currency-images/CurrencyTab.svg';
import Currency from '../../currency-images/Currency.svg';

export const CurrencyTableWrap = styled.div`
  width: 280px;
  height: 174px;
  padding: 11px 17px 20px 20px;
  margin-top: 17px;
  border-radius: 30px;
  color: #e7eaf2;
  background: url(${CurrencyMob}) no-repeat bottom,
    linear-gradient(
      to bottom,
      rgb(74, 86, 226, 0.8) 50px,
      rgb(74, 86, 226, 1) 50px
    );

  @media (min-width: 768px) {
    width: 336px;
    height: 182px;
    margin-top: 0;
    background: url(${CurrencyTab}) no-repeat bottom,
      linear-gradient(
        to bottom,
        rgb(74, 86, 226, 0.8) 50px,
        rgb(74, 86, 226, 1) 50px
      );
  }
  @media (min-width: 1280px) {
    width: 393px;
    height: 347px;
    margin-top: 0;
    background: url(${Currency}) no-repeat bottom,
      linear-gradient(
        to bottom,
        rgb(74, 86, 226, 0.8) 60px,
        rgb(74, 86, 226, 1) 60px
      );
  }
`;

// #e7eaf2 prim-bg-col #4a56e2 blue-bg-col

export const CurrencyTable = styled.table`
  width: 100%;
  padding: 11px 17px 20px 20px;
`;

export const TableHead = styled.th`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 24px;
  text-align: left;

  background:#6e78e8,
  @media (min-width: 768px) {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 28px;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 36px;
  }
`;

export const TableData = styled.td`
  font-weight: 400;
  font-size: 16px;
  padding-bottom: 12px;
  @media (min-width: 1280px) {
    padding-bottom: 24px;
  }
`;

export const TextError = styled.tr`
  text-align: center;
  margin: 0 10px 0 10px;
`;
