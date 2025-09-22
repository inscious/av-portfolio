import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme, ThemeType } from "../styles/theme";

type ThemeContextType = {
    theme: ThemeType;
    isDarkMode: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // ✅ Initialize from localStorage (or system preference if nothing saved)
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const storedTheme = localStorage.getItem("isDarkMode");
        if (storedTheme !== null) {
            return JSON.parse(storedTheme);
        }
        // fallback: system preference
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    const theme = isDarkMode ? darkTheme : lightTheme;

    const toggleTheme = () => {
        setIsDarkMode((prev) => {
            const newValue = !prev;
            localStorage.setItem("isDarkMode", JSON.stringify(newValue)); // ✅ persist choice
            return newValue;
        });
    };

    // ✅ Sync body class (optional, only if you use global styles outside styled-components)
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
