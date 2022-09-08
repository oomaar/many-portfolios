import { Container, Section, Button } from "../../GlobalStyle";
import {
    HomeContainer,
    HomeData,
    HomeGreeting,
    HomeName,
    HomeProfession,
    HomeSocial,
    HomeSocialIcon,
    HomeImage,
    Image,
} from "./styledHome";

export const Home = () => {
    return (
        <Section id="home" home>
            <Container>
                <HomeContainer>
                    <HomeData>
                        <HomeGreeting>Hello, My name is</HomeGreeting>
                        <HomeName>Omar Hassan</HomeName>
                        <HomeProfession>Web Developer.</HomeProfession>
                        <Button light download="" href="pdf/Omar-Hassan-CV-2021">Download CV</Button>
                    </HomeData>

                    <HomeSocial>
                        <HomeSocialIcon>
                            <i className="bx bxl-facebook"></i>
                        </HomeSocialIcon>
                        <HomeSocialIcon>
                            <i className="bx bxl-instagram"></i>
                        </HomeSocialIcon>
                        <HomeSocialIcon>
                            <i className="bx bxl-github"></i>
                        </HomeSocialIcon>
                    </HomeSocial>

                    <HomeImage>
                        <Image src="/img/home.jpg" />
                    </HomeImage>
                </HomeContainer>
            </Container>
        </Section>
    );
};
