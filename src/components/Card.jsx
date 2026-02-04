import React from 'react'

// children prop pega o conteúdo que está entre as tags do componente
// icon prop é um exemplo de prop personalizada
export function Card({children, icon}) {
  return <button style={style} >
    {children}
    {/* {icon} */}
  </button>
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