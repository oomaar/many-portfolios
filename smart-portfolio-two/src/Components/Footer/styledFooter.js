import styled from 'styled-components/macro';

export const FooterTag = styled.footer`
  background-color: ${({ theme }) => theme.color.firstColorDark};
  color: ${({ theme }) => theme.color.firstColorLighten};
  text-align: center;
`;

export const FooterSubcontainer = styled.div`
  padding: 3rem 0;
`;

export const FooterTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.h1FontSize};
  margin-bottom: ${({ theme }) => theme.margin.mb_1};
  font-weight: ${({ theme }) => theme.font.fontWeight.semiBold};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.resFont.h1FontSize};
  }
`;

export const FooterDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.margin.mb_6};
`;

export const FooterSocial = styled.div`
  margin-bottom: ${({ theme }) => theme.margin.mb_2};
`;

export const FooterSocialIcon = styled.a`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.firstColorLighten};
  margin-bottom: 0 ${({ theme }) => theme.margin.mb_1};
  transition: 0.3s;

  :hover {
    color: ${({ theme }) => theme.color.firstColorLight};
  }
`;

export const FooterCopy = styled.p`
  font-size: ${({ theme }) => theme.font.smallerFontSize};
  color: ${({ theme }) => theme.color.firstColorLight};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.resFont.smallerFontSize};
  }
`;
