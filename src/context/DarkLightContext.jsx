import { React, createContext, useState, useMemo } from "react";

export const DarkLightContext = createContext();
export function DarkLightProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const theme = useMemo(() => ({ darkMode, setDarkMode }), [darkMode]);
    return (
        <DarkLightContext.Provider value={theme}>
            {children}
        </DarkLightContext.Provider>
    );
}
