import { BasketType } from "src/types";
import { createContext } from "react";

export const BasketContext = createContext({
    basket: {},   
    setBasket: (_newBasket: BasketType) => {}
})
