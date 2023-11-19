
import {createContext, useMemo, useState} from "react"
import Header from "./components/Header/Header"
import ProductList from "./components/ProductList/ProductList"
import { BasketType } from "./types"

export const BasketContext = createContext({
  basket: {},   
  setBasket: (_basket: BasketType) => {}
})

const localBasket = JSON.parse(localStorage.getItem("basket") || "{}")

function App() {
  const [basket, setBasket] = useState<BasketType>(localBasket || null);
  const basketContextValue = useMemo(() => ({ basket, setBasket }), [basket, setBasket])

  return (
    <BasketContext.Provider value={basketContextValue}>
      <Header />
      <ProductList />
    </BasketContext.Provider>
  )
}

export default App
