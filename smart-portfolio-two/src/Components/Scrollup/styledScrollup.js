import styled from "styled-components/macro";

export const ScrollupLink = styled.a`
  position: fixed;
  right: 1rem;
  bottom: ${({ showScroll }) => showScroll ? "1.5rem" : "-20%"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background: rgba(123, 111, 113, 0.7);
  border-radius: 0.5rem;
  z-index: ${({ theme }) => theme.zIndex.zScroll};
  transition: 0.4s;
  visibility: ${({ showScroll }) => showScroll ? "visable" : "hidden"};

  :hover {
      background-color: ${({ theme }) => theme.color.firstColor};
  }
`;

export const ScrollupIcon = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.firstColorLighten};
`;