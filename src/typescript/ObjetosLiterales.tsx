interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion
}

interface Direccion {
  pais: string;
  ciudad: string;
  casaN: string;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: 'Michael Rodriguez',
    edad: 35,
    direccion: {
      pais: 'Colombia',
      ciudad: 'Barranquilla',
      casaN: '432'
    }
  }

  return (
    <div>
      <h3>Objetos literales</h3>
      <code>
        <pre>
          {JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </div>
  )
}
