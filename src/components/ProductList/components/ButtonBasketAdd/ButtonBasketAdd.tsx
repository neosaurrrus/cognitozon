import { useContext } from "react";
import { BasketType } from "src/types"
import { BasketContext } from "src/contexts/basket"

interface Props {
    name: string
}

const ButtonBasketAdd = ({name}: Props) => {
    const basket: BasketType = useContext(BasketContext).basket
    const setBasketFn: (basket: BasketType) => void = useContext(BasketContext).setBasket

    const handleAddToBasketClick = () => {
        if (basket[name]) {
          setBasketFn({...basket, [name]: basket[name] + 1})
        } else {
          setBasketFn({...basket, [name]: 1})
        }
        localStorage.setItem("basket", JSON.stringify(basket)); // TODO: Would have this logic in its own hook in a real app. (Though I'd probably use a DB instead of local storage in that case)
    }

    return (
        <button 
           onClick={handleAddToBasketClick}
           className='bg-cognito-blue hover:scale-110 font-bold text-gray-100 py-2 px-4 rounded duration-300'>
           <img src='src/assets/basket-add.svg' className='h-4 w-4 inline-block mr-2' alt='basket' /> <span>Add</span>
       </button>
    );
};

export default ButtonBasketAdd