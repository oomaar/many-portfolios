import styled, { keyframes } from 'styled-components/macro';

const ImageAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HomeDataAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SocialBounce = keyframes`
  0% {
    opacity: 0;
  }

  25% {
    opacity: 1;
    transform: translateY(-50px);
  }

  50% {
    transform: translateY(0px);
  }

  75% {
    transform: translateY(-50px);
  }

  100% {
    transform: translateY(0px);
  }
`;

export const HomeContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  color: #fff;
  position: relative;
  height: calc(100vh - ${({ theme }) => theme.HeaderHeight});
  grid-template-columns: repeat(2fr, max-content);
  align-content: space-around;
  row-gap: 2rem;

  @media screen and (min-width: 768px) {
    grid-template-rows: max-content 0.5fr;
    align-content: flex-end;
  }
`;

export const HomeData = styled.div`
  border-left: 4px solid ${({ theme }) => theme.color.firstColorLighten};
  color: ${({ theme }) => theme.colorfirstColorLighten};
  padding-left: 1.5rem;
  z-index: ${({ theme }) => theme.zIndex.zTooltip};
  animation: ${HomeDataAnimation} 2s linear none 0.8s;
`;

export const HomeGreeting = styled.span`
  display: block;
  font-weight: ${({ theme }) => theme.font.fontWeight.bold};
  font-size: 0.813rem;

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const HomeName = styled.h1`
  font-size: ${({ theme }) => theme.font.bigFontSize};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.resFont.bigFontSize};
  }
`;

export const HomeProfession = styled.span`
  display: block;
  font-weight: ${({ theme }) => theme.font.fontWeight.bold};
  font-size: 0.938rem;
  margin-bottom: ${({ theme }) => theme.margin.mb_3};

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const HomeSocial = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const HomeSocialIcon = styled.a`
  width: max-content;
  font-size: 1.3rem;
  margin-bottom: ${({ theme }) => theme.margin.mb_2};
  color: ${({ theme }) => theme.color.firstColorLighten};
  animation: ${SocialBounce} 2s ease-out 0s none;

  :hover {
    color: ${({ theme }) => theme.color.firstColorLight};
  }

  @media screen and (min-width: 768px) {
    margin: 0 ${({ theme }) => theme.margin.mb_2};
  }
`;

export const HomeImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const Image = styled.img`
  width: 240px;
  animation: ${ImageAnimation} 2s linear none 0.5s;

  @media screen and (min-width: 576px) {
    width: 330px;
  }

  @media screen and (min-width: 768px) {
    width: 440px;
  }
`;
