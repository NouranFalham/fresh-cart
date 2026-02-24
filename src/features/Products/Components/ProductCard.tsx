"use client"
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Product } from "../Types/Products.types";
import Ratings from "@/components/ui/Ratings";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addProductToWishlist, getLoggedUserWishlist } from "@/features/wishlist/server/Wishlist.action";
import { setWishlistInfo } from "@/features/wishlist/store/Wishlist.slice";
import { useAddToCart } from "@/features/cart/hooks/useAddToCart";


export default function ProductCard({info}: {info:Product}) {

    const dispatch = useDispatch()
    const { addToCart, isLoading } = useAddToCart();
    const [isAdded, setIsAdded] = useState(false);
    


    const {id, imageCover,price, priceAfterDiscount, ratingsAverage , title, category, ratingsQuantity} = info
    const onSale = priceAfterDiscount ? price > priceAfterDiscount : false
    const discountPercentage = priceAfterDiscount? Math.round((price - priceAfterDiscount)/price * 100) : null

    const handleAddToCart = async () => {
    if (isAdded) return;

    const success = await addToCart(id);

    if (success) {
        setIsAdded(true);
    }
    };

    const handleAddToWishlist  = async ()=> {
        try {
            const response = await addProductToWishlist({productId:id})
            // console.log(response);
            if(response.status === 'success'){
            toast.success (response.message)}
            const wishlistInfo =await getLoggedUserWishlist()
            dispatch(setWishlistInfo(wishlistInfo))
        } catch (error) {
            toast.error("Failed to add to wishlist");
        } 
    }
    return (
        <>
            <div 
                id="product-card"
                className="bg-white border h-[430px] border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition flex flex-col flex-grow"
                >
                    <div className="relative flex-shrink-0">
                        <img src={imageCover} alt={title}
                        className="w-full h-60 object-contain bg-white"
                        />
                        <div className="absolute top-3 left-3">
                            {onSale && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                                -{discountPercentage}%
                            </span>}
                        </div>
                        <div className="absolute top-3 right-3 flex flex-col space-y-2">
                            <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-green-500"
                            onClick={handleAddToWishlist}>
                                <FontAwesomeIcon icon={faHeart}/>
                            </button>

                            <Link
                                href={`/products/${id}`}
                                className="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-green-500">
                                    <FontAwesomeIcon icon={faEye}/>
                            </Link>
                        </div>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                        <div className="text-xs text-gray-500 mb-1">{category.name}</div>
                        <h3 className="font-medium mb-1 cursor-pointer">
                            <Link className="line-clamp-2" href={`/products/${id}`}>
                                {title}
                            </Link>
                        </h3>
                        <div className="flex items-center mb-2">
                            <div className="flex text-amber-400 mr-2">
                                <Ratings rating={ratingsAverage}/>
                            </div>
                            <span className="text-xs text-gray-500">{ratingsAverage} {ratingsQuantity} reviews</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                            {
                                priceAfterDiscount? <> <span className="text-lg font-bold text-green-500">{priceAfterDiscount} EGP</span>
                                <span className="line-through text-sm ml-2 text-gray-500">{price} EGP</span></>: <>
                                <span className="text-lg font-bold text-green-500">{price} EGP</span>
                                </>
                            }
                            </div>
                            <button
                                onClick={handleAddToCart}
                                disabled={isLoading || isAdded}
                                className={`h-10 w-10 rounded-full flex items-center justify-center text-white transition duration-200
                                    ${
                                        isLoading || isAdded
                                            ? "bg-green-500/50 cursor-not-allowed"
                                            : "bg-green-500 hover:bg-green-600"
                                    }`}
                            >
                                {isLoading ? (
                                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                ) : (
                                    <FontAwesomeIcon icon={faPlus} />
                                )}
                            </button>
                        </div>
                    </div>
            </div>
        </>
    )
}
