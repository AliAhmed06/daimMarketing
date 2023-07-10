"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import icons
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";


// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";
import Link from "next/link";

export default function VRSLider1() {
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
        if(myIndex < 1){
            setMyIndex(myIndex + 1);
        }
    }

    return (
    <div className="w-full">        
        <div className="h-[300px] w-full
                        md:h-[400px] md:mt-[0px]">
            <Swiper
                ref={sliderRef}  
                breakpoints={{
                    1024: { slidesPerView: 2},
                }}
                slidesPerView={1}
                spaceBetween={40}
                className="h-full w-full bg-transparent"
            >        
                <SwiperSlide >
                    <div className="w-[80%] mx-auto h-[240px] flex flex-col items-center justify-center">
                        <img src="/images/dsa/vr-icon.svg" className='absolute  object-contain h-[30px]  ' />
                        <Link href="/dayim-signature-apartments/vr/studio">
                            <img 
                                src="/images/dsa/vr/studio/2.png" 
                                alt="" 
                                className="w-[100%] h-[100%] object-cover" 
                            />
                        </Link>  
                        <h3 className="text-center text-white text-lg font-bold mt-5">Studio Apartments</h3>                      
                    </div>
                </SwiperSlide>

                

                <SwiperSlide >
                    <div className="w-[80%] h-[200px]  mx-auto flex flex-col items-center justify-center ">
                        <img src="/images/dsa/vr-icon.svg" className='absolute  object-contain h-[30px]  ' />
                        <Link href="/dayim-signature-apartments/vr/one-bed">
                            <img 
                                src="/images/dsa/vr/one_bed/5.jpg" 
                                alt="" 
                                className="w-[100%] h-[100%] object-cover" 
                            />
                        </Link>  
                        <h3 className="text-center text-white text-lg font-bold mt-5">One Bed Apartments</h3>                      
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>

        <div className="flex items-center justify-center 
                        md:gap-5 lg:hidden">
            <IoIosArrowRoundBack 
                className={`text-6xl cursor-pointer ${myIndex == 0 ? 'text-gray' : 'text-second'}`} 
                onClick={prevSlide}
            />
            <IoIosArrowRoundForward 
                className={`text-6xl cursor-pointer ${myIndex == 1 ? 'text-gray' : 'text-second'}`} 
                onClick={nextSlide}
            />
        </div>
    </div>
  );
}
