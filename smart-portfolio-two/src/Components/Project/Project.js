import { Button, Container, Section } from "../../GlobalStyle";
import {
    ProjectContainer,
    ProjectData,
    ProjectIcon,
    ProjectTitle,
    ProjectDescription,
} from "./styledProject";

export const Project = () => {
    return (
        <Section>
            <Container>
                <ProjectContainer>
                    <ProjectData>
                        <ProjectIcon>
                            <i className="bx bx-chat"></i>
                        </ProjectIcon>

                        <div>
                            <ProjectTitle>Project in mind</ProjectTitle>
                            <ProjectDescription>
                                Hire me to carry out the followind projects.
                            </ProjectDescription>
                        </div>

                        <div>
                            <Button white>Hire Me</Button>
                        </div>
                    </ProjectData>
                </ProjectContainer>
            </Container>
        </Section>
    );
};
