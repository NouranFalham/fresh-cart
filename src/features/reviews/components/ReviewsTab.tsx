"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faPen,
    faThumbsUp,
    faQuoteLeft,
    faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function ReviewsTab() {
    return (
        <div className="w-full bg-white rounded-3xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-10">

        <div className="grid lg:grid-cols-3 gap-10 items-center">

            {/* Rating Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-10 text-white shadow-xl">

            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
                <h2 className="text-6xl font-bold tracking-tight">4.8</h2>

                <div className="flex text-yellow-300 mt-4 text-lg">
                {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                ))}
                </div>

                <p className="mt-3 text-sm text-emerald-100">
                Based on 13 verified reviews
                </p>

                <button className="mt-7 bg-white text-emerald-700 hover:bg-gray-100 transition-all duration-200 px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md">
                <FontAwesomeIcon icon={faPen} />
                Write a Review
                </button>
            </div>
            </div>

            {/* Rating Distribution */}
            <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-8">
                Rating Distribution
            </h3>

            <div className="space-y-5">

                {[
                { star: 5, width: "85%", count: 10 },
                { star: 4, width: "30%", count: 3 },
                { star: 3, width: "0%", count: 0 },
                { star: 2, width: "0%", count: 0 },
                { star: 1, width: "0%", count: 0 },
                ].map((item) => (
                <div key={item.star} className="flex items-center gap-6">

                    <div className="flex items-center gap-1 w-14 text-sm font-medium text-gray-700">
                    {item.star}
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                    </div>

                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500"
                        style={{ width: item.width }}
                    />
                    </div>

                    <div className="w-10 text-sm text-gray-500 text-right">
                    {item.count}
                    </div>

                </div>
                ))}

            </div>
            </div>
        </div>
        <div className="my-14 border-t border-gray-100"></div>

        {/* ================= HEADER ================= */}
        <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900">
            Customer Reviews
            </h3>
            <span className="text-sm text-gray-500">
            Showing 13 reviews
            </span>
        </div>

        {/* ================= REVIEW CARD ================= */}
        <div className="space-y-5">

            <div className="p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300">

            <div className="flex flex-col sm:flex-row gap-6">

                {/* Avatar */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold text-lg sm:text-xl shadow-md shrink-0">
                </div>

                {/* Content */}
                <div className="flex-1">

                {/* Top Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                    <div>
                    <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                        Ibrahim
                    </h4>

                    <div className="flex items-center gap-3 mt-1 flex-wrap">
                        <div className="flex text-yellow-400 text-sm">
                        {[...Array(5)].map((_, i) => (
                            <FontAwesomeIcon key={i} icon={faStar} />
                        ))}
                        </div>

                        <span className="text-xs sm:text-sm text-gray-400">
                        Feb 24, 2026
                        </span>
                    </div>
                    </div>

                    {/* Verified Badge */}
                    <div className="flex items-center gap-2 text-emerald-600 text-xs font-medium bg-emerald-50 px-3 py-1 rounded-full w-fit">
                    <FontAwesomeIcon icon={faCircleCheck} />
                    Verified Purchase
                    </div>
                </div>

                {/* Review Text */}
                <div className="mt-2">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Nice product, high quality and fast delivery.
                    The fabric feels premium and fits perfectly.
                    Highly recommended for everyday wear.
                    </p>
                </div>

                {/* Actions */}
                <div className="mt-2">
                    <button className="flex items-center gap-2 text-xs sm:text-sm bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg text-gray-600 transition">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    Helpful (3)
                    </button>
                </div>

                </div>
            </div>
            </div>
        </div>
        </div>
    );
};
