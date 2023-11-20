import { BasketContext } from "@/App"
import { BasketType } from "@/types"
import { useContext, useState } from "react"

function Basket() {
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false)
  const basket: BasketType = useContext(BasketContext).basket
  const setBasketFn: (basket: BasketType) => void = useContext(BasketContext).setBasket
  const basketCount = Object.values(basket).reduce((acc, curr) => acc + curr, 0)

  const handleEmptyBasketClick = () => {
    localStorage.removeItem("basket")
    setBasketFn({})
    setIsBasketOpen(false)
  }

  // TODO: fix the lazy margin for empty basket button
  return (
      <>
        <button 
          onClick={() => setIsBasketOpen(prev => !prev)} 
          className='hover:scale-110 duration-300 flex'>
            <img src='src/assets/basket.svg' className='w-6 h-6 mr-2' alt=''/>
            Basket ({basketCount})
            {isBasketOpen ? ' ▶' : ' ◀'}
        </button>
        <div className={`absolute bg-gray-100/90 dark:bg-slate-800/75 text-gray-800 dark:text-gray-100 text-lg right-0 top-16 p-4 shadow-md duration-300 ${isBasketOpen ? 'opacity-100' : 'opacity-0 translate-x-96 '}`}>
          <h1 className='text-2xl mb-4 text-center'>Your Basket</h1>
          <ul className="flex flex-col gap-4">
            {Object.keys(basket).map((item: string, index: number) => {
              return <li key={index}>{basket[item]} x {item} </li>
            })}
            {basketCount === 0 && <p>Your basket is empty.</p>}
          </ul>
          <button 
            onClick={handleEmptyBasketClick}
            className='bg-cognito-gray text-gray-100 hover:scale-110 duration-300 rounded p-2 my-8 mx-36'>Empty Basket</button>
        </div>
      </>
  )
}

export default Basket
