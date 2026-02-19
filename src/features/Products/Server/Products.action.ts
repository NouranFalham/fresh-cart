"use server"

import axios, { AxiosRequestConfig } from "axios"
import { ProductsResponse, SingleProductResponse } from "../Types/Products.types";

export async function getProducts():Promise<ProductsResponse>{
    try {
        const options:AxiosRequestConfig = {
            url: 'https://ecommerce.routemisr.com/api/v1/products',
            method: 'GET'
        }
        const {data} = await axios.request(options);
        return data;
    } catch (error) {
        throw error
    }
}

export async function getProductById({id}:{id:string}):Promise<SingleProductResponse>{
    try {
        const options:AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
            method: 'GET'
        }
        const {data} = await axios.request(options);
        return data;
    } catch (error) {
        throw error
    }
}


// {
//     "results": 56,
//     "metadata": {
//         "currentPage": 1,
//         "numberOfPages": 2,
//         "limit": 40,
//         "nextPage": 2
//     },
//     "data": [
//         {
//             "sold": 24049,
//             "images": [
//                 "https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg",
//                 "https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg",
//                 "https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg",
//                 "https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg"
//             ],
//             "subcategory": [
//                 {
//                     "_id": "6407f1bcb575d3b90bf95797",
//                     "name": "Women's Clothing",
//                     "slug": "women's-clothing",
//                     "category": "6439d58a0049ad0b52b9003f"
//                 }
//             ],
//             "ratingsQuantity": 1,
//             "_id": "6428ebc6dc1175abc65ca0b9",
//             "title": "Woman Shawl",
//             "slug": "woman-shawl",
//             "description": "Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen",
//             "quantity": 225,
//             "price": 191,
//             "priceAfterDiscount": 349,
//             "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg",
//             "category": {
//                 "_id": "6439d58a0049ad0b52b9003f",
//                 "name": "Women's Fashion",
//                 "slug": "women's-fashion",
//                 "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
//             },
//             "brand": {
//                 "_id": "64089bbe24b25627a253158b",
//                 "name": "DeFacto",
//                 "slug": "defacto",
//                 "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
//             },
//             "ratingsAverage": 5,
//             "createdAt": "2023-04-02T02:43:18.400Z",
//             "updatedAt": "2026-02-11T19:24:14.768Z",
//             "id": "6428ebc6dc1175abc65ca0b9"
//         }


// ________________SINGLE PRODUCT_______________

// {
//     "data": {
//         "sold": 4442,
//         "images": [
//             "https://ecommerce.routemisr.com/Route-Academy-products/1680399913850-1.jpeg",
//             "https://ecommerce.routemisr.com/Route-Academy-products/1680399913851-4.jpeg",
//             "https://ecommerce.routemisr.com/Route-Academy-products/1680399913850-2.jpeg",
//             "https://ecommerce.routemisr.com/Route-Academy-products/1680399913851-3.jpeg",
//             "https://ecommerce.routemisr.com/Route-Academy-products/1680399913851-5.jpeg"
//         ],
//         "subcategory": [
//             {
//                 "_id": "6407f243b575d3b90bf957ac",
//                 "name": "Men's Clothing",
//                 "slug": "men's-clothing",
//                 "category": "6439d5b90049ad0b52b90048"
//             }
//         ],
//         "ratingsQuantity": 20,
//         "_id": "6428de2adc1175abc65ca05b",
//         "title": "Softride Enzo NXT CASTLEROCK-High Risk R",
//         "slug": "softride-enzo-nxt-castlerock-high-risk-r",
//         "description": "Sole Material\tRubber\nColour Name\tRED\nDepartment\tMen",
//         "quantity": 173,
//         "price": 2999,
//         "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680399913757-cover.jpeg",
//         "category": {
//             "_id": "6439d5b90049ad0b52b90048",
//             "name": "Men's Fashion",
//             "slug": "men's-fashion",
//             "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511865180.jpeg"
//         },
//         "brand": {
//             "_id": "64089d5c24b25627a253159f",
//             "name": "Puma",
//             "slug": "puma",
//             "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678286172219.png"
//         },
//         "ratingsAverage": 2.8,
//         "createdAt": "2023-04-02T01:45:14.676Z",
//         "updatedAt": "2026-02-11T21:35:02.347Z",
//         "__v": 0,
//         "reviews": [],
//         "id": "6428de2adc1175abc65ca05b"