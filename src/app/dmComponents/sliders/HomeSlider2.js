"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function HomeSlider2() {
    const [myIndex, setMyIndex] = useState(0);
    const sliderRef = useRef();
  
    useEffect(() => {
      sliderRef.current.swiper.slideTo(myIndex);
    }, [myIndex]);
    
    return (
    <div>       
        <div className="h-[400px] w-full relative
                        md:h-[500px] lg:h-[500px]">           
            <Swiper
                ref={sliderRef}
                breakpoints={{
                    1024: { slidesPerView: 3},
                }}
                slidesPerView={1}                
                spaceBetween={10}                
                navigation={true} 
                modules={[Navigation]}
                className="h-full w-full bg-transparent"                
            >        
               
                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center">                        
                        <img 
                            src="/images/dayimMarketing/agents/team1.png" 
                            alt="" 
                            className="w-full h-full object-cover object-top " 
                        /> 
                        <h3 className="text-xl text-gray mb-5">Name</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center">                        
                        <img 
                            src="/images/dayimMarketing/agents/team2.png" 
                            alt="" 
                            className="w-full h-full object-cover object-top " 
                        />                        
                        <h3 className="text-xl text-gray mb-5">Name</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center">                        
                        <img 
                            src="/images/dayimMarketing/agents/team3.png" 
                            alt="" 
                            className="w-full h-full object-cover object-top " 
                        />                        
                        <h3 className="text-xl text-gray mb-5">Name</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center">                        
                        <img 
                            src="/images/dayimMarketing/agents/team4.png" 
                            alt="" 
                            className="w-full h-full object-cover object-top " 
                        />                        
                        <h3 className="text-xl text-gray mb-5">Name</h3>                       
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    </div>
  );
}
