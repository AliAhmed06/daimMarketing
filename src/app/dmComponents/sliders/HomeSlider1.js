"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay } from "swiper";

// import icons
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";


// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";
import Link from "next/link";

export default function HomeSlider1() {
    const [myIndex, setMyIndex] = useState(0);
    const sliderRef = useRef();
  
    useEffect(() => {
      sliderRef.current.swiper.slideTo(myIndex);
    }, [myIndex]);
    
    function prevSlide(){
        if(myIndex > 0){
            setMyIndex(myIndex - 1);
        }
    }

    function nextSlide(){
        if(myIndex < 7){
            setMyIndex(myIndex + 1);
        }
    }

    return (
    <div>       
        <div className="h-[400px] w-full relative
                        md:h-[500px] lg:h-[700px]">
            <div className="absolute h-full w-[95%] flex items-center justify-start z-10
                            md:w-[40%]">
                <div className="h-full w-[65%] bg-white bg-opacity-70">

                </div>
                <div className="h-[400px] w-[400px] bg-black ml-[-200px] p-16 text-white">
                    <h2 className="text-4xl font-semibold">Discover Our New Selection Properties</h2>
                    <p className="text-md mt-5 mb-10">CHOOSE FROM DIFFERENT LISTING TYPE, SIZE AND VIEW. </p>
                    <Link href="/contact" className=" py-3 px-8 rounded-md border border-white hover:scale-110 hover:bg-white hover:text-black transition">Contact Us</Link>
                </div>

            </div>
            <Swiper
                ref={sliderRef}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                }}
                modules={[Autoplay]}
                className="h-full w-full bg-white"                
            >        
               
                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center">                        
                        <img 
                            src="/images/dsa/sliders/home3/Hospital.jpg" 
                            alt="" 
                            className="w-full h-full object-cover object-center " 
                        />                        
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center">                        
                        <img 
                            src="/images/dsa/sliders/home3/parks.jpg" 
                            alt="" 
                            className="w-full h-full object-cover object-center " 
                        />                        
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    </div>
  );
}
