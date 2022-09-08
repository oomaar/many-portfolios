import styled from 'styled-components';
import { headerHeight, lgScreen, smScreen, xlScreen } from '../../Global/GlobalStyle';
import { Link as ScrollLink } from "react-scroll";

export const Container = styled.div`
  @media screen and (min-width: ${lgScreen}px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const HeaderTag = styled.header`
  box-shadow: ${({ shadow }) => shadow && '0 -1px 4px rgba(0, 0, 0, 0.15)'};
  background-color: ${({ theme }) => theme.colors.bodyColor};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 200;

  @media screen and (min-width: ${lgScreen}px) {
    top: 0;
    bottom: initial;
    padding: 0 1rem;
  }

  @media screen and (min-width: ${xlScreen}px) {
    padding: 0;
  }
`;

export const Nav = styled.nav`
  max-width: 968px;
  height: ${headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  width: 100%;

  @media screen and (min-width: ${lgScreen}px) {
    column-gap: 1rem;
  }
`;

export const Logo = styled.p`
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 400;
`;

export const NavMenu = styled.div`
  @media screen and (max-width: ${lgScreen}px) {
    background-color: ${({ theme }) => theme.colors.bodyColor};
    border-radius: 1.5rem 1.5rem 0 0;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    padding: 2rem 1.5rem 2rem;
    position: fixed;
    bottom: ${({ toggleShow }) => toggleShow ? '0' : '-100%'};
    left: 0;
    width: 100%;
    transition: 0.3s;
  }

  @media screen and (max-width: ${smScreen}px) {
    padding: 2rem 0.25rem 4rem;
  }

  @media screen and (min-width: ${lgScreen}px) {
    margin-left: auto;
  }
`;

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0;

  @media screen and (max-width: ${smScreen}px) {
    column-gap: 0;
  }
  
  @media screen and (min-width: ${lgScreen}px) {
    display: flex;
    column-gap: 2rem;
  }
`;

export const NavClose = styled.div`
  position: absolute;
  right: 1.3rem;
  bottom: 0.5rem;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.firstColor};
  transition: 0.3s ease;

  @media screen and (min-width: ${lgScreen}px) {
    display: none;
  }
`;


export const ListItem = styled.li`
  .active-link {
      color: ${({ theme }) => theme.colors.firstColor};
    }
`;

export const NavLink = styled(ScrollLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.813rem;
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 500;
  transition: 0.5s;

  :hover {
    color: ${({ theme }) => theme.colors.firstColor};
    transform: scale(1.1);
  }

  @media screen and (min-width: ${lgScreen}px) {
    font-size: 0.938rem;
  }

  @media screen and (min-width: ${xlScreen}px) {
    font-size: 1rem;
  }
`;

export const NavIcon = styled.div`
  font-size: 1.2rem;

  @media screen and (min-width: ${lgScreen}px) {
    display: none;
  }
`;

export const NavBtns = styled.div`
  display: flex;
`;

export const ChangeTheme = styled.div`
  display: flex;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.titleColor};
  margin-right: 1rem;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.firstColor};
  }
  
  @media screen and (min-width: ${lgScreen}px) {
    margin: 0;
    margin-left: 1rem;
  }
`;

export const NavToggle = styled.div`
  font-size: 1.1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 400;
  margin-left: 1rem;

  :hover {
    color: ${({ theme }) => theme.colors.firstColor};
  }

  @media screen and (min-width: ${lgScreen}px) {
      display: none;
  }
`;
