import { useState } from "react"

export const useCounter = (inicial: number = 0) => {
  const [valor, setValor] = useState(inicial)

  const acomular = (numero: number) => {
    setValor(valor + numero)
  }

  return { valor, acomular }
}
