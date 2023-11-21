import { useContext } from "react"
import { BasketType } from "src/types"
import { BasketContext } from "src/contexts/basket"

interface Props {
  name: string
  price: number
}

// This button is used in both the ProductList and ProductDetail components
const ButtonBasketAdd = ({name, price}: Props) => {
  const basket: BasketType = useContext(BasketContext).basket
  const setBasketFn: (basket: BasketType) => void = useContext(BasketContext).setBasket
  const handleAddToBasketClick = () => {
    if (basket[name]) {
      setBasketFn({...basket, [name]: { count: basket[name].count + 1, price: basket[name].price }})
    } else {
      setBasketFn({...basket, [name]: { count: 1, price }})
    }
    localStorage.setItem("basket", JSON.stringify(basket))
  }

  return (
    <button 
      onClick={handleAddToBasketClick}
      className="bg-cognito-blue hover:scale-110 font-bold text-gray-100 py-2 px-4 rounded duration-300"
    >
      <img src="src/assets/basket-add.svg" className="h-4 w-4 inline-block mr-2" alt="basket" /> 
      <span>Add</span>
    </button>
  )
}

export default ButtonBasketAdd