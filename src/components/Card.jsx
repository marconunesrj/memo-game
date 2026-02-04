import React, {useState} from 'react'

// children prop pega o conteúdo que está entre as tags do componente
// icon prop é um exemplo de prop personalizada
// export function Card({children, icon}) {
export function Card({children}) {

  // Controle de estado para saber se o cartão está virado ou não
  const [ showing, show ] = useState(false)

  function onClick() {
    show(!showing)
  }
  
  return <button style={style} onClick={onClick}>
    {showing ? children : '❔'}
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