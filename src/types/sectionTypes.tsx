// Type definitions for section components

export interface HeroProps {
    title?: string;
    subtitle?: string;
    description?: string;
}

export interface AboutProps {
    biography?: string;
    imageSrc?: string;
}

export interface Skill {
    name: string;
    percent: number;
}

export interface SkillGroup {
    title: string;
    icon: React.ReactNode;
    skills: Skill[];
}

export interface SkillsProps {
    skillGroups?: SkillGroup[];
}

export type PortfolioCategory = "all" | "web" | "av" | "combined";

export interface PortfolioItem {
    id: number | string;
    title: string;
    category: "web" | "av" | "combined";
    description: string;
    image: string;
    link: string;
}

export interface PortfolioProps {
    items?: PortfolioItem[];
}

export interface Achievement {
    icon: React.ReactNode;
    number: string;
    label: string;
}

export interface AchievementsProps {
    achievements?: Achievement[];
}

export interface ContactProps {
    email?: string;
    phone?: string;
    location?: string;
    availability?: string;
}
