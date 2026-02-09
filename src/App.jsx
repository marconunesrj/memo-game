import React, {useContext, useState} from 'react'
import { Board } from './components/Board'
import { ThemeContext, ThemeProvider } from './context/ThemeContext'

export function App() {
    return (
        <ThemeProvider>
            <Content />
        </ThemeProvider>    
    )
}

function Content() {
    
    const { themeDark, setThemeDark } = useContext(ThemeContext)

    return (
        <div style={style(themeDark)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '2em'}}>
                <h1>Meu Jogo da Memória</h1>
                <a style = {styleThemeButton(themeDark)} href='#' onClick={() => setThemeDark(!themeDark)}>
                    {themeDark ? "🌑" : "☀️"}
                </a>
            </div>
            <Board />
        </div>
    )
}

const style = themeDark => ({
    fontSize: '2em',
    width: '100vw',
    height: '100vh',
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '1em'
})

const styleThemeButton = themeDark => ({
    fontSize: '2em',
    textDecoration: 'none'
})