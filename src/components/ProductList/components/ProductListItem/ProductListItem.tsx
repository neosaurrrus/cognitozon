import { ProductType } from "src/types"
import ButtonBasketAdd from "../ButtonBasketAdd/ButtonBasketAdd"
import useWindowDimensions from "src/hooks/useWindowDimensions"

interface Props {
  product: ProductType
  setSelectedProductFn: (product: ProductType) => void
  showProductDetailFn: () => void
}

// Depending on the viewport width, the product list item elements will either be a row or a column to make the best use of space, the price position changes to keep it easily visible for a user.
const ProductListItem = ({product, setSelectedProductFn, showProductDetailFn}: Props) => {
  const { isNarrowViewport } = useWindowDimensions()
  const { name, price } = product
  
  const handleDetailsClick = () => {
    setSelectedProductFn(product)
    showProductDetailFn()
  }

  return (
    <li className={`flex ${isNarrowViewport && "flex-col"} max-w-[700px] gap-4 rounded bg-cognito-blue/20 dark:bg-slate-800 m-4 p-4 justify-between items-center duration-300`}>
      <h2 className="text-lg">{name}</h2>
      {isNarrowViewport && <span>£{price}</span>}
      <div>
        {!isNarrowViewport && <span>£{price}</span>} 
        <button
          onClick={handleDetailsClick}
          className="bg-cognito-gray hover:scale-110 font-bold text-gray-100 py-2 px-4 mx-4 rounded duration-300"
        >
          Details
        </button>
        <ButtonBasketAdd name={name} price={price} />
      </div>
    </li>
  )
}

export default ProductListItem
