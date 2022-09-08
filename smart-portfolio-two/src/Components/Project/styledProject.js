import styled from 'styled-components/macro';

export const ProjectContainer = styled.div`
  padding: 1.5rem 1rem;
  background-color: ${({ theme }) => theme.color.firstColorDark};
  color: ${({ theme }) => theme.color.firstColorLighten};
  text-align: center;
  border-radius: 0.5rem;

  @media screen and (min-width: 768px) {
    padding: 4.5rem 0;
  }
`;

export const ProjectData = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const ProjectIcon = styled.div`
  margin-bottom: ${({ theme }) => theme.margin.mb_1};
  font-size: 3.5rem;

  @media screen and (min-width: 768px) {
    margin: 0;
    font-size: 6rem;
  }
`;

export const ProjectTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.margin.mb_1};
  font-size: 1.5rem;

  @media screen and (min-width: 768px) {
    margin: 0;
    font-size: 2.5rem;
  }
`;

export const ProjectDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.margin.mb_4};

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
