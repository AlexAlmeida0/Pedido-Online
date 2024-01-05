import { createContext, useState, useEffect, ReactNode } from "react"
import { SnackData } from "../interfaces/SnackData"
import { getBurguers, getPizzas, getBebidas, getSobremesas } from "../services/api"

interface SnackContextProps {
  burguers: SnackData[]
  pizzas: SnackData[]
  bebidas: SnackData[]
  sobremesas: SnackData[]
}

interface SnackProviderProps {
  children: ReactNode
}
export const SnackContext = createContext({} as SnackContextProps)

export function SnackProvider({ children }: SnackProviderProps){
  const [burguers, setBurguers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [bebidas, setBebidas] = useState<SnackData[]>([])
  const [sobremesas, setSobremesas] = useState<SnackData[]>([])

  useEffect(() => {
   ;(async () => {
    try{
      const burguerRequest = await getBurguers()
      const pizzasRequest = await getPizzas()
      const bebidasRequest = await getBebidas()
      const sobremesasRequest = await getSobremesas()

      const requests = [burguerRequest, pizzasRequest, bebidasRequest, sobremesasRequest]

      const [
        { data: burguerResponse },
        { data: pizzasResponse },
        { data: bebidasResponse },
        { data: sobremesasResponse },
      ] = await Promise.all(requests)

      setBurguers(burguerResponse)
      setPizzas(pizzasResponse)
      setBebidas(bebidasResponse)
      setSobremesas(sobremesasResponse)
    } catch (error) {
      console.error(error)
    }
    })()
  },[])

  return (
    <SnackContext.Provider value={{ burguers, pizzas, bebidas, sobremesas }}>
      { children }
    </SnackContext.Provider>
  )
}
