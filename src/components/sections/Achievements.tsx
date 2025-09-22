import React from "react";
import styled from "styled-components";
import { Container, Section, SectionTitle } from "../common";

const AchievementGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        grid-template-columns: 1fr;
    }
`;

const AchievementItem = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBackground};
    border-radius: ${({ theme }) => theme.borderRadius.large};
    padding: 2rem;
    box-shadow: 0 10px 30px ${({ theme }) => theme.colors.boxShadow};
    transition: transform ${({ theme }) => theme.transitions.default};
    text-align: center;

    &:hover {
        transform: translateY(-5px);
    }
`;

const AchievementIcon = styled.div`
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primaryAccent};
    height: 70px;
    width: 70px;
    line-height: 70px;
    border-radius: 50%;
    background-color: rgba(0, 120, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`;

const AchievementNumber = styled.div`
    font-size: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primaryAccent};
    margin-bottom: 0.5rem;
    line-height: 1;
`;

const AchievementLabel = styled.div`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1rem;
`;

interface Achievement {
    icon: React.ReactNode;
    number: string;
    label: string;
}

const Achievements: React.FC = () => {
    const achievements: Achievement[] = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                    <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                    <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
            ),
            number: "50+",
            label: "Web Projects Completed",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
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
            ),
            number: "120+",
            label: "AV Setups Deployed",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            ),
            number: "15+",
            label: "Industry Awards",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
            ),
            number: "8+",
            label: "Years of Experience",
        },
    ];

    return (
        <Section id="achievements">
            <Container>
                <SectionTitle>Technical Achievements</SectionTitle>
                <AchievementGrid>
                    {achievements.map((achievement, index) => (
                        <AchievementItem key={index}>
                            <AchievementIcon>
                                {achievement.icon}
                            </AchievementIcon>
                            <AchievementNumber>
                                {achievement.number}
                            </AchievementNumber>
                            <AchievementLabel>
                                {achievement.label}
                            </AchievementLabel>
                        </AchievementItem>
                    ))}
                </AchievementGrid>
            </Container>
        </Section>
    );
};

export default Achievements;
