export type ThemeType = {
    colors: {
        primaryBackground: string;
        background: string; // ✅ now consistent
        secondaryBackground: string;
        primaryAccent: string;
        secondaryAccent: string;
        tertiaryAccent: string;
        textPrimary: string;
        textSecondary: string;
        boxShadow: string;
        cardBackground: string;
        navBackground: string;
        lineColor: string;
    };
    breakpoints: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    transitions: {
        default: string;
        slow: string;
    };
    borderRadius: {
        small: string;
        medium: string;
        large: string;
        round: string;
    };
};

export const lightTheme: ThemeType = {
    colors: {
        primaryBackground: "#FFFFFF",
        background: "#FFFFFF", // ✅ added background explicitly
        secondaryBackground: "#F5F7FA",
        primaryAccent: "#0078FF",
        secondaryAccent: "#00B8D4",
        tertiaryAccent: "#7B68EE",
        textPrimary: "#333333",
        textSecondary: "#666666",
        boxShadow: "rgba(0, 0, 0, 0.05)",
        cardBackground: "#FFFFFF",
        navBackground: "rgba(255, 255, 255, 0.95)",
        lineColor: "#EEEEEE",
    },
    breakpoints: {
        xs: "576px",
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1400px",
    },
    transitions: {
        default: "0.3s ease",
        slow: "0.5s ease",
    },
    borderRadius: {
        small: "4px",
        medium: "8px",
        large: "10px",
        round: "50px",
    },
};

export const darkTheme: ThemeType = {
    colors: {
        primaryBackground: "#121212",
        background: "#121212", // ✅ added background explicitly
        secondaryBackground: "#1E1E1E",
        primaryAccent: "#00A3FF",
        secondaryAccent: "#00E5FF",
        tertiaryAccent: "#9280FF",
        textPrimary: "#F0F0F0",
        textSecondary: "#BBBBBB",
        boxShadow: "rgba(0, 0, 0, 0.2)",
        cardBackground: "#242424",
        navBackground: "rgba(18, 18, 18, 0.95)",
        lineColor: "#333333",
    },
    breakpoints: {
        xs: "576px",
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1400px",
    },
    transitions: {
        default: "0.3s ease",
        slow: "0.5s ease",
    },
    borderRadius: {
        small: "4px",
        medium: "8px",
        large: "10px",
        round: "50px",
    },
};
