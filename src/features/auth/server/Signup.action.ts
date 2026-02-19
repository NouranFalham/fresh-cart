"use server"
import { email, success } from "zod";
import { SignUpFormValues, signupSchema } from "../schema/signup.schema";
import axios, {AxiosError, AxiosRequestConfig} from 'axios'

export default async function signupAction(values:SignUpFormValues){
    const validationResult = signupSchema.safeParse(values);
    if(!validationResult.success){
        const errors: Record<string , string> ={}
        if(validationResult.error){
            validationResult.error.issues.forEach((issue)=>{
                const field = issue.path[0] as string
                const message = issue.message

                if(!errors[field]){
                    errors[field] = message
                }
            })
        }

        return {
            success: false,
            message: "Validation errors",
            errors
        }
    }
    
    const {terms , ...requestBody} = values
    try {
        const options:AxiosRequestConfig = {
            url: 'https://ecommerce.routemisr.com/api/v1/auth/signup',
            method: 'POST',
            data: requestBody   
        }
        const {data} = await axios.request(options);
        if(data.message === 'success'){
            // console.log(data);
            
            return {
                success: true,
                message: 'Account created successfully',
                data
            }
        }
        return {
            success:false,
            message: data.message || 'Signup Failed'
        }
    } catch (error) {
        if(error instanceof AxiosError){
            const errorMessage = error.response?.data.message
            if(errorMessage ==="Account Already Exists"){
                return{
                    success:false,
                    message:"Account exists",
                    errors:{
                        email:"An account with this email already exists"
                    }
                } 
            }

            return{
                success: false,
                message:"Something went wrong, please try again later"
            }
        }
    }
}


// validation Result === ERROR
// validationResult: {
    // success: false,
    // error: Error [ZodError]: [
    //   {
    //     "origin": "string",
    //     "code": "invalid_format",
    //     "format": "regex",
    //     "pattern": "/^(\\+2)?01[0125][0-9]{8}$/",
    //     "path": [
    //       "phone"
    //     ],
    //     "message": "Only Egyptian phone numbers are allowed"
    //   },
    //   {
    //     "code": "custom",
    //     "path": [],
    //     "message": "Password and confirm password must match"
    //   }
    // ]

    // validation Result === SUCCESS
//     validationResult: {
//     success: true,
//     data: {
//       name: 'نوران محمد كمال فلهم فرج',
//       email: 'nouranfalham4@gmail.com',
//       password: 'Nour123@',
//       rePassword: 'Nour123@',
//       phone: '+201273341204',
//       terms: true
//     }
//   }
// }


// --------------SIGNUP COMPLETE----------------

// {
//   message: 'success',
//   user: {
//     name: 'Nouran Mohamed',
//     email: 'nouranfalham400@gmail.com',
//     role: 'user'
//   },
//   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODBjNDkxMjIwYmU0ZGUyMjIzZmM1YyIsIm5hbWUiOiJOb3VyYW4gTW9oYW1lZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzcwMDQ2NjA5LCJleHAiOjE3Nzc4MjI2MDl9.77-0JMx7JS6Yfl0CGtT_6J-Mj5Rwgd4MTvSbDgr-WgE'
// }

// _________________ERROR MESSAGE_____________
// {
//     "statusMsg": "fail",
//     "message": "Account Already Exists"
// }
