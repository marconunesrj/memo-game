import React, {useState} from 'react'

// children prop pega o conteúdo que está entre as tags do componente
// icon prop é um exemplo de prop personalizada
// export function Card({children, icon}) {
export function Card({card, onClick}) {

  return (
    <button 
      style={{
        ...style, 
        backgroundColor: card.matched ? '#8fbc8f' : style.backgroundColor
      }} 
      onClick={() => onClick(card)}>
        {card.showing ? card.icon : '❔'}
        {/* {icon} */}
    </button>
  )
}

const style = {
  backgroundColor: '#676767',
  fontSize: '10em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '16px',
  border: '1px solid #',
  cursor: 'pointer'
}