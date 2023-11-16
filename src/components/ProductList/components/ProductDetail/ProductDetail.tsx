import { ProductType } from "@/types"

interface Props {
  product: ProductType
}

function ProductDetail({product}: Props) {
 
  const {name, price, description} = product

  return (
    <details className='flex gap-4 w-1/2 bg-gray-100 hover:bg-gray-200 m-4 p-4 justify-between duration-300'>
      <summary className='flex justify-between items-center cursor-pointer'> 
        {name} - £{price} 
        <button 
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
