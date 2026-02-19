import Image from "next/image";
import freshCartLogo from "../../assets/images/freshcart-logo.svg";
import freshCartMiniLogo from "../../assets/images/mini-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebookF, faInstagram, faPinterestP, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
    return (
        <>    
            <footer className="py-5 bg-white border-t border-gray-200 ">
                <div className="container">
                    <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4 py-5">
                    <div className="xl:col-span-2 space-y-3">
                        <Image src={freshCartLogo} alt="Fresh Cart Logo" />
                        <p>
                            FreshCart is a versatile e-commerce platform offering a wide range of products,
                            from clothing to electronics. It provides a user-friendly experience for 
                            seamless shopping across diverse categories.
                        </p>

                        <ul className="flex items-center gap-4 text-lg *:text-gray-500  *:hover:text-green-500 *:transition-colors *:duration-200">
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebookF}/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faPinterestP}/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-4 ">Categories</h2>
                        <ul className="space-y-3 *:hover:text-green-500 *:transition-colors duration-200">
                            <li>
                                <Link href=''>
                                    Men's Fashion
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    Women's Fashion
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    Baby & Toys
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    Beauty & Health
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    Electronics
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-4 ">Quick Links</h2>
                        <ul className="space-y-3 *:hover:text-green-500 *:transition-colors duration-200">
                            <li>
                                <Link href=''>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    Terms Of Services
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    Shipping Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-4 ">Customer Service</h2>
                        <ul className="space-y-3 *:hover:text-green-500 *:transition-colors duration-200">
                            <li>
                                <Link href=''>
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    My Orders
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    Wishlist
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    Returns & Refunds
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    Help Center
                                </Link>
                            </li>
                        </ul>
                    </div>

                    </div>
                <div className="flex justify-between items-center py-5 border-t border-gray-200">
                    <p>©copy: {new Date().getFullYear()} FreshCart. All rights reserved</p>
                    <Image src={freshCartMiniLogo} className="w-8" alt="Fresh Cart"/>
                </div>
                </div>
            </footer>
        </>
    )
}