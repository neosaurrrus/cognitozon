import Basket from "./Basket/Basket"

// I have not added real routing to this app, I would use react-router in a real app
function Header() {

  const navItemClasses = 'hover:scale-110 hover:font-semibold duration-300'

  return (
    <nav className='w-full h-16 sticky top-0 flex justify-between items-center px-8 shadow-md text-xl bg-cognito-blue text-gray-100'>
      <a href="/" className='text-white hover:scale-110 duration-300'>
        <img src='src/assets/store-logo.svg' className='h-8 w-8 inline-block mr-2 fill white' alt='badge with a star emblem' />
        <span>Cognitozon</span>
      </a>
      <div className='flex gap-8'>
        <a href="/products" className={navItemClasses}>Our Products</a>
        <a href="/about" className={navItemClasses}>About Us</a>
        <a href="/help" className={navItemClasses}>Help & Support</a>
      </div>
      <Basket />
    </nav>
  )
}

export default Header
