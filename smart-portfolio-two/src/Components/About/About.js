import { Container, Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    AboutContainer,
    AboutData,
    AboutDescription,
    AboutGreeting,
    AboutNumber,
    AboutImage,
} from "./styledAbout";

export const About = ({ data }) => {
    const description = data.description;
    const experience = data.experience;

    return (
        <Section id="about">
            <Container>
                <SectionSubtitle>My history</SectionSubtitle>
                <SectionTitle>About me</SectionTitle>

                <AboutContainer>
                    <AboutData>
                        <AboutDescription>
                            <AboutGreeting>Hello, I am a <br /></AboutGreeting>
                            {description}
                        </AboutDescription>

                        {experience.map((exp, i) => (
                            <div key={i}>
                                <AboutNumber>{exp.number}+ </AboutNumber>
                                <span>{exp.achevement}</span>
                            </div>
                        ))}
                    </AboutData>

                    <AboutImage src="/img/about.jpg" />
                </AboutContainer>
            </Container>
        </Section>
    );
};
