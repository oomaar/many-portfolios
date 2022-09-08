import { useState } from "react";
import { Button, Container, Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    PortfolioContainer,
    PortfolioNav,
    PortfolioItem,
    PortfolioContent,
    Image,
    PortfolioData,
    PortfolioSubtitle,
    Title,
} from "./styledPortfolio";

export const Portfolio = ({ data }) => {
    const [activeData, setActiveData] = useState("all");
    const handleActiveData = name => setActiveData(name);

    const webDevelopmentData = data.webDevelopment.map(project => (
        <PortfolioContent key={project.id}>
            <a href={project.link}>
                <Image src={project.img} />
            </a>
            <PortfolioData>
                <PortfolioSubtitle>{project.subTitle}</PortfolioSubtitle>
                <a href={project.link}>
                    <Title>{project.title}</Title>
                </a>
                <Button link>View Details</Button>
            </PortfolioData>
        </PortfolioContent>
    ));

    const uxDesignData = data.uxDesign.map(project => (
        <PortfolioContent key={project.id}>
            <a href={project.link}>
                <Image src={project.img} />
            </a>
            <PortfolioData>
                <PortfolioSubtitle>{project.subTitle}</PortfolioSubtitle>
                <a href={project.link}>
                    <Title>{project.title}</Title>
                </a>
                <Button link>View Details</Button>
            </PortfolioData>
        </PortfolioContent>
    ));

    const mobileAppData = data.mobileApp.map(project => (
        <PortfolioContent key={project.id}>
            <a href={project.link}>
                <Image src={project.img} />
            </a>
            <PortfolioData>
                <PortfolioSubtitle>{project.subTitle}</PortfolioSubtitle>
                <a href={project.link}>
                    <Title>{project.title}</Title>
                </a>
                <Button link>View Details</Button>
            </PortfolioData>
        </PortfolioContent>
    ));

    return (
        <Section id="portfolio">
            <Container>
                <SectionSubtitle>My recent work</SectionSubtitle>
                <SectionTitle>Portfolio</SectionTitle>

                <PortfolioNav>
                    <PortfolioItem onClick={() => handleActiveData("all")}>All</PortfolioItem>
                    <PortfolioItem onClick={() => handleActiveData("web")}>Web</PortfolioItem>
                    <PortfolioItem onClick={() => handleActiveData("ux")}>Ui/Ux</PortfolioItem>
                    <PortfolioItem onClick={() => handleActiveData("app")}>App</PortfolioItem>
                </PortfolioNav>

                <PortfolioContainer>
                    {activeData === "all" && (
                        <>
                            {webDevelopmentData}
                            {uxDesignData}
                            {mobileAppData}
                        </>
                    )}
                    {activeData === "web" && webDevelopmentData}
                    {activeData === "ux" && uxDesignData}
                    {activeData === "app" && mobileAppData}
                </PortfolioContainer>
            </Container>
        </Section>
    );
};
