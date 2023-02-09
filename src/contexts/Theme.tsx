import React, { useEffect, useState } from 'react';

const ThemeContext = React.createContext({
    theme: 'light',
    setTheme: (theme: string) => { },
    changeTheme: () => { }
});

export const ThemeContextProvider = ({ children }: { children: React.ReactElement }) => {
    const [themeState, setThemeState] = useState('');

    const setTheme = (theme: string) => {
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", theme);

        localStorage.setItem("theme", theme);

        setThemeState(theme);
    }

    const changeTheme = () => {
        const newTheme = themeState === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    useEffect(() => {
        const theme = localStorage.getItem("theme") || 'dark';

        setTheme(theme);
    }, [])

    return (
        <ThemeContext.Provider
            value={{ theme: themeState, setTheme, changeTheme }}
        >
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext