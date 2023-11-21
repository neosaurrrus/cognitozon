import { BasketType } from "src/types";

interface Props {
    basket: BasketType;
    item: string;
}

const BasketListItem = ({basket, item} : Props) =>  (
    <li className='flex justify-between px-4 gap-2'>
        <span>{basket[item].count} x {item}</span>
        <span> £{(basket[item].price * basket[item].count).toFixed(2)}</span> 
    </li>
)

export default BasketListItem