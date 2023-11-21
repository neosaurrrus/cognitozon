
import { useEffect, useMemo, useState } from "react"
import { useFetch } from "src/hooks/useFetch"
import useDialog from "src/hooks/useDialog"
import ProductListItem from "./components/ProductListItem/ProductListItem"
import ProductDetail from "./components/ProductDetail/ProductDetail"
import { ProductType, ApiEndpoints } from "src/types"

// The ProductList is the main hub of the app, which also makes it a bit too busy for my tastes... I would likely split this into smaller components if it were to grow (which it would if it were a real app)
const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)
  const productDetailDialog = useDialog()
  const { fetchedData: products, isLoading, error} = useFetch(ApiEndpoints.GET_PRODUCTS)
  const sortedProducts = useMemo(() =>products.sort((a: ProductType, b: ProductType) => a.name.localeCompare(b.name)), [products])

  useEffect(() => { // show the ProductDetail dialog when a product is selected
    if (selectedProduct) {
      productDetailDialog.show()
    }
    return () => {
      productDetailDialog.close()
    }
  }, [productDetailDialog, selectedProduct])

  const renderProducts = () => {
    return sortedProducts.map((product: ProductType, index: number) => (
      <ProductListItem key={index} product={product} setSelectedProductFn={setSelectedProduct} />
    ))
  }

  // I generally try to keep complex logic out of the return statement, using 'renderXXX' functions instead. I find it makes the code more readable and easier to debug.
  return (
    <div className="flex flex-col items-center w-full min-w-[450px] min-h-screen p-16 text-gray-800 dark:text-gray-300 bg-cognito-blue/25 dark:bg-slate-900 ">
      <h1 className="text-4xl mb-16">Cognitozon Products</h1>
      {isLoading && <p className="text-2xl animate-pulse">Loading...</p> } 
      {Boolean(error) && <p className="text-2xl">Sorry something went wrong: {error?.toString()}</p>}
      <ul>
        {renderProducts()}
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
