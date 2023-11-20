import { useFetch } from '@/hooks/useFetch'
import ProductListItem from './components/ProductListItem/ProductListItem'
import { ProductType } from '@/types'


// TODO: Find a better place for this:
const getProductsUrl = 'https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json' 

function ProductList() {
  const { fetchedData: products, isLoading, error} = useFetch(getProductsUrl)

  const renderProducts = () => (  // Was in two minds about a multiple column layout for the products, but I think it's better to keep it less cluttered.
    products.map((product: ProductType, index: number) => {
      return (
        <ul>
          <ProductListItem key={index} product={product} />
        </ul>
      )
    })
  )

  return (
    <div className='w-full min-h-screen text-center text-gray-800 dark:text-gray-300 bg-cognito-blue/25 dark:bg-slate-900 p-16'>
      <h1 className='text-4xl m-16'>Our Products</h1>
      {isLoading && <p className='text-2xl animate-pulse'>Loading...</p> } 
      {error && <p className='text-2xl'>Sorry something went wrong, please try again.</p>}
      {renderProducts()}
    </div>
  )
}

export default ProductList

// 1. stop multiple requests
// 4. flow the products across the page, let it breathe. Lazy load? Order list? Mention pagnitation at least
// 5. show the desc? (check brief)
// 8.  mobile menu?
// 9. Fix TS errors.
// 10. tests
// 11. responsive - 800px breakpoint
// 12. readme and comment
// 13. readability check
// 14. Check TODOs