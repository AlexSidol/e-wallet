import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  color: #6e77e7;
  transition: color 300ms ease-out;
  &:hover {
    color: ${p => p.theme.colors.household};
  }
  &.active {
    color: ${p => p.theme.colors.household};
    font-weight: 700;
    font-family: Poppins, sans-serif;
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }
`;

export const TextStyled = styled.span`
  color: black;
  font-size: 18px;
  line-height: 27px;
`;
