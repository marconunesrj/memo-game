import React, {useContext, useState} from 'react'
import { ThemeContext } from '../context/ThemeContext'

// children prop pega o conteúdo que está entre as tags do componente
// icon prop é um exemplo de prop personalizada
// export function Card({children, icon}) {
export function Card({card, onClick}) {

  const { themeDark , nome} = useContext(ThemeContext)
  
  return (
    <button style={style(themeDark, card.matched)} onClick={() => onClick(card)}>
        {card.showing ? card.icon : '❔'}
        {/* {icon} */}
        {/* /* Deve ser retirado o span abaixo se for usar a prop children */}
        {/* <span style={{fontSize: '.3em'}}>{card.icon} {nome}</span> */}
    </button>
  )
}

const style = (themeDark, matched) => ({
  backgroundColor: themeDark ? (matched ? '#8fbc8f' : '#676767') : (matched ? '#90ee90' : '#f0f0f0'),
  fontSize: '10em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '16px',
  border: '1px solid #',
  cursor: 'pointer'
})