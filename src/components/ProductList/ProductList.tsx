import { useFetch } from '@/hooks/useFetch'
import ProductDetail from './components/ProductDetail/ProductDetail'
import { ProductType } from '@/types'


// TODO: Find a better place for this:
const getProductsUrl = 'https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json' //

function ProductList() {
  const { fetchedData: products, isLoading, error} = useFetch(getProductsUrl)

  const renderProducts = () => ( 
    products.map((product: ProductType, index: number) => {
      return <ProductDetail key={index} product={product} />
    })
  )
  
  if (isLoading) return (
    <p>Loading...</p>
  )

  if (error) return (
    <p>Sorry something went wrong...</p>
  )

  return (
    <div className='w-full flex flex-col m-4 items-center'>
      <h1 className='text-2xl'>Our Products</h1>
      {renderProducts()}
    </div>
  )
}

export default ProductList
