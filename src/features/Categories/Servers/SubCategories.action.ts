import axios, { AxiosRequestConfig } from "axios";
import { CategoriesResponse } from "../Types/Categories.types";

export async function getSubCategoryDetails({id}:{id:string}):Promise<CategoriesResponse>{
    try {
        const options:AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`,
            method: 'GET'
        }
        const {data} = await axios.request(options);
        return data;
    } catch (error) {
        throw error
    }
}