import { ProductType } from "src/types"
import ButtonBasketAdd from "../ButtonBasketAdd/ButtonBasketAdd"
import useWindowDimensions from "src/hooks/useWindowDimensions"

interface Props {
  product: ProductType
  setSelectedProductFn: (product: ProductType) => void
}

const ProductListItem = ({product, setSelectedProductFn}: Props) => {
  const { isMobile } = useWindowDimensions()
  const { name, price } = product
  
  const handleDetailsClick = () => {
    setSelectedProductFn(product)
  }

  return (
    <li className={`flex ${isMobile && "flex-col"} max-w-[700px] gap-4 rounded bg-cognito-blue/20 dark:bg-slate-800 m-4 p-4 justify-between items-center duration-300`}>
      <h2 className="text-lg">{name}</h2>
      <div>
        <span>£{price}</span> 
        <button
          onClick={handleDetailsClick}
          className="bg-cognito-gray hover:scale-110 font-bold text-gray-100 py-2 px-4 mx-4 rounded duration-300"
        >
          Details
        </button>
        <ButtonBasketAdd name={name} />
      </div>
    </li>
  )
}

export default ProductListItem
