"use client";
import {
    faBabyCarriage,
    faBars,
    faBolt,
    faCartShopping,
    faChevronDown,
    faEllipsis,
    faGift,
    faMagnifyingGlass,
    faPerson,
    faPersonDress,
    faPhone,
    faRightFromBracket,
    faSuitcaseMedical,
    faTruck,
    faUserPlus,
    faXmark,
    } from "@fortawesome/free-solid-svg-icons";
    import {
    faAddressCard,
    faEnvelope,
    faHeart,
    faUser,
    } from "@fortawesome/free-regular-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import Link from "next/link";
    import freshCartLogo from "../../assets/images/freshcart-logo.svg";
    import Image from "next/image";
    import { usePathname } from "next/navigation";
    import { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "@/store/store";
import useLogout from "@/features/auth/hooks/UseLogOut";

    export default function Navbar() {
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    function toggleAccount() {
    setIsAccountOpen(!isAccountOpen);
    }

    const {logout} = useLogout()
    const {isAuthenticated , userInfo} =useSelector((appState:AppState)=>appState.auth)
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

    function toggleMenu(){
        setIsMenuOpen(!isMenuOpen)
    }

    const {numOfCartItems} = useSelector((state:AppState)=> state.cart)
    const {count} = useSelector((state:AppState)=> state.wishlist)

    return (
        <>
        <div className="container">
            {/* Top Navbar */}
            <div className="hidden lg:flex text-sm items-center justify-between py-2 border-b border-gray-300/30">
            <ul className="flex gap-5 items-center *:flex *:gap-2 *:items-center">
                <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
                </li>
                <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:support@freshcart.com">support@freshcart.com</a>
                </li>
            </ul>

            <ul className="flex gap-5 items-center">
                <li>
                <Link href={"about"}>About</Link>
                </li>
                <li>
                <Link href={"contact"}>Contact</Link>
                </li>

                <li>
                <select>
                    <option>EGP</option>
                    <option>SAR</option>
                    <option>AED</option>
                </select>
                </li>

                <li>
                <select>
                    <option value="en">English</option>
                    <option value="ar">العربية</option>
                </select>
                </li>
            </ul>
            </div>
            {/* Main Navbar */}
            <nav className="flex justify-between items-center py-4">
            <h1>
                <Link href="/">
                <Image src={freshCartLogo} alt="Fresh Cart Logo" />
                </Link>
            </h1>

            <div className="relative hidden lg:block">
                <input
                type="text"
                placeholder="Search for products ..."
                className="form-control min-w-96"
                />
                <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-1 top-1/2 -translate-1/2"
                />
            </div>

            <ul className="hidden lg:flex gap-6 items-center">
                <li>
                <Link
                    href={"wishlist"}
                    className={`flex flex-col justify-center items-center gap-1 transition-colors duration-200 ${pathName === "/wishlist" ? "text-green-500" : " hover:text-green-500"}`}
                >
                    <div className="relative">
                        <FontAwesomeIcon className="text-lg" icon={faHeart} />
                        <span className="absolute left-3 top-0 -translate-y-1/2 size-4 flex justify-center items-center rounded-full bg-red-500 text-white text-xs">{count}</span>
                    </div>
                    <span className="text-xs">Wishlist</span>
                </Link>
                </li>
                <li>
                <Link
                    href={"cart"}
                    className={`flex flex-col justify-center items-center gap-1 transition-colors duration-200 ${pathName === "/cart" ? "text-green-500" : " hover:text-green-500"}`}
                >
                    <div className="relative">
                        <FontAwesomeIcon className="text-lg" icon={faCartShopping} />
                        <span className="absolute left-3 top-0 -translate-y-1/2 size-4 flex justify-center items-center rounded-full bg-green-500 text-white text-xs">{numOfCartItems}</span>
                    </div>
                    <span className="text-xs">Cart</span>
                </Link>
                </li>
                <li className="relative">
                    <button
                        onClick={toggleAccount}
                        className="flex flex-col justify-center items-center gap-1 hover:text-green-500 transition-colors duration-200"
                    >
                        <FontAwesomeIcon className="text-lg" icon={faUser} />
                        <span className="text-xs">{isAuthenticated && userInfo ? userInfo.name : "Account"}</span>
                    </button>

                    {isAccountOpen && (
                        <div className="absolute right-0 mt-3 w-56 bg-white shadow-lg rounded-xl p-4 z-50">
                        <ul className="space-y-3 text-sm">
                            <li>
                            <Link href="/profile" className="flex items-center gap-2 hover:text-green-500 transition-colors duration-200">
                                <FontAwesomeIcon icon={faUser} />
                                My Profile
                            </Link>
                            </li>

                            <li>
                            <Link href="/orders" className="flex items-center gap-2 hover:text-green-500 transition-colors duration-200">
                                <FontAwesomeIcon icon={faCartShopping} />
                                My Orders
                            </Link>
                            </li>

                            <li>
                            <Link href="/wishlist" className="flex items-center gap-2 hover:text-green-500 transition-colors duration-200">
                                <FontAwesomeIcon icon={faHeart} />
                                My Wishlist
                            </Link>
                            </li>

                            <li>
                            <Link href="/addresses" className="flex items-center gap-2 hover:text-green-500 transition-colors duration-200">
                                <FontAwesomeIcon icon={faAddressCard} />
                                Addresses
                            </Link>
                            </li>

                            <li>
                            <Link href="/settings" className="flex items-center gap-2 hover:text-green-500 transition-colors duration-200">
                                <FontAwesomeIcon icon={faUser} />
                                Settings
                            </Link>
                            </li>

                            <li className="border-t pt-3">
                            <button
                                onClick={logout}
                                className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors duration-200 w-full"
                            >
                                <FontAwesomeIcon icon={faRightFromBracket} />
                                Sign Out
                            </button>
                            </li>
                        </ul>
                        </div>
                    )}
                    </li>
                {
                    isAuthenticated? <><li onClick={logout} className="flex flex-col justify-center items-center gap-1 cursor-pointer hover:text-green-500 transition-colors duration-200">
                <FontAwesomeIcon className="text-lg" icon={faRightFromBracket} />
                <span className="text-xs">Log Out</span>
                </li></>: <><li>
                <Link
                    href={"signup"}
                    className={`flex flex-col justify-center items-center gap-1 transition-colors duration-200 ${pathName === "/signup" ? "text-green-500" : " hover:text-green-500"}`}
                >
                    <FontAwesomeIcon className="text-lg" icon={faUserPlus} />
                    <span className="text-xs">Sign Up</span>
                </Link>
                </li>
                <li>
                <Link
                    href={"login"}
                    className={`flex flex-col justify-center items-center gap-1 transition-colors duration-200 ${pathName === "/login" ? "text-green-500" : " hover:text-green-500"}`}
                >
                    <FontAwesomeIcon className="text-lg" icon={faAddressCard} />
                    <span className="text-xs">Log In</span>
                </Link>
                </li></>
                }
            </ul>

            <button className="lg:hidden btn bg-green-500 text-white" onClick={toggleMenu}>
                {isMenuOpen? <FontAwesomeIcon icon={faXmark} />: <FontAwesomeIcon icon={faBars} />}
            </button>
            </nav>
        </div>

        {/* Categories nav */}
        <nav className="bg-gray-50 py-4 hidden lg:flex items-center">
            <div className="container flex items-center justify-between ">
            <div className="flex gap-8 items-center ">
                <div className="relative group z-50">
                <button className="btn flex items-center gap-3 bg-green-500 text-white hover:bg-green-500/95">
                    <FontAwesomeIcon icon={faBars} />
                    <span>All Categories</span>
                    <FontAwesomeIcon
                    icon={faChevronDown}
                    className="group-hover:rotate-180 transition-transform duration-200"
                    />
                </button>
                <menu className="hidden group-hover:block bg-white absolute top-10 shadow-lg *:p-3 *:hover:bg-gray-200/50 rounded-lg divide-y-2 divide-gray-200">
                    <li>
                    <Link className="flex gap-2 items-center" href="">
                        <FontAwesomeIcon
                        className="text-green-500 text-lg"
                        icon={faPerson}
                        />
                        <span>Men's Fashion</span>
                    </Link>
                    </li>
                    <li>
                    <Link className="flex gap-2 items-center" href="">
                        <FontAwesomeIcon
                        className="text-green-500 text-lg"
                        icon={faPersonDress}
                        />
                        <span>Women's Fashion</span>
                    </Link>
                    </li>
                    <li>
                    <Link className="flex gap-2 items-center" href="">
                        <FontAwesomeIcon
                        className="text-green-500 text-lg"
                        icon={faBabyCarriage}
                        />
                        <span>Baby & Toys</span>
                    </Link>
                    </li>
                    <li>
                    <Link className="flex gap-2 items-center" href="">
                        <FontAwesomeIcon
                        className="text-green-500 text-lg"
                        icon={faSuitcaseMedical}
                        />
                        <span>Beauty & Health</span>
                    </Link>
                    </li>
                    <li>
                    <Link className="flex gap-2 items-center" href="">
                        <FontAwesomeIcon
                        className="text-green-500 text-lg"
                        icon={faBolt}
                        />
                        <span>Electronics</span>
                    </Link>
                    </li>
                    <li>
                    <Link className="flex gap-2 items-center" href={'/categories'}>
                        <FontAwesomeIcon
                        className="text-green-500 text-lg"
                        icon={faEllipsis}
                        />
                        <span>View All Categories</span>
                    </Link>
                    </li>
                </menu>
                </div>

                <ul className="flex gap-5">
                <li>
                    <Link
                    className={`${pathName === "/" ? "text-green-500" : " hover:text-green-500"}`}
                    href={"/"}
                    >
                    Home
                    </Link>
                </li>
                <li>
                    <Link
                    className={`${pathName === "/shop" ? "text-green-500" : " hover:text-green-500"}`}
                    href={"shop"}
                    >
                    Shop
                    </Link>
                </li>
                <li>
                    <Link
                    className={`${pathName === "brands" ? "text-green-500" : " hover:text-green-500"}`}
                    href={"brands"}
                    >
                    Brands
                    </Link>
                </li>
                </ul>
            </div>
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-1">
                <FontAwesomeIcon
                    icon={faTruck}
                    className="text-green-500 text-lg"
                />
                <p className="text-gray-700 text-sm ">
                    Free Shipping on Orders 500 EGP
                </p>
                </div>
                <div className="flex items-center gap-1">
                <FontAwesomeIcon
                    icon={faGift}
                    className="text-green-500 text-lg"
                />
                <p className="text-gray-700 text-sm ">New Arrivals Daily</p>
                </div>
            </div>
            </div>
        </nav>

        {/* OffCanvas */}
        {isMenuOpen && (
    <>
        {/* Overlay */}
        <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={toggleMenu}
        ></div>

        {/* Sidebar */}
        <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 p-5
        transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
            <Image src={freshCartLogo} alt="Fresh cart logo" className="w-32" />
            <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            >
            <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>

        {/* Search */}
        <div className="relative my-5">
            <input
            type="text"
            placeholder="Search for products..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10
            focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
        </div>

        {/* Main Menu */}
        <div>
            <h2 className="text-lg font-semibold mb-3">Main Menu</h2>
            <ul className="space-y-2">
            {/* Wishlist */}
            <li>
                <Link
                href="/wishlist"
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition
                ${
                    pathName === "/wishlist"
                    ? "bg-green-100 text-green-600"
                    : "hover:bg-gray-100"
                }`}
                >
                <div className="relative">
                    <FontAwesomeIcon icon={faHeart} />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                    {count}
                    </span>
                </div>
                <span>Wishlist</span>
                </Link>
            </li>

            {/* Cart */}
            <li>
                <Link
                href="/cart"
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition
                ${
                    pathName === "/cart"
                    ? "bg-green-100 text-green-600"
                    : "hover:bg-gray-100"
                }`}
                >
                <div className="relative">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">
                    {numOfCartItems}
                    </span>
                </div>
                <span>Cart</span>
                </Link>
            </li>

            {/* Profile */}
            <li>
                <Link
                href="/profile"
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition
                ${
                    pathName === "/profile"
                    ? "bg-green-100 text-green-600"
                    : "hover:bg-gray-100"
                }`}
                >
                <FontAwesomeIcon icon={faUser} />
                <span>
                    {isAuthenticated && userInfo
                    ? userInfo.name
                    : "Account"}
                </span>
                </Link>
            </li>
            </ul>
        </div>

        {/* Account Section */}
        <div className="border-t mt-6 pt-6">
            <h2 className="text-lg font-semibold mb-3">Account</h2>
            <ul className="space-y-2">
            {isAuthenticated ? (
                <li
                onClick={logout}
                className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
                >
                <FontAwesomeIcon icon={faRightFromBracket} />
                <span>Log Out</span>
                </li>
            ) : (
                <>
                <li>
                    <Link
                    href="/signup"
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition"
                    >
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Sign Up</span>
                    </Link>
                </li>
                <li>
                    <Link
                    href="/login"
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition"
                    >
                    <FontAwesomeIcon icon={faAddressCard} />
                    <span>Log In</span>
                    </Link>
                </li>
                </>
            )}
            </ul>
        </div>
        </div>
    </>
    )}

        </>
    );
}
