"use server"
import axios, { AxiosRequestConfig } from "axios"
import { cookies } from "next/headers"
import { WishlistResponse } from "../Types/Wishlist.type"
import { ProductsResponse } from "../Types/getLoggedUserWishlist.type"

export async function addProductToWishlist({productId}: {productId:string}):Promise<WishlistResponse>{
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value || null

    if(!token){
        throw new Error("Authentication Error")
    }

    try {
        const options:AxiosRequestConfig= {
        url: `https://ecommerce.routemisr.com/api/v1/wishlist`,
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

export async function getLoggedUserWishlist():Promise<ProductsResponse>{
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value || null

    if(!token){
        throw new Error("Authentication Error")
    }

    try {
        const options:AxiosRequestConfig= {
        url: `https://ecommerce.routemisr.com/api/v1/wishlist`,
        method: 'GET',
        headers: {token},
    }
    const {data} = await axios.request(options)
    // console.log(data);
    return data
    
    } catch (error) {
        throw error
    }
}

export async function removeProductFromWishlist({productId} : {productId: string} ){
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value || null

    if(!token){
        throw new Error("Authentication Error")
    }

    try {
        const options:AxiosRequestConfig= {
        url: `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        method: 'DELETE',
        headers: {token},
    }
    const {data} = await axios.request(options)
    return data
    
    } catch (error) {
        throw error
    }
}


//______________ Add To WishList____________
// {
//     "status": "success",
//     "message": "Product added successfully to your wishlist",
//     "data": [
//         "6408e43a6406cd15828e8f22",
//         "6428ebc6dc1175abc65ca0b9"
//     ]
// }



//_____________Get Logged User Wishlist___________
// {
//     "status": "success",
//     "count": 4,
//     "data": [
//         {
//             "sold": 2164,
//             "images": [
//                 "1678304313126-1.jpeg",
//                 "1678304313127-2.jpeg",
//                 "1678304313134-3.jpeg",
//                 "1678304313135-5.jpeg",
//                 "1678304313134-4.jpeg",
//                 "1678304313135-6.jpeg"
//             ],
//             "subcategory": [
//                 {
//                     "_id": "6407f3ccb575d3b90bf957eb",
//                     "name": "Cameras & Accessories",
//                     "slug": "cameras-and-accessories",
//                     "category": "6439d2d167d9aa4ca970649f"
//                 }
//             ],
//             "ratingsQuantity": 1,
//             "_id": "6408e43a6406cd15828e8f22",
//             "title": "EOS M50 Mark II Mirrorless Digital Camera With 15-45mm Lens Black",
//             "slug": "eos-m50-mark-ii-mirrorless-digital-camera-with-15-45mm-lens-black",
//             "description": "24.1 megapixel (aps-c) cmos sensor with iso 100-25600 (h: 51200)\ndigic 8 image processor with auto lighting optimizer\nimproved dual pixel cmos af and eye detection af (still/movie servo af support)\n4k uhd 24p and hd 120p for slow motion\nvari-angle touchscreen lcd convenient for vlogging and various composition",
//             "quantity": 600,
//             "price": 19699,
//             "priceAfterDiscount": 19199,
//             "availableColors": [],
//             "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1678304313006-cover.jpeg",
//             "category": {
//                 "_id": "6439d2d167d9aa4ca970649f",
//                 "name": "Electronics",
//                 "slug": "electronics",
//                 "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511121316.png"
//             },
//             "brand": {
//                 "_id": "64089fe824b25627a25315d1",
//                 "name": "Canon",
//                 "slug": "canon",
//                 "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286824747.png"
//             },
//             "ratingsAverage": 3,
//             "createdAt": "2023-03-08T19:38:34.436Z",
//             "updatedAt": "2026-02-17T16:52:34.024Z",
//             "__v": 0,
//             "id": "6408e43a6406cd15828e8f22"
//         }




//_______________ Delete item from wishlist__________
// {
//     "status": "success",
//     "message": "Product removed successfully to your wishlist",
//     "data": [
//         "6408e43a6406cd15828e8f22",
//         "6428ebc6dc1175abc65ca0b9",
//         "6408e05d6406cd15828e8f16",
//         "6428def9dc1175abc65ca061",
//         "6428dfa0dc1175abc65ca067",
//         "6428e319dc1175abc65ca06d"
//     ]
// }