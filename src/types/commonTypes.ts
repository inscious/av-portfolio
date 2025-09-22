// Common interfaces and types used across the application

export interface LinkItem {
    text: string;
    url: string;
}

export interface IconProps {
    size?: number;
    color?: string;
}

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    secondary?: boolean;
    small?: boolean;
    fullWidth?: boolean;
    as?: React.ElementType;
    href?: string;
}

export interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export type SocialPlatform =
    | "linkedin"
    | "twitter"
    | "instagram"
    | "github"
    | "youtube"
    | "facebook";

export interface SocialLink {
    platform: SocialPlatform;
    url: string;
}

export interface AnimationProps {
    delay?: number;
    duration?: number;
    animationType?:
        | "fadeIn"
        | "slideInFromBottom"
        | "slideInFromLeft"
        | "slideInFromRight";
}
