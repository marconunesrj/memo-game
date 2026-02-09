import React, {createContext, useState} from 'react';

export const ThemeContext = createContext(
    // {
    // themeDark: false,
    // setThemeDark: () => {}
    // }
)  

export function ThemeProvider({children}) {
    const [ themeDark, setThemeDark ] = useState(true)
    const nome = 'Marco'
    return (
        <ThemeContext.Provider value={{themeDark, setThemeDark, nome}}>   
            {children}
        </ThemeContext.Provider>
    )
}