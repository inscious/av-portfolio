import React, { useState } from "react";
import styled from "styled-components";
import {
    Container,
    Section,
    SectionTitle,
    Card,
    CircuitBackground,
} from "../common";
import { images } from "../../utils/imageUtils";

// ---- Styled Components ----

// Styled "View All Projects" button
const ViewAllButton = styled.a`
    display: inline-block;
    padding: 12px 28px;
    font-weight: 500;
    font-size: 1rem;
    border: 2px solid ${({ theme }) => theme.colors.primaryAccent};
    border-radius: 50px;
    color: ${({ theme }) => theme.colors.primaryAccent};
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitions.default};
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryAccent};
        color: white;
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
    margin-left: auto;
    margin-right: auto;

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
    margin-bottom: 3rem;

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

const PortfolioLink = styled.a`
    font-weight: 500;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primaryAccent};
    text-decoration: none;

    svg {
        width: 18px;
        height: 18px;
        margin-left: 5px;
        transition: transform ${({ theme }) => theme.transitions.default};
    }

    &:hover svg {
        transform: translateX(5px);
    }
`;

const TextCenter = styled.div`
    text-align: center;
`;

// ---- Modal ----
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: ${({ theme }) => theme.colors.background};
    padding: 2rem;
    border-radius: 12px;
    max-width: 700px;
    width: 100%;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 30px;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

// ---- Types ----
type PortfolioCategory = "all" | "web" | "av";

interface PortfolioItemType {
    id: number;
    title: string;
    category: "web" | "av" | "combined";
    description: string;
    image: string;
    link: string;
}

// ---- Main Component ----
const Portfolio: React.FC = () => {
    const [activeTab, setActiveTab] = useState<PortfolioCategory>("all");
    const [selectedProject, setSelectedProject] =
        useState<PortfolioItemType | null>(null);

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
            title: "GDC 2025",
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
            title: "Snowflake Summit 2025",
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
        <Section id="portfolio">
            <CircuitBackground position="bottom-right" />
            <Container>
                <SectionTitle>Featured Projects</SectionTitle>

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
                        <PortfolioItem
                            key={item.id}
                            onClick={() => setSelectedProject(item)}
                        >
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
                                {/* <PortfolioLink href="#">View Project →</PortfolioLink> */}
                            </PortfolioContent>
                        </PortfolioItem>
                    ))}
                </PortfolioGrid>

                {/* View All Projects link */}
                <TextCenter>
                    <ViewAllButton href="/projects">
                        View All Projects
                    </ViewAllButton>
                </TextCenter>
            </Container>

            {/* Modal */}
            {selectedProject && (
                <ModalOverlay onClick={() => setSelectedProject(null)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setSelectedProject(null)}>
                            ×
                        </CloseButton>
                        <h2>{selectedProject.title}</h2>
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            style={{
                                width: "100%",
                                borderRadius: "8px",
                                marginBottom: "1rem",
                            }}
                        />
                        <p>{selectedProject.description}</p>
                    </ModalContent>
                </ModalOverlay>
            )}
        </Section>
    );
};

export default Portfolio;
