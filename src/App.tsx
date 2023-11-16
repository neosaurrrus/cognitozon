import { useFetch } from "./hooks/useFetch"

// TODO: Find a better place for this:
const getProductsUrl = 'https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json' //


function App() {

  const { fetchedData, isLoading, error} = useFetch(getProductsUrl)
  
  console.log(fetchedData)
  console.log(isLoading + ':isLoading')
  console.log(error + ':error')
  
  return (
    <>
      
    </>
  )
}

export default App
