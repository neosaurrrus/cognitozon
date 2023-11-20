export interface ProductType {
    id: number,
    name: string,
    description: string,
    price: number,
}

export interface BasketType {
    [key: string]: number
}

export enum ApiEndpoints {
    GET_PRODUCTS = 'https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json',
}