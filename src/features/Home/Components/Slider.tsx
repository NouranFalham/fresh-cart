"use client";
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation , Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/pagination"
import sliderImg1 from "../../../assets/images/slider6.jpg"
import sliderImg2 from "../../../assets/images/slider2.jpg"
import sliderImg3 from "../../../assets/images/slider3.jpg"
import sliderImg4 from "../../../assets/images/slider5.jpg"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Slider() {
    return (
        <>
            <section className='relative'>
                <Swiper  
                modules={[Navigation, Pagination, Autoplay]} 
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next'
                }}
                pagination={{
                    clickable: true
                }}
                autoplay={{delay: 4000}}
                loop={true}>
                    <SwiperSlide>
                        <div 
                            style={{
                                backgroundImage: `url(${sliderImg1.src})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                            className={`h-115 flex items-center justify-center`}>
                                <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
                                    <div className="container h-full content-center">
                                        <h2 
                                        className='text-white text-4xl font-bold mb-4 max-w-96'>Welcome to FreshCart</h2>
                                        <p> Get 20% off your first order</p>

                                        <div className="mt-4">
                                            <Link 
                                            href={'/products'}
                                            className='btn bg-white hover:bg-white/90 border-2 border-white/50 text-green-500'>
                                                Shop Now
                                            </Link>
                                            <Link 
                                            href={'/deals'}
                                            className='btn bg-transparent hover:bg-white hover:text-green-500 border-2 border-white/50 text-white ml-2'>
                                                View Deals
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div 
                            style={{
                                backgroundImage: `url(${sliderImg2.src})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                            className={`h-115 flex items-center justify-center`}>
                                <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
                                    <div className="container h-full content-center">
                                        <h2 
                                        className='text-white text-4xl font-bold mb-4 max-w-96'>Fresh Products Delivered To Your Door</h2>
                                        <p> Discover The Freshest Groceries With Us</p>

                                        <div className="mt-4">
                                            <Link 
                                            href={'/products'}
                                            className='btn bg-white hover:bg-white/90 border-2 border-white/50 text-green-500'>
                                                Shop Now
                                            </Link>
                                            <Link 
                                            href={'/deals'}
                                            className='btn bg-transparent  hover:bg-white hover:text-green-500 border-2 border-white/50 text-white ml-2'>
                                                View Deals
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div 
                            style={{
                                backgroundImage: `url(${sliderImg3.src})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                            className={`h-115 flex items-center justify-center`}>
                                <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
                                    <div className="container h-full content-center">
                                        <h2 
                                        className='text-white text-4xl font-bold mb-4 max-w-96'> Latest Electronics & Smart Devices</h2>
                                        <p> Discover The Latest Smart Devices With Us</p>

                                        <div className="mt-4">
                                            <Link 
                                            href={'/products'}
                                            className='btn bg-white  hover:bg-white/90 border-2 border-white/50 text-green-500'>
                                                Shop Now
                                            </Link>
                                            <Link 
                                            href={'/deals'}
                                            className='btn bg-transparent  hover:bg-white hover:text-green-500 border-2 border-white/50 text-white ml-2'>
                                                View Deals
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div 
                            style={{
                                backgroundImage: `url(${sliderImg4.src})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                            className={`h-115 flex items-center justify-center`}>
                                <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
                                    <div className="container h-full content-center">
                                        <h2 
                                        className='text-white text-4xl font-bold mb-4 max-w-96'> Shop Our Latest Collection</h2>
                                        <p> Explore Our Newest Products And Exclusive Deals</p>

                                        <div className="mt-4">
                                            <Link 
                                            href={'/products'}
                                            className='btn bg-white  hover:bg-white/90 border-2 border-white/50 text-green-500'>
                                                Shop Now
                                            </Link>
                                            <Link 
                                            href={'/deals'}
                                            className='btn bg-transparent  hover:bg-white hover:text-green-500 border-2 border-white/50 text-white ml-2'>
                                                View Deals
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                </Swiper>

            <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white 
            size-12 rounded-full text-green-500 flex justify-center items-center  transition-colors ">
                <FontAwesomeIcon icon={faChevronLeft} className='text-xl'/>
            </button>
        
            <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white
            size-12 rounded-full text-green-500 flex justify-center items-center transition-colors ">
                <FontAwesomeIcon icon={faChevronRight} className='text-lg'/>
            </button>
        

            </section>
        </>
    )
}

import dynamic from "next/dynamic";

export default dynamic(() => Promise.resolve(Slider), {
    ssr: false,
});
