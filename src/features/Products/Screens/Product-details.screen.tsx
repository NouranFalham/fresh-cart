import ProductInfo from "../Components/ProductDetails/ProductInfo"
import { getProductById } from "../Server/Products.action"

export default async function ProductDetailsScreen({productId}:{productId:string}) {
    const response = await getProductById({id:productId})
    return (
        <>
            <ProductInfo product={response.data}/>
        </>
    )
}
