import styled from 'styled-components/macro';

export const ServicesContainer = styled.div`
  display: grid;
  gap: 1.5rem;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServicesData = styled.div`
  padding: 3rem 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  text-align: center;
  transition: 0.4s;
  box-shadow: 0 4px 6px rgba(174, 190, 205, 0.3);

  :hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 6px 8px rgba(174, 190, 205, 0.3);
  }
`;

export const ServicesIcon = styled.div`
  margin-bottom: ${({ theme }) => theme.margin.mb_2};
  color: ${({ theme }) => theme.color.firstColor};
  font-size: 3rem;
`;

export const ServicesTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.margin.mb_2};
  color: ${({ theme }) => theme.color.firstColor};
  font-size: ${({ theme }) => theme.font.h3fontSize};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.resFont.h3fontSize};
  }
`;

export const ServicesDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.margin.mb_4};
`;
