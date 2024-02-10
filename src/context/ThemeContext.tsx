"use client";
import React, { createContext, useState, type ReactNode } from "react";

interface ThemeContextType {
    mode: string;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({
    mode: "light",
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [mode] = useState<string>("light");

    return (
        <ThemeContext.Provider value={{ mode }}>
            <div className={`theme ${mode}`}>{children}</div>
        </ThemeContext.Provider>
    );
};
