
import {useMemo, useState} from "react"
import Header from "./components/Header/Header"
import ProductList from "./components/ProductList/ProductList"
import { BasketContext } from "./contexts/basket"
import { BasketType } from "./types"

const localBasket = JSON.parse(localStorage.getItem("basket") || "{}") // Would have this logic in its own hook in a real app. (Though I'd probably use a DB instead of local storage in that case)

const App = () => {
  const [basket, setBasket] = useState<BasketType>({...localBasket} || null)
  const basketContextValue = useMemo(() => ({ basket, setBasket }), [basket, setBasket])

  return (
    <BasketContext.Provider value={basketContextValue}>
      <Header />
      <ProductList/>
    </BasketContext.Provider>
  )
}

export default App
