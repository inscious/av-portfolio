import React, { useState } from "react";
import styled from "styled-components";
import { Container, Section, SectionTitle, Card } from "../components/common";
import { images } from "../utils/imageUtils";

// ---- Styled Components ----

// Wrapper section with extra top padding to avoid navbar overlap
const ProjectsWrapper = styled(Section)`
    padding-top: 100px; // adjust based on your navbar height
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-top: 120px;
    }
`;

const TabButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    padding: 5px;
    max-width: 500px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        flex-direction: column;
        background: none;
        padding: 0;
    }
`;

const TabButton = styled.button<{ active: boolean }>`
    flex: 1;
    padding: 12px 24px;
    background: ${({ active, theme }) =>
        active ? theme.colors.primaryAccent : "none"};
    border: none;
    cursor: pointer;
    font-weight: 500;
    color: ${({ active, theme }) =>
        active ? "white" : theme.colors.textSecondary};
    border-radius: 50px;
    transition: all ${({ theme }) => theme.transitions.default};

    ${({ active }) =>
        active &&
        `
    box-shadow: 0 4px 15px rgba(0, 120, 255, 0.3);
  `}

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        margin-bottom: 0.5rem;
    }
`;

const PortfolioGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        grid-template-columns: 1fr;
    }
`;

const PortfolioItem = styled(Card)`
    position: relative;
    cursor: pointer;
`;

const PortfolioImage = styled.div`
    height: 240px;
    overflow: hidden;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.slow};

    ${PortfolioItem}:hover & {
        transform: scale(1.05);
    }
`;

const PortfolioContent = styled.div`
    padding: 1.5rem;
`;

const PortfolioCategory = styled.span`
    display: inline-block;
    padding: 5px 12px;
    background-color: rgba(0, 120, 255, 0.1);
    color: ${({ theme }) => theme.colors.primaryAccent};
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 1rem;
`;

const PortfolioTitle = styled.h3`
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
`;

const PortfolioDesc = styled.p`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.5rem;
`;

// ---- Types ----
type PortfolioCategoryType = "all" | "web" | "av";

interface PortfolioItemType {
    id: number;
    title: string;
    category: "web" | "av" | "combined";
    description: string;
    image: string;
    link: string;
}

// ---- Main Component ----
const Projects: React.FC = () => {
    const [activeTab, setActiveTab] = useState<PortfolioCategoryType>("all");

    const portfolioItems: PortfolioItemType[] = [
        {
            id: 1,
            title: "ACT 2025",
            category: "av",
            description: "A complete AV setup for a major event.",
            image: images.portfolio.av1,
            link: "#",
        },
        {
            id: 2,
            title: "OFC 2025",
            category: "av",
            description: "A/V system integration for a conference.",
            image: images.portfolio.av2,
            link: "#",
        },
        {
            id: 3,
            title: "Annual Tech Conference",
            category: "av",
            description: "Multi-stage AV support for a 3-day conference.",
            image: images.portfolio.av3,
            link: "#",
        },
        {
            id: 4,
            title: "Interactive LED Installation",
            category: "av",
            description: "Motion-responsive LED wall installation.",
            image: images.portfolio.av4,
            link: "#",
        },
        {
            id: 5,
            title: "Virtual Event Platform",
            category: "combined",
            description: "Hybrid event platform with live streaming.",
            image: images.portfolio.combined1,
            link: "#",
        },
        {
            id: 6,
            title: "Digital Signage System",
            category: "combined",
            description: "CMS for a network of digital displays.",
            image: images.portfolio.combined2,
            link: "#",
        },
    ];

    const filteredItems = portfolioItems.filter((item) => {
        if (activeTab === "all") return true;
        if (
            activeTab === "web" &&
            (item.category === "web" || item.category === "combined")
        )
            return true;
        if (
            activeTab === "av" &&
            (item.category === "av" || item.category === "combined")
        )
            return true;
        return false;
    });

    return (
        <ProjectsWrapper>
            <Container>
                <SectionTitle>All Projects</SectionTitle>

                {/* Tabs */}
                <TabButtons>
                    <TabButton
                        active={activeTab === "all"}
                        onClick={() => setActiveTab("all")}
                    >
                        All Projects
                    </TabButton>
                    <TabButton
                        active={activeTab === "web"}
                        onClick={() => setActiveTab("web")}
                    >
                        Web Development
                    </TabButton>
                    <TabButton
                        active={activeTab === "av"}
                        onClick={() => setActiveTab("av")}
                    >
                        AV Technology
                    </TabButton>
                </TabButtons>

                {/* Portfolio Grid */}
                <PortfolioGrid>
                    {filteredItems.map((item) => (
                        <PortfolioItem key={item.id}>
                            <PortfolioImage>
                                <StyledImage
                                    src={item.image}
                                    alt={item.title}
                                />
                            </PortfolioImage>
                            <PortfolioContent>
                                <PortfolioCategory>
                                    {item.category === "web"
                                        ? "Web Development"
                                        : item.category === "av"
                                        ? "AV Technology"
                                        : "Web + AV Integration"}
                                </PortfolioCategory>
                                <PortfolioTitle>{item.title}</PortfolioTitle>
                                <PortfolioDesc>
                                    {item.description}
                                </PortfolioDesc>
                            </PortfolioContent>
                        </PortfolioItem>
                    ))}
                </PortfolioGrid>
            </Container>
        </ProjectsWrapper>
    );
};

export default Projects;
