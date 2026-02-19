"use client"
import { faArrowLeft, faBox, faReceipt, faShieldAlt, faShoppingBag, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { shippingAddressSchema, shippingAddressValues } from "../Schema/Checkout.schema";
import ShippingForm from "../components/ShippingForm";
import PaymentMethods from "../components/PaymentMethods";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/store/store";
import { createOnlineOrder, createOrderCash } from "../server/Checkout.action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { clearCart } from "@/features/cart/store/Cart.slice";

export default function CheckoutScreen() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [paymentMethod , setPaymentMethod]= useState<'cash' | 'card'>('cash')
    const {cartId} = useSelector((state:AppState)=> state.cart)

    const {register , handleSubmit, reset , formState: {errors}} = useForm({
        defaultValues: {
            details: '',
            phone: '',
            city: ''
        },

        resolver: zodResolver(shippingAddressSchema),
        
    })

    const onSubmit:SubmitHandler<shippingAddressValues> = async(values)=>{
        try {
            if(!cartId){
                return;
            }
            if(paymentMethod === 'cash'){
                const response = await createOrderCash({cartId , shippingAddress:values})
                console.log(response);
                if(response.status === 'success'){
                    dispatch(clearCart())
                    toast.success('Order created successfully')
                    reset()
                    setTimeout(()=>{
                        router.push('/orders')
                    },3000)
                }
                
            }
            else {
                const response = await createOnlineOrder({cartId , shippingAddress:values, url:location.origin})
                console.log(response);
                if(response.status === 'success'){
                    dispatch(clearCart())
                    toast.loading('Redirecting to payment gateway...')
                    setTimeout(()=>{location.href = response.session.url},3000)
                }
            }
        } catch (error) {
            
        }
        
    }


    return (
        <>
            <div className="bg-linear-to-b from-gray-50 to-white min-h-screen py-8">
                <div className="container mx-auto px-4">
                    {/* Checkout Progress */}
                    <div className="mb-8">
                        {/* BreadCrumb */}
                        <nav className="text-sm flex items-center gap-2 mb-6 text-gray-500">
                            <Link
                            href={"/"}
                            className="hover:text-green-500 transition duration-150">
                                Home
                            </Link>
                            <span className="text-gray-300">/</span>
                            <Link
                            href={"/cart"}
                            className="hover:text-green-500 transition duration-150">
                                Cart
                            </Link>
                            <span className="text-gray-300">/</span>
                            <span className="text-gray-900 font-medium">Checkout</span>
                        </nav>
                        {/* Page Header */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                                    <span className="bg-linear-to-b from-green-500 to-green-600 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                                        <FontAwesomeIcon icon={faReceipt}/>
                                    </span>
                                    Complete Your Order
                                </h1>
                                <p className="text-gray-500 mt-2">
                                    Review your items and complete your purchase
                                </p>
                            </div>
                            <Link
                            href={'/cart'}
                            className="text-green-500 hover:text-green-600 font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-50 transition-all duration-150">
                                <FontAwesomeIcon icon={faArrowLeft}/>
                                Back to cart
                            </Link>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left Column Form */}
                            <div className="lg:col-span-2 space-y-6">
                                <ShippingForm register={register} errors={errors}/>
                                <PaymentMethods selectedMethod={paymentMethod} changeMethod={setPaymentMethod}/>
                            </div>
                            {/* Right Column Order Summary */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4">
                                    {/* Header */}
                                    <div className="bg-linear-to-r from-green-500 to-green-600 px-6 py-4">
                                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                            <FontAwesomeIcon icon={faShoppingBag}/>
                                            Order Summary
                                        </h2>
                                        <p className="text-green-100 text-sm mt-1">
                                            {/*  */}
                                        </p>
                                    </div>
                                    <div className="p-5">
                                        {/* Cart items review */}
                                        <div className="space-y-3 max-h-56 overflow-y-auto mb-5 pr-1">
                                            {/*  */}
                                        </div>
                                        <hr className="border-gray-100 my-4"/>

                                        {/* Price */}
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-gray-600">
                                                <span>Subtotal</span>
                                                <span className="font-medium">500 EGP</span>
                                            </div>
                                            <div className="flex justify-between text-gray-600">
                                                <span className="flex items-center gap-2">
                                                    <FontAwesomeIcon icon={faTruck} className="text-gray-400"/>
                                                    Shipping
                                                </span>
                                                {true ? (
                                                    <span className="text-green-500 font-semibold">Free</span>
                                                ): (
                                                    <span className="font-medium">100 EGP</span>
                                                )}
                                            </div>
                                            <hr className="border-gray-100"/>
                                            <div className="flex items-center justify-between">
                                                <span className="text-lg font-bold text-gray-900">
                                                    Total
                                                </span>
                                                <div className="text-right">
                                                    <span className="text-2xl font-bold text-green-500">
                                                        Total
                                                    </span>
                                                    <span className="text-sm text-gray-500 ml-1">
                                                        EGP
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Submit button */}
                                        <button className="w-full mt-6 bg-linear-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 active:scale-[0.98]">
                                                <FontAwesomeIcon icon={faShieldAlt}/>
                                                Proceed to Payment
                                        </button>
                                        {/* Trust Badges */}
                                        <div className="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100">
                                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                                <FontAwesomeIcon icon={faShieldAlt} className="text-green-500"/>
                                                <span>Secure</span>
                                            </div>
                                        <div className="w-px h-4 bg-gray-200 "></div>
                                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                            <FontAwesomeIcon icon={faTruck} className="text-blue-500"/>
                                            <span>Fast Delivery</span>
                                        </div>
                                        <div className="w-px h-4 bg-gray-200 "></div>
                                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                            <FontAwesomeIcon icon={faBox} className="text-orange-500"/>
                                            <span>Easy Returns</span>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
