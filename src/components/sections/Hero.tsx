import React from "react";
import styled from "styled-components";
import { Container, Button } from "../common";
import { images } from "../../utils/imageUtils";

const HeroSection = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding-top: 80px;
`;

const TechBackground = styled.div`
    position: absolute;
    bottom: -100px;
    right: -100px;
    width: 600px;
    height: 600px;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230078FF' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
    z-index: 1;
    opacity: 0.6;
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
`;

const SplitHero = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

const HeroText = styled.div`
    padding-right: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-right: 0;
        margin-bottom: 2rem;
    }
`;

const Tagline = styled.div`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secondaryAccent};
    margin-bottom: 1rem;
    letter-spacing: 1px;
`;

const HeroTitle = styled.h1`
    margin-bottom: 1.5rem;
    line-height: 1.2;
`;

const HeroDescription = styled.p`
    font-size: 1.1rem;
    margin-bottom: 2rem;
`;

const HeroButtons = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        flex-direction: column;
        gap: 1rem;
    }
`;

const HeroVisual = styled.div`
    position: relative;
    height: 450px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 20px 40px ${({ theme }) => theme.colors.boxShadow};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        height: 350px;
    }
`;

const SplitVisual = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const CodeSide = styled.div`
    flex: 1;
    position: relative;
    overflow: hidden;
    transition: flex ${({ theme }) => theme.transitions.slow};
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        flex: 1.5;
    }
`;

const CodeContent = styled.div`
    max-width: 90%;
    transform: rotate(-5deg);
    opacity: 0.9;
    font-family: "Roboto Mono", monospace;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.5;
    padding: 15px;
    background: linear-gradient(
        135deg,
        rgba(0, 120, 255, 0.1),
        rgba(123, 104, 238, 0.1)
    );
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230078FF' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E");
        opacity: 0.5;
    }
`;

const AVSide = styled.div`
    flex: 1;
    position: relative;
    overflow: hidden;
    transition: flex ${({ theme }) => theme.transitions.slow};
    background-color: #050505;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &:hover {
        flex: 1.5;
    }
`;

const AVContent = styled.div`
    max-width: 90%;
    transform: rotate(5deg);
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    position: relative;
`;

const AVImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    transform: scale(1.05);
    transition: transform ${({ theme }) => theme.transitions.slow};

    &:hover {
        transform: scale(1.1);
    }
`;

const Hero: React.FC = () => {
    return (
        <HeroSection id="home">
            <TechBackground />
            <Container>
                <HeroContent>
                    <SplitHero>
                        <HeroText>
                            <Tagline>WEB DEVELOPER & AV SPECIALIST</Tagline>
                            <HeroTitle>
                                Creating Digital Experiences & Technical
                                Solutions
                            </HeroTitle>
                            <HeroDescription>
                                I bridge the gap between web development and
                                audiovisual technology, crafting immersive
                                digital solutions for both worlds.
                            </HeroDescription>
                            <HeroButtons>
                                <Button as="a" href="#portfolio">
                                    View Portfolio
                                </Button>
                                <Button as="a" href="#contact" secondary>
                                    Get In Touch
                                </Button>
                            </HeroButtons>
                        </HeroText>
                        <HeroVisual>
                            <SplitVisual>
                                <CodeSide>
                                    <CodeContent>
                                        <pre>{`function createExperience() {
  const webDev = ['React', 'Node.js', 'CSS'];
  const avTech = ['LED Walls', 'Audio', 'Lighting'];
                  
  return {
    build: (project) => {
      const tech = [...webDev, ...avTech];
      return \`Building \${project} with \${tech.join(' + ')}\`;
    }
  };
}`}</pre>
                                    </CodeContent>
                                </CodeSide>
                                <AVSide>
                                    <AVContent>
                                        <AVImage
                                            src={images.portfolio.av1}
                                            alt="AV Setup with LED wall and control station"
                                        />
                                    </AVContent>
                                </AVSide>
                            </SplitVisual>
                        </HeroVisual>
                    </SplitHero>
                </HeroContent>
            </Container>
        </HeroSection>
    );
};

export default Hero;
