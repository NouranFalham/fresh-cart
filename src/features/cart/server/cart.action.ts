"use server"

import axios, { AxiosRequestConfig } from "axios"
import { cookies } from "next/headers"
import { CartResponse } from "../types/GetLoggedUserCart.types"

export async function addProductToCart({productId}: {productId:string}){
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value || null

    if(!token){
        throw new Error("Authentication Error")
    }

    try {
        const options:AxiosRequestConfig= {
        url: `https://ecommerce.routemisr.com/api/v1/cart`,
        method: 'POST',
        headers: {token},
        data: {productId} 
    }
    const {data} = await axios.request(options)
    return data
    } catch (error) {
        throw error
    }
}

export async function getLoggedUserCart():Promise<CartResponse>{
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value || null

    if(!token){
        throw new Error("Authentication Error")
    }

    try {
        const options:AxiosRequestConfig= {
        url: `https://ecommerce.routemisr.com/api/v1/cart`,
        method: 'GET',
        headers: {token},
    }
    const {data} = await axios.request(options)
    console.log(data);
    return data
    
    } catch (error) {
        throw error
    }
}

export async function removeProductFromCart({productId} : {productId: string} ):Promise<CartResponse>{
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value || null

    if(!token){
        throw new Error("Authentication Error")
    }

    try {
        const options:AxiosRequestConfig= {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        method: 'DELETE',
        headers: {token},
    }
    const {data} = await axios.request(options)
    return data
    
    } catch (error) {
        throw error
    }
}

export async function updateProductQuantity(productId: string , count: number ):Promise<CartResponse>{
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value || null

    if(!token){
        throw new Error("Authentication Error")
    }

    try {
        const options:AxiosRequestConfig= {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        method: 'PUT',
        headers: {token},
        data: {count}
    }
    const {data} = await axios.request(options)
    return data
    
    } catch (error) {
        throw error
    }
}

export async function clearAllProductsFromCart(){
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value || null

    if(!token){
        throw new Error("Authentication Error")
    }

    try {
        const options:AxiosRequestConfig= {
        url: `https://ecommerce.routemisr.com/api/v1/cart`,
        method: 'DELETE',
        headers: {token},
    }
    const {data} = await axios.request(options)
    return data
    
    } catch (error) {
        throw error
    }
}

//______________ADD PRODUCT TO CART RESPONSE__________
// {
//     "status": "success",
//     "message": "Product added successfully to your cart",
//     "numOfCartItems": 2,
//     "cartId": "6988ce67fc1b1f664a851433",
//     "data": {
//         "_id": "6988ce67fc1b1f664a851433",
//         "cartOwner": "673b5f29803e888e052ad210",
//         "products": [
//             {
//                 "count": 2,
//                 "_id": "6988ce67fc1b1f664a851434",
//                 "product": "6428bd0bdc1175abc65c9fdb",
//                 "price": 699
//             },
//             {
//                 "count": 1,
//                 "_id": "698f55e4cd0f0bc61f68d12b",
//                 "product": "6428eb43dc1175abc65ca0b3",
//                 "price": 149
//             }
//         ],
//         "createdAt": "2026-02-08T17:56:55.377Z",
//         "updatedAt": "2026-02-13T16:48:36.368Z",
//         "__v": 1,
//         "totalCartPrice": 1547
//     }
// }


// __________ Get Logged User Cart Response __________

// {
//     "status": "success",
//     "numOfCartItems": 4,
//     "cartId": "698fc415191f2ec96076c6b7",
//     "data": {
//         "_id": "698fc415191f2ec96076c6b7",
//         "cartOwner": "69856833cfdd622f3d3a9634",
//         "products": [
//             {
//                 "count": 1,
//                 "_id": "698fc415191f2ec96076c6b8",
//                 "product": {
//                     "subcategory": [
//                         {
//                             "_id": "6407f1bcb575d3b90bf95797",
//                             "name": "Women's Clothing",
//                             "slug": "women's-clothing",
//                             "category": "6439d58a0049ad0b52b9003f"
//                         }
//                     ],
//                     "_id": "6428e997dc1175abc65ca0a1",
//                     "title": "Woman Shawl",
//                     "quantity": 220,
//                     "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680402838276-cover.jpeg",
//                     "category": {
//                         "_id": "6439d58a0049ad0b52b9003f",
//                         "name": "Women's Fashion",
//                         "slug": "women's-fashion",
//                         "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
//                     },
//                     "brand": {
//                         "_id": "64089bbe24b25627a253158b",
//                         "name": "DeFacto",
//                         "slug": "defacto",
//                         "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
//                     },
//                     "ratingsAverage": 4,
//                     "id": "6428e997dc1175abc65ca0a1"
//                 },
//                 "price": 149
//             },
//             {
//                 "count": 1,
//                 "_id": "698fc81e191f2ec96076cf7b",
//                 "product": {
//                     "subcategory": [
//                         {
//                             "_id": "6407f1bcb575d3b90bf95797",
//                             "name": "Women's Clothing",
//                             "slug": "women's-clothing",
//                             "category": "6439d58a0049ad0b52b9003f"
//                         }
//                     ],
//                     "_id": "6428e884dc1175abc65ca096",
//                     "title": "Woman Shawl",
//                     "quantity": 228,
//                     "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680402563605-cover.jpeg",
//                     "category": {
//                         "_id": "6439d58a0049ad0b52b9003f",
//                         "name": "Women's Fashion",
//                         "slug": "women's-fashion",
//                         "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
//                     },
//                     "brand": {
//                         "_id": "64089bbe24b25627a253158b",
//                         "name": "DeFacto",
//                         "slug": "defacto",
//                         "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
//                     },
//                     "ratingsAverage": 2,
//                     "id": "6428e884dc1175abc65ca096"
//                 },
//                 "price": 349
//             },
//         ],
//         "createdAt": "2026-02-14T00:38:45.666Z",
//         "updatedAt": "2026-02-14T16:17:55.994Z",
//         "__v": 3,
//         "totalCartPrice": 3996
//     }


// ___________DELETE ITEM FROM CART_________________

// {
//     "status": "success",
//     "numOfCartItems": 4,
//     "cartId": "6991284d326278f1d6bd345b",
//     "data": {
//         "_id": "6991284d326278f1d6bd345b",
//         "cartOwner": "69856833cfdd622f3d3a9634",
//         "products": [
//             {
//                 "count": 1,
//                 "_id": "69913179326278f1d6bd45d1",
//                 "product": {
//                     "subcategory": [
//                         {
//                             "_id": "6407f1bcb575d3b90bf95797",
//                             "name": "Women's Clothing",
//                             "slug": "women's-clothing",
//                             "category": "6439d58a0049ad0b52b9003f"
//                         }
//                     ],
//                     "_id": "6428e5e6dc1175abc65ca084",
//                     "title": "Woman Standart Fit Knitted Cardigan",
//                     "quantity": 222,
//                     "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680401893316-cover.jpeg",
//                     "category": {
//                         "_id": "6439d58a0049ad0b52b9003f",
//                         "name": "Women's Fashion",
//                         "slug": "women's-fashion",
//                         "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
//                     },
//                     "brand": {
//                         "_id": "64089bbe24b25627a253158b",
//                         "name": "DeFacto",
//                         "slug": "defacto",
//                         "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
//                     },
//                     "ratingsAverage": 4,
//                     "id": "6428e5e6dc1175abc65ca084"
//                 },
//                 "price": 499
//             },
//             {
//                 "count": 1,
//                 "_id": "6991317c326278f1d6bd45e1",
//                 "product": {
//                     "subcategory": [
//                         {
//                             "_id": "6407f1bcb575d3b90bf95797",
//                             "name": "Women's Clothing",
//                             "slug": "women's-clothing",
//                             "category": "6439d58a0049ad0b52b9003f"
//                         }
//                     ],
//                     "_id": "6428e509dc1175abc65ca07e",
//                     "title": "Relaxed Fit Knitted Joggers Lilac",
//                     "quantity": 222,
//                     "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680401672268-cover.jpeg",
//                     "category": {
//                         "_id": "6439d58a0049ad0b52b9003f",
//                         "name": "Women's Fashion",
//                         "slug": "women's-fashion",
//                         "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
//                     },
//                     "brand": {
//                         "_id": "64089bbe24b25627a253158b",
//                         "name": "DeFacto",
//                         "slug": "defacto",
//                         "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
//                     },
//                     "ratingsAverage": 1.5,
//                     "id": "6428e509dc1175abc65ca07e"
//                 },
//                 "price": 499
//             },
//             {
//                 "count": 1,
//                 "_id": "69914ee56b6b7ff22b78b132",
//                 "product": {
//                     "subcategory": [
//                         {
//                             "_id": "6407f243b575d3b90bf957ac",
//                             "name": "Men's Clothing",
//                             "slug": "men's-clothing",
//                             "category": "6439d5b90049ad0b52b90048"
//                         }
//                     ],
//                     "_id": "6428c042dc1175abc65c9ff7",
//                     "title": "Crew Neck Long Sleeve Men's Tricot Sweater with Color Block",
//                     "quantity": 500,
//                     "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680392257974-cover.jpeg",
//                     "category": {
//                         "_id": "6439d5b90049ad0b52b90048",
//                         "name": "Men's Fashion",
//                         "slug": "men's-fashion",
//                         "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511865180.jpeg"
//                     },
//                     "brand": {
//                         "_id": "64089d9e24b25627a25315a5",
//                         "name": "LC Waikiki",
//                         "slug": "lc-waikiki",
//                         "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286238428.png"
//                     },
//                     "ratingsAverage": 5,
//                     "id": "6428c042dc1175abc65c9ff7"
//                 },
//                 "price": 549
//             },
//             {
//                 "count": 1,
//                 "_id": "69914ef96b6b7ff22b78b152",
//                 "product": {
//                     "subcategory": [
//                         {
//                             "_id": "6407f3a8b575d3b90bf957e2",
//                             "name": "Laptops & Accessories",
//                             "slug": "laptops-and-accessories",
//                             "category": "6439d2d167d9aa4ca970649f"
//                         }
//                     ],
//                     "_id": "6408e05d6406cd15828e8f16",
//                     "title": "Galaxy Buds 2 Graphite",
//                     "quantity": 600,
//                     "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678303324588-cover.jpeg",
//                     "category": {
//                         "_id": "6439d2d167d9aa4ca970649f",
//                         "name": "Electronics",
//                         "slug": "electronics",
//                         "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
//                     },
//                     "brand": {
//                         "_id": "64089f5824b25627a25315c7",
//                         "name": "SONY",
//                         "slug": "sony",
//                         "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286680638.png"
//                     },
//                     "ratingsAverage": 0,
//                     "id": "6408e05d6406cd15828e8f16"
//                 },
//                 "price": 3999
//             }
//         ],
//         "createdAt": "2026-02-15T01:58:37.874Z",
//         "updatedAt": "2026-02-15T19:14:16.467Z",
//         "__v": 4,
//         "totalCartPrice": 5546
//     }
// }
