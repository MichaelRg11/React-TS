import React from 'react'

export const TiposBasicos = () => {
  let nombre: string = 'Michael';
  const edad = 34;
  let estaActivo: boolean = false;

  const poderes: string[] = ['Velocidad', 'Volar', 'Respirar bajo el agua']

  return (
    <div>
      <h3>Tipos báicos</h3>
      {nombre}, {edad}, {estaActivo ? 'activo' : 'no activo'}
      <br />
      {poderes.join(', ')}
    </div>
  )
}
