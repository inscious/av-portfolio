import React from "react";
import styled from "styled-components";
import {
    Container,
    Section,
    SectionTitle,
    Button,
    CircuitBackground,
} from "../common";
import { images } from "../../utils/imageUtils";

const AboutContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

const AboutText = styled.div`
    position: relative;
    z-index: 2;
`;

const AboutImage = styled.div`
    position: relative;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    overflow: hidden;
    box-shadow: 0 20px 40px ${({ theme }) => theme.colors.boxShadow};
    height: 400px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        height: 300px;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const DirtBikeElement = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 100px;
    height: 100px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' fill='none'%3E%3Cpath d='M70 55C80 55 88 63 88 73C88 83 80 91 70 91C60 91 52 83 52 73C52 63 60 55 70 55ZM30 55C40 55 48 63 48 73C48 83 40 91 30 91C20 91 12 83 12 73C12 63 20 55 30 55ZM59.5 25L50 45H35L45 25H59.5ZM60 15H40L25 45H45L60 15Z' stroke='%230078FF' stroke-width='2'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.7;
    transform: rotate(15deg);
    z-index: 3;
`;

const Highlight = styled.span`
    color: ${({ theme }) => theme.colors.primaryAccent};
    font-weight: 500;
`;

const About: React.FC = () => {
    return (
        <Section id="about">
            <CircuitBackground position="top-left" />
            <Container>
                <SectionTitle>About Me</SectionTitle>
                <AboutContent>
                    <AboutText>
                        <p>
                            With over a year of experience as a{" "}
                            <strong>showsite supervisor</strong>, I’ve overseen
                            expo builds and ensured projects are executed
                            smoothly and on time. In addition to supervising
                            crews, responsibilities have included working as an{" "}
                            <strong>AV technician</strong>, installing{" "}
                            <strong>LED walls</strong> and managing technical
                            setups directly on showsite where permitted. This
                            blend of leadership and hands-on expertise provides
                            the ability to adapt to a wide range of challenges
                            in live environments.
                        </p>
                        <p>
                            My background in <strong>web development</strong>{" "}
                            further expands my problem solving skills. I enjoy
                            diving into complex systems, approaching challenges
                            from both technical and creative perspectives, and
                            developing efficient solutions that connect digital
                            and physical experiences.
                        </p>
                        <p>
                            I am currently a proud member of{" "}
                            <strong>Local 831 Trade Show Technicians</strong>,
                            continuing to grow my expertise within the industry.
                            Outside of work, I’m passionate about off-road
                            riding. Pushing my <Highlight>CRF450RL</Highlight>{" "}
                            through Baja inspires the same determination and
                            focus I bring to every project.
                        </p>
                        <Button as="a" href="#contact">
                            Let's Connect
                        </Button>
                    </AboutText>
                    <AboutImage>
                        <StyledImage
                            src={images.about}
                            alt="Developer working at desk with AV equipment"
                        />
                        <DirtBikeElement />
                    </AboutImage>
                </AboutContent>
            </Container>
        </Section>
    );
};

export default About;
