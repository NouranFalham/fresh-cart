"use server"
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { loginFormValues, loginSchema } from "../schema/login.schema";

export default async function loginAction(values:loginFormValues){
    const validationResult = loginSchema.safeParse(values);

    if(!validationResult.success){
        const errors:Record<string,string> ={}

        validationResult.error.issues.forEach((issue)=>{
            const key = issue.path[0] as string
            const message = issue.message

            if(!errors[key]){
                errors[key] = message
            }
        })

        return {
            success: false,
            message: 'validation errors',
            errors
        }
    }

    try {
        const {rememberMe, ...requestData} = values
        const options:AxiosRequestConfig ={
            url:'https://ecommerce.routemisr.com/api/v1/auth/signin',
            method: 'POST',
            data: requestData
        }
        const {data} = await axios.request(options);

        if(data.message === "success"){
            return{
                success: true,
                message: 'Welcome Back',
                data
            }
        }
        
        return {
            success: false,
            message: 'Login failed'
        }
    } catch (error) {
        if(error instanceof AxiosError){
            const errorMessage = error.response?.data.message;
            if(errorMessage === "Incorrect email or password"){
                return {
                    success: false,
                    message: 'Wrong email or password',
                    errors: {
                        password: 'Incorrect email or password'
                    }
                }
            }
        }
        return {
            success: false,
            message: 'Login failed'
        }
    }
}
// data response.data
// {
//     "message": "success",
//     "user": {
//         "name": "nouran",
//         "email": "nouran2@gmail.com",
//         "role": "user"
//     },
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2I1ZjI5ODAzZTg4OGUwNTJhZDIxMCIsIm5hbWUiOiJBaG1lZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzcwMzQ3MTkzLCJleHAiOjE3NzgxMjMxOTN9.hZvR8fyfm1zJKcH5Tck6xvauwCTVHAZc6hhezNHd8YA"
// }

// Error
// {
//     "statusMsg": "fail",
//     "message": "Incorrect email or password"
// }