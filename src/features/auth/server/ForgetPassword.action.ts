'use server'

import axios, { AxiosRequestConfig } from "axios"

export default async function ForgetPassword(email: string) {
    try {
        const options: AxiosRequestConfig = {
            method: 'POST',
            url: 'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
            data: { 
                email
            }
        }
        const {data} = await axios.request(options)
        return data
    } catch (error: any) {
        throw error
    }
}

export async function verifyCode(resetCode: string) {
    try {
        const options: AxiosRequestConfig = {
            method: 'POST',
            url: 'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
            data: { 
                resetCode
            }
        }
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        throw error
    }
}