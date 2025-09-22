// Utility functions for the application

/**
 * Debounce function to prevent function from being called too often
 * @param fn Function to debounce
 * @param ms Delay in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
    fn: T,
    ms = 300
): ((...args: Parameters<T>) => void) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (this: any, ...args: Parameters<T>) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};

/**
 * Truncate text to a specific length and add ellipsis
 * @param text Text to truncate
 * @param maxLength Maximum length before truncation
 * @returns Truncated text
 */
export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
};

/**
 * Format a number with commas (e.g. 1000 -> 1,000)
 * @param num Number to format
 * @returns Formatted number string
 */
export const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Generate a random ID
 * @param prefix Optional prefix for the ID
 * @returns Random ID string
 */
export const generateId = (prefix = "id"): string => {
    return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Scroll to an element by ID with smooth animation
 * @param id Element ID to scroll to
 */
export const scrollToElement = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

/**
 * Get a value from localStorage with proper type-casting
 * @param key localStorage key
 * @param defaultValue Default value if key doesn't exist
 * @returns Parsed value or default value
 */
export const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
    const value = localStorage.getItem(key);
    if (value === null) return defaultValue;
    try {
        return JSON.parse(value) as T;
    } catch (e) {
        return defaultValue;
    }
};

/**
 * Save a value to localStorage with proper serialization
 * @param key localStorage key
 * @param value Value to store
 */
export const saveToLocalStorage = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
};
