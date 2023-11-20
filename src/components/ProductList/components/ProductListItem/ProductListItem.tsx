import { ProductType } from '@/types'
import ButtonBasketAdd from '../ButtonBasketAdd/ButtonBasketAdd'

interface Props {
  product: ProductType
  setSelectedProductFn: (product: ProductType) => void
}

function ProductListItem({product, setSelectedProductFn}: Props) {
  
  const {name, price} = product
  
  const handleDetailsClick = () => {
    setSelectedProductFn(product)
  }

  return (
    <li className='flex gap-4 rounded bg-cognito-blue/20 dark:bg-slate-800 m-4 p-4 justify-between items-center duration-300'>
        <h2 className="text-lg">{name}</h2>
        <div>
          <span>£{price}</span> 
          <button
            onClick={handleDetailsClick}
            className='bg-cognito-gray hover:scale-110 font-bold text-gray-100 py-2 px-4 mx-4 rounded duration-300'
          >Details
          </button>
          <ButtonBasketAdd name={name} />
        </div>
    </li>
  )
}

export default ProductListItem
