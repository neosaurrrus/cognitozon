export interface ProductType {
    id: number,
    name: string,
    description: string,
    price: number,
}

export interface BasketType {
    [key: string]: number
} 