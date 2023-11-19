import { useContext } from "react"
import { BasketType, ProductType } from "@/types"
import { BasketContext } from "@/App"

interface Props {
  product: ProductType
}

function ProductDetail({product}: Props) {
  const basket: BasketType = useContext(BasketContext).basket
  const {name, price, description} = product
  
  const handleAddToBasketClick = () => {
    if (basket[name]) {
      basket[name]++
    } else {
      basket[name] = 1
    }

    localStorage.setItem("basket", JSON.stringify(basket)); // Probably would have this logic in its own hook in a real app.
  }

  return (
    <details className='flex gap-4 w-1/2 bg-gray-100 hover:bg-gray-200 m-4 p-4 justify-between duration-300'>
      <summary className='flex justify-between items-center cursor-pointer'> 
        {name} - £{price} 
        <button 
          onClick={handleAddToBasketClick}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-300'>
            Add to basket
        </button>
      </summary>
      <div className="m-4">
        {description}
      </div>
    </details>
  )
}

export default ProductDetail
