import { useState, useEffect } from "react";

/**
 * Custom hook for responsive design
 * @param query CSS media query string
 * @returns boolean indicating if the query matches
 */
export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);

        // Initial check
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        // Event listener callback
        const listener = () => {
            setMatches(media.matches);
        };

        // Add the event listener
        media.addEventListener("change", listener);

        // Clean up function
        return () => {
            media.removeEventListener("change", listener);
        };
    }, [matches, query]);

    return matches;
};

/**
 * Predefined media query hooks based on theme breakpoints
 */
export const useIsXs = (): boolean => useMediaQuery("(max-width: 576px)");
export const useIsSm = (): boolean => useMediaQuery("(max-width: 768px)");
export const useIsMd = (): boolean => useMediaQuery("(max-width: 992px)");
export const useIsLg = (): boolean => useMediaQuery("(max-width: 1200px)");
export const useIsXl = (): boolean => useMediaQuery("(max-width: 1400px)");
