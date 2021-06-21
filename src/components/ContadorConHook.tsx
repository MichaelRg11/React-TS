import { useCounter } from '../hooks/useCounter'

export const ContadorConHook = () => {
  const { valor, acomular } = useCounter(10)
  return (
    <div>
      <h3>Contador con hook: <small>{valor}</small></h3>
      <button className='btn btn-primary' onClick={() => acomular(1)}>+</button>
      {' '}
      <button className='btn btn-primary' onClick={() => acomular(-1)}>-</button>
    </div>
  )
}
