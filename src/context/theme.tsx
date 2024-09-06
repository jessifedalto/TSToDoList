import { createContext, ReactNode, useState } from "react";

interface ITheme {
    theme: "light" | "dark";
    toggleTheme: () => void
}
export const ThemeContext = createContext({} as ITheme)

export const ThemeProvider = ({ children } :{children: ReactNode}) => {

    const [theme, setTheme] = useState<"light" | "dark">("light");
    
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return(
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
            children={ children }
        />
    )
}