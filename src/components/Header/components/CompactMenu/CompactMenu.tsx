const CompactMenu = () => {
    return (
        <select className='border bg-cognito-blue dark:bg-slate-800/25 text-lg text-gray-100 p-2 rounded shadow-md'>
            <option value="/products">Our Products</option>
            <option value="/about">About Us</option>
            <option value="/help">Help & Support</option>
        </select>
    )
}

export default CompactMenu