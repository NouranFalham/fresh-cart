"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBoxOpen,
    faStar,
    faTruckFast,
    } from "@fortawesome/free-solid-svg-icons";
import ProductsDetailsTab from "../components/ProductsDetailsTab";
import ReviewsTab from "../components/ReviewsTab";
import ShippingReturnsTab from "../components/ShippingReturns";
import { Product } from "@/features/Products/Types/Products.types";

    type TabType = "details" | "reviews" | "shipping";

    export default function ProductTabsScreen({ product }: { product: Product }) {
    const [activeTab, setActiveTab] = useState<TabType>("details");

    const tabs = [
        {
        id: "details",
        label: "Product Details",
        icon: faBoxOpen,
        },
        {
        id: "reviews",
        label: "Reviews (5)",
        icon: faStar,
        },
        {
        id: "shipping",
        label: "Shipping & Returns",
        icon: faTruckFast,
        },
    ];

    return (
        <div className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm">

        {/* ================= TAB HEADER ================= */}
        <div className="flex flex-wrap items-center border-b border-gray-100">

            {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
                <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`relative flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-200
                    ${
                    isActive
                        ? "text-emerald-600"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                >
                <FontAwesomeIcon icon={tab.icon} />
                {tab.label}

                {/* Active Underline */}
                {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-emerald-600 rounded-full"></span>
                )}
                </button>
            );
            })}
        </div>

        {/* ================= TAB CONTENT ================= */}
        <div className="p-6 sm:p-8">
            {activeTab === "details" && <ProductsDetailsTab product={product} />}
            {activeTab === "reviews" && <ReviewsTab product={product} />}
            {activeTab === "shipping" && <ShippingReturnsTab />}
        </div>
        </div>
    );
}