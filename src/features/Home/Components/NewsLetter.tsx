"use client";

    import { useEffect, useRef, useState } from "react";
    import {
    faEnvelope,
    faGift,
    faBolt,
    faPercent,
    } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

    export default function Newsletter() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    // 🔥 Scroll animation trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            }
        },
        { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setSubscribed(true);
        setEmail("");
    };

    return (
        <section ref={sectionRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div
            className={`relative bg-white rounded-3xl shadow-xl overflow-hidden p-10 md:p-16 transition-all duration-1000 ${
                isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
            >
            {/* Decorative Background Accent */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative grid md:grid-cols-2 gap-12 items-center">
                {/* LEFT SIDE */}
                <div className="space-y-6">
                <div className="flex items-center gap-3 text-emerald-600 font-medium">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Stay Updated</span>
                </div>

                <h2 className="text-4xl font-bold text-gray-800 leading-snug">
                    Subscribe & Get{" "}
                    <span className="text-emerald-600">20% Off</span>
                    <br /> Your First Order
                </h2>

                <p className="text-gray-500 max-w-md">
                    Join thousands of happy customers receiving weekly offers,
                    flash sales, and fresh arrivals.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                    />

                    <button
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
                    >
                    Subscribe
                    </button>
                </form>

                {subscribed && (
                    <p className="text-sm text-emerald-600">
                    🎉 You're now subscribed!
                    </p>
                )}
                </div>

                {/* RIGHT SIDE FEATURES */}
                <div
                className={`space-y-4 transition-all duration-1000 delay-300 ${
                    isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
                >
                {[
                    {
                    icon: faGift,
                    title: "Exclusive Offers",
                    },
                    {
                    icon: faPercent,
                    title: "Member Discounts",
                    },
                    {
                    icon: faBolt,
                    title: "Early Flash Sales",
                    },
                ].map((item, index) => (
                    <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-emerald-50 transition"
                    >
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <span className="font-medium text-gray-700">
                        {item.title}
                    </span>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

