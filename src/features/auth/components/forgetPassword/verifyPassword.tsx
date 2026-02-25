"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { verifyCode } from "../../server/ForgetPassword.action";

export default function VerifyCodeForm({ email }: { email: string }) {

    const [codeDigits, setCodeDigits] = useState<string[]>(Array(6).fill(""));
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const resetCode = codeDigits.join("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const val = e.target.value;
        if (!/^\d?$/.test(val)) return; // Only allow one digit 0-9

        const newCode = [...codeDigits];
        newCode[i] = val;
        setCodeDigits(newCode);

        if (val && i < 5) {
        const nextInput = document.getElementById(`digit-${i + 1}`);
        nextInput?.focus();
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (resetCode.length < 6 || resetCode.includes("")) {
        setMessage("Please enter all 6 digits.");
        return;
        }
        setLoading(true);
        setMessage("");
        try {
        await verifyCode(resetCode);
        setMessage("Code verified! You can now reset your password.");
        // Redirect to reset password page if needed
        // router.push(`/reset-password?code=${resetCode}&email=${encodeURIComponent(email)}`);
        } catch (err: any) {
        setMessage(err?.response?.data?.message || "Verification failed. Please try again.");
        } finally {
        setLoading(false);
        }
    };

    return (
        <section className=" bg-white rounded-3xl p-10 shadow-lg">
        <h1 className="text-3xl font-extrabold text-center mb-1">
            <span className="text-green-600">Fresh</span>Cart
        </h1>
        <h2 className="text-xl font-semibold text-center mb-3">Check Your Email</h2>
        <p className="text-center text-gray-700 mb-8">
            Enter the 6-digit code sent to <span className="font-medium">{email}</span>
        </p>

        {/* Step Indicator */}
        <div className="flex justify-center items-center mb-10 space-x-6">
            <StepCircle filled={true} icon="check" />
            <StepLine filled={true} />
            <StepCircle filled={true} icon="key" />
            <StepLine filled={false} />
            <StepCircle filled={false} icon="lock" />
        </div>

        {/* Verification Code Inputs */}
        <form onSubmit={handleSubmit} className="flex justify-between space-x-3 mb-6">
        {codeDigits.map((digit, i) => (
            <input
                key={i}
                id={`digit-${i}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, i)}
                className="w-12 h-14 text-center text-xl font-semibold border border-gray-300 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                aria-label={`Digit ${i + 1}`}
            />
            ))}
        </form>
        {message && (
        <p className={`text-center mb-4 ${message.includes("failed") ? "text-red-600" : "text-green-600"}`}>
            {message}
        </p>)}

        {/* Resend code */}
        <p className="text-center text-sm text-gray-600 mb-8">
            Didn't receive the code?{" "}
            <Link href="#" className="text-green-600 font-semibold hover:underline">
            Resend Code
            </Link>
        </p>

        {/* Verify button */}
        <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg
            shadow-lg transition-transform duration-300 hover:scale-105"
        >
            Verify Code
        </button>

        {/* Change email link */}
        <div className="mt-6 text-center">
            <Link href="/forget-password" className="inline-flex items-center text-gray-600 hover:text-green-600">
            <svg
                className="w-5 h-5 mr-2 transform rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
            >
                <path d="M9 18l-6-6 6-6" />
                <path d="M15 6v12" />
            </svg>
            Change email address
            </Link>
        </div>
        </section>
    );
    }

    function StepCircle({ filled, icon }: { filled: boolean; icon: "check" | "key" | "lock" }) {
    let iconElement;
    switch (icon) {
        case "check":
        iconElement = (
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            >
            <path d="M20 6L9 17l-5-5" />
            </svg>
        );
        break;
        case "key":
        iconElement = (
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            >
            <path d="M18 8a6 6 0 1 0-8.49 8.49L2 18l3-3 2 2 4-4" />
            </svg>
        );
        break;
        case "lock":
        iconElement = (
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        );
        break;
    }

    return (
        <div
        className={`w-12 h-12 rounded-full flex items-center justify-center
            ${filled ? "bg-green-600 text-white shadow-lg" : "bg-gray-200 text-gray-400"}`}
        >
        {iconElement}
        </div>
    );
    }

    function StepLine({ filled }: { filled: boolean }) {
    return (
        <div
        className={`flex-1 h-1 rounded-full
            ${filled ? "bg-green-600" : "bg-gray-200"}`}
        ></div>
    );
}