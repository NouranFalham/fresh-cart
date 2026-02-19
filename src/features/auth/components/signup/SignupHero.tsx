'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faStar, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import reviewAuthorImg from '@/assets/images/review-author.png';

export default function SignupHero() {
    return (
        <>
        <div className="hero space-y-7 pt-12">
            <div className="welcome-msg">
            <h2 className='text-4xl font-bold'>
                Welcome to <span className='text-green-600'>FreshCart</span>
            </h2>
            <p className='text-lg mt-2'>
                Join thousands of happy customers who enjoy fresh groceries
                delivered right to their doorstep.
            </p>
            </div>

            <div className="hero-list">
                <ul className='space-y-5 *:flex *:items-center *:gap-3'>
                    <li>
                        <div className="list-icon size-12 rounded-full bg-green-200 text-xl flex justify-center items-center text-green-600">
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className="content">
                            <h3 className='font-semibold'>Premium Quality</h3>
                            <p className='text-gray-600'>Premium quality products sourced from trusted suppliers.</p>
                        </div>
                    </li>
                    <li>
                        <div className="list-icon size-12 rounded-full bg-green-200 text-xl flex justify-center items-center text-green-600">
                            <FontAwesomeIcon icon={faTruckFast} />
                        </div>
                        <div className="content">
                            <h3 className='font-semibold'>Fast Delivery</h3>
                            <p className='text-gray-600'>Fast and reliable delivery to your doorstep.</p>
                        </div>
                    </li>
                    <li>
                        <div className="list-icon size-12 rounded-full bg-green-200 text-xl flex justify-center items-center text-green-600">
                            <FontAwesomeIcon icon={faShieldHalved} />
                        </div>
                        <div className="content">
                            <h3 className='font-semibold'>Secure Shopping</h3>
                            <p className='text-gray-600'>your data and payments are completely secure.</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="customer-review p-6 rounded-xl shadow-md">
                <div className='flex items-center gap-3'>
                    <Image src={reviewAuthorImg} className='size-12 rounded-full' alt="Customer Review Author" />
                    <div>
                        <h3>Sarah Johnson</h3>
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar} className='text-yellow-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-yellow-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-yellow-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-yellow-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-yellow-400'/>
                        </div>
                    </div>
                </div>
                <blockquote className='text-gray-700 italic'>
                    <p className='py-3'>“FreshCart has made grocery shopping so much easier. The quality of the products is outstanding and the delivery is always on time.”</p>
                </blockquote>
            </div>


        </div>
        </>
    );
}
