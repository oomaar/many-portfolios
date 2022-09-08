import { Container, Section, SectionSubtitle, SectionTitle, Button } from "../../GlobalStyle";
import {
    ServicesContainer,
    ServicesData,
    ServicesIcon,
    ServicesTitle,
    ServicesDescription,
} from "./styledServices";

export const Services = ({ data }) => {
    const servicesData = data.map(service => (
        <ServicesData key={service.id}>
            <ServicesIcon>
                <i className={service.icon}></i>
            </ServicesIcon>
            <ServicesTitle>{service.title}</ServicesTitle>
            <ServicesDescription>{service.description}</ServicesDescription>
            <Button>Know More</Button>
        </ServicesData>
    ));
    return (
        <Section id="services">
            <SectionSubtitle>What I offer</SectionSubtitle>
            <SectionTitle>Services</SectionTitle>

            <Container>
                <ServicesContainer>
                    {servicesData}
                </ServicesContainer>
            </Container>
        </Section>
    );
};
