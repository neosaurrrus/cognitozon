import { useContext } from "react"
import { BasketType, ProductType } from "@/types"
import { BasketContext } from "@/App"

interface Props {
  product: ProductType
}

function ProductListItem({product}: Props) {
  const basket: BasketType = useContext(BasketContext).basket
  const setBasketFn: (basket: BasketType) => void = useContext(BasketContext).setBasket

  const {name, price} = product
  
  const handleAddToBasketClick = () => {
    if (basket[name]) {
      setBasketFn({...basket, [name]: basket[name] + 1})
    } else {
      setBasketFn({...basket, [name]: 1})
    }

    localStorage.setItem("basket", JSON.stringify(basket)); // Probably would have this logic in its own hook in a real app.
  }

  return (
    <li className='flex gap-4 rounded bg-cognito-blue/20 dark:bg-slate-800 m-4 p-4 justify-between items-center duration-300'>
        <h2 className="text-lg">{name}</h2>
        <div>
          <span>£{price}</span> 
          <button
            className='bg-cognito-gray hover:scale-110 font-bold text-gray-100 py-2 px-4 ml-4 rounded duration-300'
          >Details</button>
          <button 
            onClick={handleAddToBasketClick}
            className='bg-cognito-blue hover:scale-110 font-bold text-gray-100 py-2 px-4 ml-4 rounded duration-300'>
              <img src='src/assets/basket-add.svg' className='h-4 w-4 inline-block mr-2' alt='basket' /> <span>Add</span>
          </button>
        </div>
    </li>
  )
}

export default ProductListItem
