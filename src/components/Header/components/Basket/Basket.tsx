import { BasketContext } from "src/contexts/basket"
import { BasketType } from "src/types"
import { useContext, useState } from "react"

function Basket() {
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false)
  const basket: BasketType = useContext(BasketContext).basket
  const setBasketFn: (basket: BasketType) => void = useContext(BasketContext).setBasket
  const basketCount = Object.values(basket).reduce((acc, curr) => acc + curr.count, 0)
  const basketTotal = Object.values(basket).reduce((acc, curr) => acc + (curr.count * curr.price), 0).toFixed(2) // To fixed is used here to avoid classic JS weird floating point errors

  const handleEmptyBasketClick = () => {
    localStorage.removeItem("basket")
    setBasketFn({})
    setIsBasketOpen(false)
  }

  const renderBasketItems = () => {
    return Object.keys(basket).map((item: string, index: number) => { 
      return (
        <li className='flex justify-between px-4' key={index}>
          <span>{basket[item].count} x {item}</span>
          <span> £{(basket[item].price * basket[item].count).toFixed(2)}</span> 
        </li>
      )
    })
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
          className={`absolute bg-cognito-blue/80 text-lg right-0 top-16 p-4 shadow-md rounded-b-md duration-300 ${isBasketOpen ? "opacity-100" : "opacity-0 translate-x-96"}`}
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
