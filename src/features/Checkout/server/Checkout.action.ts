"use server"

import axios, { AxiosRequestConfig } from "axios"
import { cookies } from "next/headers"
import { shippingAddressValues } from "../Schema/Checkout.schema"


export async function createOrderCash({cartId,shippingAddress}:{cartId:string, shippingAddress: shippingAddressValues }){
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value || null

    if(!token){
        throw new Error("Authentication Error")
    }

    try {
        const options:AxiosRequestConfig= {
        url: `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
        method: 'POST',
        headers: {token},
        data: shippingAddress
    }
    const {data} = await axios.request(options)
    return data
    
    } catch (error) {
        throw error
    }
}
export async function createOnlineOrder({cartId,shippingAddress, url}:{cartId:string, url:string, shippingAddress: shippingAddressValues }){
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value || null

    if(!token){
        throw new Error("Authentication Error")
    }

    try {
        const options:AxiosRequestConfig= {
        url: `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
        method: 'POST',
        headers: {token},
        data: shippingAddress
    }
    const {data} = await axios.request(options)
    return data
    
    } catch (error) {
        throw error
    }
}


//__________CREATE ORDER CASH RESPONSE ____________

// {
//     "status": "success",
//     "data": {
//         "taxPrice": 0,
//         "shippingPrice": 0,
//         "totalOrderPrice": 3541,
//         "paymentMethodType": "cash",
//         "isPaid": false,
//         "isDelivered": false,
//         "_id": "699394370f54ac0a826f8172",
//         "user": "69856833cfdd622f3d3a9634",
//         "cartItems": [
//             {
//                 "count": 4,
//                 "_id": "6988ce67fc1b1f664a851434",
//                 "product": "6428bd0bdc1175abc65c9fdb",
//                 "price": 699
//             },
//             {
//                 "count": 5,
//                 "_id": "698f55e4cd0f0bc61f68d12b",
//                 "product": "6428eb43dc1175abc65ca0b3",
//                 "price": 149
//             }
//         ],
//         "shippingAddress": {
//             "details": "detailsssss",
//             "phone": "01010800901",
//             "city": "Cairo"
//         },
//         "createdAt": "2026-02-16T22:03:35.377Z",
//         "updatedAt": "2026-02-16T22:03:35.377Z",
//         "id": 78320,
//         "__v": 0
//     }
// }