import React from "react";
import styled from "styled-components";
import { Container, Section, SectionTitle } from "../common";

// SVG Icons
const WebDevIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 16.98h-5.99m5.99-5.98h-1m1-5.97h-9.02M7.95 4.99c-1.2-.47-2.4-.49-3.49-.04-.91.37-1.5 1.01-1.5 2.21v9.89c0 1.2.63 1.9 1.56 2.26 1.04.4 2.24.36 3.44-.11l9.98-4.95c1.09-.54 1.68-1.27 1.68-2.25 0-.99-.59-1.71-1.68-2.25l-9.99-4.95-.02-.02.02.01Z"></path>
    </svg>
);

const AVTechIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 3v17" />
        <path d="M8 13H3" />
        <path d="M10 7H4" />
        <path d="M14 15h7" />
        <path d="M18 10h3" />
        <path d="M7.5 12.5 4 16" />
        <path d="M5 8l-3 3" />
        <path d="M18 16l3 3" />
        <path d="M16.5 9.5 21 5" />
    </svg>
);

// Styled components
const SkillGroups = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

const SkillGroupContainer = styled.div``;

const SkillGroupTitle = styled.h3`
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;

    svg {
        margin-right: 10px;
    }
`;

const SkillBadges = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
`;

const Badge = styled.span`
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 0.5rem 1rem;
    border-radius: 999px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryAccent};
        color: #fff;
        cursor: default;
    }
`;

interface SkillGroup {
    title: string;
    icon: React.ReactNode;
    skills: string[];
}

const Skills: React.FC = () => {
    const skillGroups: SkillGroup[] = [
        {
            title: "Web Development",
            icon: <WebDevIcon />,
            skills: [
                "React / Next.js",
                "Node.js / Express",
                "HTML5 / CSS3 / SCSS",
                "TypeScript",
                "MongoDB / SQL",
            ],
        },
        {
            title: "AV Technology",
            icon: <AVTechIcon />,
            skills: [
                "LED Wall Configuration",
                "Video Switching & Processing",
                "Audio System Design",
                "Projection Mapping",
                "Lighting Programming",
            ],
        },
    ];

    return (
        <Section id="skills">
            <Container>
                <SectionTitle>Technical Skills</SectionTitle>
                <SkillGroups>
                    {skillGroups.map((group, index) => (
                        <SkillGroupContainer key={index}>
                            <SkillGroupTitle>
                                {group.icon} {group.title}
                            </SkillGroupTitle>
                            <SkillBadges>
                                {group.skills.map((skill, i) => (
                                    <Badge key={i}>{skill}</Badge>
                                ))}
                            </SkillBadges>
                        </SkillGroupContainer>
                    ))}
                </SkillGroups>
            </Container>
        </Section>
    );
};

export default Skills;
