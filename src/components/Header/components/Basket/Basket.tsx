import { BasketContext } from "src/contexts/basket"
import { BasketType } from "src/types"
import { useContext, useState } from "react"
import BasketListItem from "./components/BasketListItem/BasketListItem"

// This component comprises both a button and the actual basket. I think having the basket as a popover on the side is helpful for a user trying to shop and see their basket at the same time.
function Basket() {
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false)
  const basket: BasketType = useContext(BasketContext).basket
  const setBasketFn: (basket: BasketType) => void = useContext(BasketContext).setBasket
  const basketCount = Object.values(basket).reduce((acc, curr) => acc + curr.count, 0)
  const basketTotal = Object.values(basket).reduce((acc, curr) => acc + (curr.count * curr.price), 0).toFixed(2) // To fixed is used here to avoid classic JS weird floating point errors

  const handleEmptyBasketClick = () => {
    localStorage.removeItem("basket") // Again, probably should be a hook or DB in a real app.
    setBasketFn({})
    setIsBasketOpen(false)
  }

  const renderBasketItems = () => {
    return Object.keys(basket).map((item: string, index: number) => (
      <BasketListItem key={index} basket={basket} item={item}/>
    ))
  }

  return (
      <>
        <button 
          onClick={() => setIsBasketOpen(prev => !prev)} 
          className="hover:scale-110 duration-300 flex">
            <img src="src/assets/basket.svg" className="w-6 h-6 mr-2" alt=""/>
            Basket ({basketCount})
        </button>
        <div 
          className={`absolute max-h-[90vh] overflow-scroll bg-cognito-blue/80 text-lg right-0 top-16 p-2 mb-16 shadow-md rounded-b-md duration-500 ${isBasketOpen ? "opacity-100" : "opacity-0 hidden"}`}
          aria-hidden={!isBasketOpen}
        >
          <h1 className="text-2xl mb-4 text-center">Your Basket</h1>
          <ul className="flex flex-col gap-4">
            {renderBasketItems()}
            {basketCount === 0 ? <li>Your basket is empty.</li> : <p className="text-xl text-center mt-4">Total: £{basketTotal} </p>}
          </ul>
          <button 
            onClick={handleEmptyBasketClick}
            className="bg-cognito-gray text-gray-100 hover:scale-110 duration-300 shadow-md rounded p-2 my-8 mx-36">Empty Basket</button>
        </div>
      </>
  )
}

export default Basket
