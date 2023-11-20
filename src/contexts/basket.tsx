import { BasketType } from "@/types";
import { createContext } from "react";

export const BasketContext = createContext({
    basket: {},   
    setBasket: (_newBasket: BasketType) => {}
})
