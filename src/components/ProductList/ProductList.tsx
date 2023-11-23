
import { useMemo, useState } from "react"
import { useFetch } from "src/hooks/useFetch"
import useDialog from "src/hooks/useDialog"
import ProductListItem from "./components/ProductListItem/ProductListItem"
import ProductDetail from "./components/ProductDetail/ProductDetail"
import { ProductType, ApiEndpoints } from "src/types"

// The ProductList component is the main hub of the app and thus contains several disparate elements. For a real app, things like loading, error handling, and dialog management could be abstracted out into custom hooks/components.
const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)
  const productDetailDialog = useDialog()
  const { fetchedData: products, isLoading, error} = useFetch(ApiEndpoints.GET_PRODUCTS)

  const sortedProducts = useMemo(() => products.sort((a: ProductType, b: ProductType) => a.name.localeCompare(b.name)), [products])

  const renderProducts = () => { // This is a good candidate for pagination/lazy loading in a real app if there is normally lots of products or the list item was more complex.
    return sortedProducts.map((product: ProductType, index: number) => (
      <ProductListItem key={index} product={product} setSelectedProductFn={setSelectedProduct} showProductDetailFn={productDetailDialog.show} />
    ))
  }

  return (
    <div className="flex flex-col items-center w-full min-w-[450px] min-h-screen p-16 text-gray-800 dark:text-gray-300 bg-cognito-blue/25 dark:bg-slate-900 ">
      <h1 className="text-4xl mb-16">Cognitozon Products</h1>

      {isLoading && <p className="text-2xl animate-pulse">Loading...</p> }  
      {Boolean(error) && <p className="text-2xl">Sorry, something went wrong: {error?.toString()}</p>}

      <ul>
        {renderProducts()} {/* It's my preference to abstract out JS code (bar super simple one liners) into their own functions for readability  */}
      </ul>

      <dialog
        ref={productDetailDialog.dialogRef}
        className="backdrop:bg-cognito-blue/50 bg-grey-200/90 dark:bg-slate-800 p-8 rounded shadow-lg" 
      >
        {selectedProduct && <ProductDetail closeDialogFn={productDetailDialog.close} selectedProduct={selectedProduct} setSelectedProductFn={setSelectedProduct} />}
      </dialog>
    </div>
  )
}

export default ProductList
