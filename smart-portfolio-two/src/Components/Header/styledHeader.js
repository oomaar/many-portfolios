import styled, { keyframes } from "styled-components/macro";
import { Link as ScrollLink } from "react-scroll";

const NavAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HeaderTag = styled.header`
  background-color: ${({ theme, scrollHeader }) => scrollHeader ? theme.color.firstColorLighten : '#000'};
  box-shadow: ${({ scrollHeader }) => scrollHeader && '0 2px 4px rgba(0, 0, 0, 0.1)'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.zHeader};
`;
export const Nav = styled.nav`
  height: ${({ theme }) => theme.HeaderHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: calc(${({ theme }) => theme.HeaderHeight} + 1.5rem);
    padding: 0 0.5rem;
  }
`;

export const Logo = styled.a`
  color: ${({ theme, scrollHeader }) => scrollHeader ? theme.color.firstColorDark : theme.color.firstColorLighten};
  animation: ${NavAnimation} 2s linear none 0.5s;
`;

export const NavMenu = styled.div`
  @media screen and (max-width: 768px) {
    position: fixed;
    top: ${({ theme, show }) => show ? theme.HeaderHeight : "-100%"};
    left: 0;
    width: 100%;
    padding-top: 1.5rem;
    text-align: center;
    background-color: ${({ theme, scrollHeader }) => scrollHeader ? theme.color.firstColorLighten : '#000'};
    transition: 0.4s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 1rem 1rem;
  }
`;

export const NavList = styled.ul`
  .active-link {
      position: relative;

      ::after {
        content: '';
        position: absolute;
        bottom: -0.7rem;
        left: 0;
        width: 65%;
        height: 3px;
        background-color: ${({ theme }) => theme.color.firstColorLight};
      }
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const NavItem = styled.li`
  margin-bottom: ${({ theme }) => theme.margin.mb_4};
  animation: ${NavAnimation} 2s linear none 0.5s;

  @media screen and (min-width: 768px) {
    margin: 0 ${({ theme }) => theme.margin.mb_3};
  }
`;

export const NavLink = styled(ScrollLink)`
  color: ${({ theme, scrollheader }) => scrollheader === "true" ? theme.color.firstColorDark : theme.color.firstColorLighten};

  :hover {
    color: ${({ theme }) => theme.color.firstColorLight};
  }
`;

export const NavToggle = styled.div`
  color: ${({ theme, scrollHeader }) => scrollHeader ? theme.color.firstColorDark : theme.color.firstColorLighten};
  font-size: 1.3rem;
  cursor: pointer;
  animation: ${NavAnimation} 2s linear none 0.5s;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
