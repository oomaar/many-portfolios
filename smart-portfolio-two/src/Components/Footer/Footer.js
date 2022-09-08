import { Container } from "../../GlobalStyle";
import {
    FooterTag,
    FooterSubcontainer,
    FooterTitle,
    FooterDescription,
    FooterSocial,
    FooterSocialIcon,
    FooterCopy,
} from "./styledFooter";

export const Footer = ({ data }) => {
    return (
        <FooterTag>
            <Container>
                <FooterSubcontainer>
                    <FooterTitle>{data.title}</FooterTitle>
                    <FooterDescription>{data.description}</FooterDescription>

                    <FooterSocial>
                        <FooterSocialIcon href="#">
                            <i className="bx bxl-facebook"></i>
                        </FooterSocialIcon>
                        <FooterSocialIcon href="#">
                            <i className="bx bxl-instagram"></i>
                        </FooterSocialIcon>
                        <FooterSocialIcon href="#">
                            <i className="bx bxl-github"></i>
                        </FooterSocialIcon>
                    </FooterSocial>

                    <FooterCopy>&#169; {data.copy}</FooterCopy>
                </FooterSubcontainer>
            </Container>
        </FooterTag>
    );
};
