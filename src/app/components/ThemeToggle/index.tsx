import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@/app/components/ThemeProvider';

const ThemeToggle: React.FC = () => {
    const themeContext = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div suppressHydrationWarning={true} />;
    }

    if (!themeContext) {
        throw new Error('ToggleThemeButton must be used within a ThemeProvider');
    }

    const { theme, setTheme } = themeContext;

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button onClick={toggleTheme}>
            Toggle to {theme === 'dark' ? 'light' : 'dark'} mode
        </button>
    );
};

export default ThemeToggle;
