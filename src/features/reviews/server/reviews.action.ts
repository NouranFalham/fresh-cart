"use server"
import { CreateReviewResponse, ReviewResponse } from "@/features/Profile/types/reviews.type";
import axios, { AxiosRequestConfig } from "axios"
import { cookies } from "next/headers"

type CreateReviewParams = {
    id: string;
    values: ReviewResponse
}

export async function createReview({id , values}:CreateReviewParams):Promise<CreateReviewResponse> {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value || null

    if(!token){
        throw new Error("Authentication Error")
    }

    try {
        const options:AxiosRequestConfig= {
        url: `https://ecommerce.routemisr.com/api/v1/products/${id}/reviews`,
        method: 'POST',
        headers: {token , "Content-Type": "application/json"},
        data: values
    }
    const {data} = await axios.request(options)
    return data
    
    } catch (error) {
        throw error
    }
}