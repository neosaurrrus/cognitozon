import { BasketType, ProductType } from '@/types'
import ButtonBasketAdd from '@/components/ProductList/components/ButtonBasketAdd/ButtonBasketAdd'
import { useContext } from 'react'
import { BasketContext } from '@/contexts/basket'

interface Props {
  selectedProduct: ProductType
  setSelectedProductFn: (product: ProductType | null) => void
  closeDialogFn: () => void
}

const ProductDetail = ({selectedProduct, setSelectedProductFn, closeDialogFn}: Props) => {
    const basket: BasketType = useContext(BasketContext).basket
    const {name, price, description} = selectedProduct as ProductType
    const basketCount = basket[name] || 0
    
    const handleCloseClick = () => {
        setSelectedProductFn(null)
        closeDialogFn()
    }
    return (
        <div className='dark:text-gray-100'>
          <h2 className='text-2xl mb-4'>{name}</h2>
          <p className='mb-4'>{description}</p>
          <p className='text-2xl mb-4'>£{price}</p>
          <p>{basketCount} in basket</p>   
          <div className='flex flex-col mt-8'>
            <ButtonBasketAdd name={name} />
            <button 
                autoFocus
                onClick={handleCloseClick}
                className='bg-cognito-gray text-gray-100 hover:scale-110 duration-300 shadow-md rounded p-2 mt-4'>Close
            </button>
          </div>
        </div>
    )
  }


export default ProductDetail
