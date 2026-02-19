    export interface AddToCartResponse {
    status: string;
    message: string;
    numOfCartItems: number;
    cartId: string;
    data: Cart;
    }

    export interface Cart {
    _id: string;
    cartOwner: string;
    products: CartProduct[];
    createdAt: string;   // ISO date string
    updatedAt: string;   // ISO date string
    __v: number;
    totalCartPrice: number;
    }

    export interface CartProduct {
    count: number;
    _id: string;
    product: string;  // product ID
    price: number;
}
