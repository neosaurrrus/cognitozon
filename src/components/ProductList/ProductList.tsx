
import { useEffect, useState } from 'react'
import { useFetch } from '@/hooks/useFetch'
import useDialog from '@/hooks/useDialog'
import ProductListItem from './components/ProductListItem/ProductListItem'
import ProductDetail from './components/ProductDetail/ProductDetail'
import { ProductType, ApiEndpoints } from '@/types'


function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)
  const productDetailDialog = useDialog()

  useEffect(() => {
    if (selectedProduct) {
      productDetailDialog.show()
    }
  }, [productDetailDialog, selectedProduct])

  const { fetchedData: products, isLoading, error} = useFetch(ApiEndpoints.GET_PRODUCTS)

  // Was in two minds about a multiple column layout for the products, but I think it's better to keep it less cluttered.
  // For a real app I'd consider performance more (reducing rerenders lazy loading/pagination techniques) but for this use case I think it's fine (hopefully)
  const renderProducts = () => {
    const sortedProducts = products.sort((a: ProductType, b: ProductType) => a.name.localeCompare(b.name))
    return sortedProducts.map((product: ProductType, index: number) => {
      return (
          <ProductListItem key={index} product={product} setSelectedProductFn={setSelectedProduct} />
      )
    })
  }

  return (
    <div className='w-full min-w-[450px] min-h-screen text-center text-gray-800 dark:text-gray-300 bg-cognito-blue/25 dark:bg-slate-900 p-16'>
      <h1 className='text-4xl m-8'>Our Products</h1>
      {isLoading && <p className='text-2xl animate-pulse'>Loading...</p> } 
      {Boolean(error) && <p className='text-2xl'>Sorry something went wrong: {error?.toString()}</p>}
      <ul>
        {renderProducts()}
      </ul>
      {/* Dialog probably should be its own component if it were used more than here */}
      <dialog 
        ref={productDetailDialog.dialogRef}
        className="backdrop:bg-cognito-blue/50 open:animate-fade-in bg-grey-200/90 dark:bg-slate-900 text-gray-800 dark:text-white-100 p-8 rounded shadow-lg" 
      >
        {selectedProduct && <ProductDetail closeDialogFn={productDetailDialog.close} selectedProduct={selectedProduct} setSelectedProductFn={setSelectedProduct} />}
      </dialog>
    </div>
  )
}

export default ProductList

// 10. tests
// 12. readme and comment
// 13. readability check
// 14. Check TODOs