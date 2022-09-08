import styled, { keyframes } from 'styled-components/macro';

const animate = keyframes`
  from {
    transform: scale(1);
  }
  
  to {
    transform: scale(0);
  }
`;

export const PortfolioContainer = styled.div`
  display: grid;
  gap: 1.5rem;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PortfolioNav = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.margin.mb_3};
`;

export const PortfolioItem = styled.span`
  margin: 0 ${({ theme }) => theme.margin.mb_2};
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  transition: 0.4s;
`;

export const PortfolioContent = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(174, 190, 205, 0.3);
  animation: ${animate} 0.1s linear none;

  :hover {
    box-shadow: 0 6px 8px rgba(174, 190, 205, 0.3);
  }

  :hover ${Image} {
    transform: scale(1.02);
  }
`;

export const PortfolioData = styled.div`
  padding:  1.5rem;
`;

export const PortfolioSubtitle = styled.span`
  font-size: ${({ theme }) => theme.font.smallFontSize};
  color: ${({ theme }) => theme.color.firstColorLight};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.resFont.smallFontSize};
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.h3FontSize};
  color: ${({ theme }) => theme.color.firstColor};
  margin: ${({ theme }) => theme.margin.mb_2} 0;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.resFont.h3FontSize};
  }
`;
