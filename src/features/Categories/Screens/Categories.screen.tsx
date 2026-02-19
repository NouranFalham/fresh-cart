import Link from "next/link";
import { getAllCategories } from "../Servers/Categories.action";
import CategoryCard from "../Components/CategoryCard";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default async function CategoriesScreen() {

    const response = await getAllCategories()
    const {data} = response

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">

        {/* HERO */}
        <section className="relative w-full py-10 px-6 md:px-20 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 text-white overflow-hidden">

    {/* Soft Glow Background */}
    <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -top-32 -right-20" />

    <div className="relative z-10 max-w-6xl mx-auto flex items-center gap-8">

        {/* Icon Container */}
        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-3xl 
                        bg-white/20 backdrop-blur-md 
                        flex items-center justify-center 
                        text-3xl md:text-4xl 
                        shadow-xl border border-white/20">
        <FontAwesomeIcon icon={faLayerGroup} />
        </div>

        {/* Text Content */}
        <div>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm opacity-90 mb-4">
            <Link href="/" className="hover:underline">
            Home
            </Link>
            <span>/</span>
            <Link href="/categories" className="hover:underline">
            Categories
            </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Discover Our Categories
        </h1>

        <p className="text-lg opacity-90 max-w-xl">
            Explore curated collections across music, fashion, grocery,
            lifestyle and more.
        </p>
        </div>

    </div>
    </section>


        {/* GRID */}
        <section className="px-8 md:px-20 py-20">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {data.map((category, index) => (
                <Link href={`/categories/${category._id}`}>
                    <CategoryCard info={category} key={index}/>
                </Link>
            ))}
            </div>
        </section>
        </div>
    );
}

