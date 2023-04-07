import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
`;

export const Category = styled.th`
  padding-top: 16px;
  padding-left: 20px;
  padding-bottom: 15px;
  text-align: left;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: white;
`;

export const Sum = styled.th`
  padding-top: 16px;
  padding-right: 20px;
  padding-bottom: 15px;
  text-align: right;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: white;
`;

export const CatTotal = styled.th`
  padding-left: 20px;
  height: 52px;
  text-align: left;
  font-weight: 700;
`;

export const ExpTotal = styled.th`
  padding-right: 16px;
  width: 35%;
  text-align: right;
  color: ${p => p.theme.colors.car};
`;

export const IncTotal = styled.th`
  padding-right: 16px;
  width: 35%;
  text-align: right;
  color: ${p => p.theme.colors.leisure};
`;
