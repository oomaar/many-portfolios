import styled from 'styled-components/macro';

export const TestimonialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.firstColor};
  color: ${({ theme }) => theme.color.firstColorLighten};
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  box-shadow: 0 4px 8px rgba(47, 10, 13, 0.25);
  text-align: center;

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.color.firstColorLight};
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.color.firstColorLighten};
  }
`;

export const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const TestimonialImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: ${({ theme }) => theme.margin.mb_1};
`;

export const TestimonialName = styled.h3`
  font-size: ${({ theme }) => theme.font.h3FontSize};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.resFont.h3FontSize};
  }
`;

export const TestimonialClient = styled.span`
  font-size: ${({ theme }) => theme.font.smallFontSize};
  color: ${({ theme }) => theme.color.firstColorLight};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.resFont.smallFontSize};
  }
`;

export const TestimonialDescription = styled.p`
  margin: ${({ theme }) => theme.margin.mb_2} 0 ${({ theme }) => theme.margin.mb_6};
`;
