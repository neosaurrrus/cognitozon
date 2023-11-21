import { BasketType, ProductType } from "src/types"
import ButtonBasketAdd from "../ButtonBasketAdd/ButtonBasketAdd"
import { useContext } from "react"
import { BasketContext } from "src/contexts/basket"

interface Props {
  selectedProduct: ProductType
  setSelectedProductFn: (product: ProductType | null) => void
  closeDialogFn: () => void
}

// This provides extra details of the selected product, which is pretty much just the description in this case but imagine it could be more in a real app (e.g. images, reviews, ratings, etc)
const ProductDetail = ({selectedProduct, setSelectedProductFn, closeDialogFn}: Props) => {
  const basket: BasketType = useContext(BasketContext).basket
  const {name, price, description} = selectedProduct as ProductType
  const basketCount = basket[name]?.count || 0
  
  const handleCloseClick = () => {
    setSelectedProductFn(null)
    closeDialogFn()
  }

  return (
    <div className="dark:text-gray-100">
      <h2 className="text-2xl mb-4">{name}</h2>
      <p className="mb-4">{description}</p>
      <p className="text-2xl mb-4">£{price}</p>
      <p>{basketCount} in basket</p>   
      <div className="flex flex-col mt-8">
        <ButtonBasketAdd name={name} price={price} />
        <button 
          autoFocus
          onClick={handleCloseClick}
          className="bg-cognito-gray text-gray-100 hover:scale-110 duration-300 shadow-md rounded p-2 mt-4">Close
        </button>
      </div>
    </div>
  )
}


export default ProductDetail
