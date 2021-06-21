import React, { useState } from 'react'

export const Contador = () => {
  const [valor, setValor] = useState(0)

  const acomular = (numero: number) => {
    setValor(valor + numero)
  }
  return (
    <div>
      <h3>Contador: <small>{valor}</small></h3>
      <button className='btn btn-primary' onClick={() => acomular(1)}>+</button>
      {' '}
      <button className='btn btn-primary' onClick={() => acomular(-1)}>-</button>
    </div>
  )
}
