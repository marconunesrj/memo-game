import React, { useState} from 'react'
import { Card } from './Card'

const icons = ['😂', '💕', '😁', '🍕',
               '🐳', '🤢','😻', '🐙']


function getCards() {
    return [...icons, ...icons]
           .sort(() => Math.random() - 0.5)  // Embaralha as cartas
           .map((icon, index) => ({
                index,
                icon,
                showing: false,  // Controle de estado para saber se o cartão está virado ou não
                selected: false,
                matched: false,
           }))
}

export function Board() {    
    const [ cards, setCards ] = useState(getCards())

    function onClick(card) {
        const cardIndex = cards.findIndex(c => c.index === card.index)
        cards[cardIndex].showing = !cards[cardIndex].showing
        setCards([...cards])  // Cria um novo array para forçar a atualização do estado
    }
  

    return (
        <div style={style}>
            <button style={styleResetButton} onClick={() => setCards(getCards())}>Reiniciar Jogo</button>
            {cards.map((card, index) => (
                <Card key={index} card={card} onClick={onClick} />
            ))}
        </div>
    )
}

const style = {
    backgroundColor: '#2f2f2f',
    flexGrow: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    gap: '1em',
    padding: '1em',
}

const styleResetButton = {
    position: 'absolute',
    top: '1em',
    right: '2em',
    // display: 'flex',
    fontSize: '1.2em',
    padding: '1em',
    borderRadius: '8px',
    // marginBottom: '1em',
    cursor: 'pointer',
}