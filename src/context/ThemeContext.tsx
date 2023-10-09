"use client";
import { createContext, useState, ReactNode } from "react";

// Define the shape of the context
interface ThemeContextType {
    mode: string;
    toggle: () => void;
}

// Create the context with a default value
export const ThemeContext = createContext<ThemeContextType>({
    mode: "light",
    toggle: () => {},
});

// Define the props for the ThemeProvider
interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [mode, setMode] = useState<string>("light");

    const toggle = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            <div className={`theme ${mode}`}>{children}</div>
        </ThemeContext.Provider>
    );
};
