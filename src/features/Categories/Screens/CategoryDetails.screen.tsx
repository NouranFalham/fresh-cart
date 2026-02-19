import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { getCategoryDetails } from "../Servers/Categories.action";
import { getSubCategoryDetails } from "../Servers/SubCategories.action";
import CategoryDetailsCard from "../Components/CategoryDetailsCards";

export default async function CategoryDetailsScreen({id}:{id:string}) {

    const response = await getCategoryDetails({id})
    const category = response.data

    const subcategories = await getSubCategoryDetails({id})
    const {data} = subcategories

    return (
        <div className="min-h-screen bg-gray-100">
        
        {/* ================= HEADER ================= */}
        <div className="py-5 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-10">
            
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-emerald-100 mb-6">
                
                <Link
                href="/"
                className="hover:text-white hover:underline transition"
                >
                Home
                </Link>

                <span className="mx-3 text-emerald-200">/</span>

                <Link
                href="/categories"
                className="hover:text-white hover:underline transition"
                >
                Categories
                </Link>

                <span className="mx-3 text-emerald-200">/</span>

                <span className="text-white font-semibold">
                {category.name}
                </span>
            </div>

            {/* Title Section */}
            <div className="flex items-center gap-5">
                
                {/* Avatar */}
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Image
                    src={category.image}
                    alt={category.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                />
                </div>

                {/* Title + Subtitle */}
                <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    {category.name}
                </h1>
                <p className="text-emerald-100 mt-2 text-lg">
                    Choose a subcategory to browse products
                </p>
                </div>
            </div>

            </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="max-w-7xl mx-auto px-6 py-10">
            
            {/* Back Button */}
            <Link
            href="/categories"
            className="inline-flex items-center text-gray-600 hover:text-emerald-600 font-medium mb-8 transition"
            >
            <FontAwesomeIcon icon={faArrowLeftLong} className="mr-3" />
            Back to Categories
            </Link>

            {/* Subcategories Header */}
            <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
                Subcategories
            </h2>

            <span className="bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-1 rounded-full">
                2 Available
            </span>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {}
            </div>

        </div>
        </div>
    );
}
