const FullMenu = () => {
    const fullMenuItemClasses = 'hover:scale-110 hover:font-semibold duration-300'
    return (
        <div className='flex gap-8'>
        <a href="/products" className={fullMenuItemClasses}>Our Products</a>
        <a href="/about" className={fullMenuItemClasses}>About Us</a>
        <a href="/help" className={fullMenuItemClasses}>Help & Support</a>
        </div>
    )
}

export default FullMenu