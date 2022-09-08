import styled from 'styled-components/macro';

export const AboutContainer = styled.div`
  display: grid;
  gap: 1.5rem;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AboutData = styled.div`
  display: grid;
  gap: 1.5rem;
  text-align: center;
`;

export const AboutDescription = styled.p`
  font-size: ${({ theme }) => theme.font.h2FontSize};
  font-weight: ${({ theme }) => theme.font.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.firstColor};
  
  @media screen and (min-width: 768px) {
    text-align: initial;
    font-size: ${({ theme }) => theme.resFont.h2FontSize};
  }
`;

export const AboutGreeting = styled.span`
  display: block;
  font-weight: ${({ theme }) => theme.font.fontWeight.bold};
  font-size: 0.813rem;
  margin-bottom: ${({ theme }) => theme.margin.mb_1};

  @media screen and (min-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const AboutNumber = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.font.h1FontSize};
  color: ${({ theme }) => theme.color.firstColor};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.resFont.h1FontSize};
  }
`;

export const AboutImage = styled.img`
  justify-self: center;
  width: 220px;
  border-radius: 0.5rem;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
