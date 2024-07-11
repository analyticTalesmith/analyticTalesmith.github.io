// components/ThemeProvider.tsx

"use client";

import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { applyTheme, getInitialTheme } from '@/app/utils/theme';

interface ThemeContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>(getInitialTheme);

    useEffect(() => {
        applyTheme(theme);
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            setTheme(mediaQuery.matches ? 'dark' : 'light');
        };
        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className="flex flex-col h-screen">
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
