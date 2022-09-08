import styled from 'styled-components/macro';

export const QualificationContainer = styled.div`
  display: grid;
  row-gap: 2.5rem;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    column-gap: 6rem;
  }
`;

export const QualificationTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.h3fontSize};
  color: ${({ theme }) => theme.color.firstColor};
  margin-bottom: ${({ theme }) => theme.margin.mb_2};
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.resFont.h3fontSize};
  }
`;

export const QualificationIcon = styled.div`
  font-size: 1.5rem;
  margin-right: ${({ theme }) => theme.margin.mb_1};
`;

export const QualificationGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const QualificationSubcontainer = styled.div`
  padding: 1rem;
`;

export const QualificationArea = styled.h3`
  font-size: ${({ theme }) => theme.font.normalFontSize};
  color: ${({ theme }) => theme.color.firstColor};
  margin-bottom: ${({ theme }) => theme.margin.mb_1};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.resFont.normalFontSize};
  }
`;

export const QualificationBox = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  font-weight: ${({ theme }) => theme.font.fontWeight.medium};

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const QualificationWork = styled.span`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.smallerFontSize};
  color: ${({ theme }) => theme.color.firstColorLight};
  padding: 0.3rem 0;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.resFont.smallerFontSize};
  }
`;

export const QualificationSmallIcon = styled.div`
  font-size: ${({ theme }) => theme.font.smallerFontSize};
  color: ${({ theme }) => theme.color.firstColorLight};
  margin-right: ${({ theme }) => theme.margin.mb_1};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.resFont.smallerFontSize};
  }
`;
