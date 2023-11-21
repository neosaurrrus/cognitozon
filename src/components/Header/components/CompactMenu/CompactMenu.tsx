const CompactMenu = () => (
    <select className="border bg-cognito-blue dark:bg-slate-800/25 text-lg text-gray-100 p-2 rounded shadow-md"
        onChange={(e) => {
            window.location.href = e.target.value // This is not what i'd do in a real app!
        }}
        value={window.location.pathname}
    >
        <option value="/products">Products</option>
        <option value="/about">About Us</option>
        <option value="/help">Help & Support</option>
    </select>
)


export default CompactMenu