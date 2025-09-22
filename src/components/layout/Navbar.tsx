import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../common";
import { useTheme } from "../../context/ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";

// ---- Styled Components ----
const NavbarWrapper = styled.nav<{ shrink: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: ${({ shrink }) => (shrink ? "0.5rem 0" : "1rem 0")};
    background-color: ${({ theme }) => theme.colors.navBackground};
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px ${({ theme }) => theme.colors.boxShadow};
    transition: all ${({ theme }) => theme.transitions.default};
`;

const NavContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.a`
    font-size: 1.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
    display: flex;
    align-items: center;
    text-decoration: none;
`;

const LogoHighlight = styled.span`
    color: ${({ theme }) => theme.colors.primaryAccent};
`;

const LogoDivide = styled.span`
    display: inline-block;
    width: 1px;
    height: 24px;
    background-color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0 8px;
    opacity: 0.5;
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
    display: flex;
    gap: 2rem;
    list-style: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.navBackground};
        padding: 1rem 2rem;
        box-shadow: 0 10px 20px ${({ theme }) => theme.colors.boxShadow};
    }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 500;
    transition: color ${({ theme }) => theme.transitions.default};
    position: relative;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.primaryAccent};
    }

    &:after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.primaryAccent};
        transition: width ${({ theme }) => theme.transitions.default};
    }

    &:hover:after {
        width: 100%;
    }
`;

const ThemeToggle = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.textPrimary};
    border-radius: 50%;
    transition: background-color ${({ theme }) => theme.transitions.default};

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
    }
`;

const MobileNavToggle = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const NavActions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

// ---- Navbar Component ----
const Navbar: React.FC = () => {
    const [shrink, setShrink] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setShrink(true);
            else setShrink(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Scroll helper
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -80; // navbar height offset
            const y =
                el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    // Click handler for nav links
    const handleNavClick = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(false);

        if (location.pathname !== "/") {
            navigate(`/#${id}`);
        } else {
            scrollToSection(id);
        }
    };

    return (
        <NavbarWrapper shrink={shrink}>
            <NavContainer>
                <Logo href="/" onClick={() => scrollToSection("home")}>
                    SA<LogoHighlight>UOR</LogoHighlight>
                    <LogoDivide />
                    Portfolio
                </Logo>

                <NavLinks isOpen={isOpen}>
                    <NavItem>
                        <NavLink href="#home" onClick={handleNavClick("home")}>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#about"
                            onClick={handleNavClick("about")}
                        >
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#skills"
                            onClick={handleNavClick("skills")}
                        >
                            Skills
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#portfolio"
                            onClick={handleNavClick("portfolio")}
                        >
                            Portfolio
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#contact"
                            onClick={handleNavClick("contact")}
                        >
                            Contact
                        </NavLink>
                    </NavItem>
                </NavLinks>

                <NavActions>
                    <ThemeToggle
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? (
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
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line
                                    x1="4.22"
                                    y1="4.22"
                                    x2="5.64"
                                    y2="5.64"
                                ></line>
                                <line
                                    x1="18.36"
                                    y1="18.36"
                                    x2="19.78"
                                    y2="19.78"
                                ></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line
                                    x1="4.22"
                                    y1="19.78"
                                    x2="5.64"
                                    y2="18.36"
                                ></line>
                                <line
                                    x1="18.36"
                                    y1="5.64"
                                    x2="19.78"
                                    y2="4.22"
                                ></line>
                            </svg>
                        ) : (
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
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                            </svg>
                        )}
                    </ThemeToggle>

                    <MobileNavToggle
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
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
                            <line x1="4" x2="20" y1="12" y2="12"></line>
                            <line x1="4" x2="20" y1="6" y2="6"></line>
                            <line x1="4" x2="20" y1="18" y2="18"></line>
                        </svg>
                    </MobileNavToggle>
                </NavActions>
            </NavContainer>
        </NavbarWrapper>
    );
};

export default Navbar;
