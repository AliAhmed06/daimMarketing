"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function SliderComponent() {
  
  const [myIndex, setMyIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    sliderRef.current.swiper.slideTo(myIndex);
  }, [myIndex]);
  
  return (
        <div className="flex flex-col h-[450px] items-center justify-center gap-5
                        lg:flex-row lg:px-[150px] md:h-[600px]">
            <Swiper
              ref={sliderRef}
               style={{
                "--swiper-pagination-color": "#FFBA08",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "40px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
                "--swiper-pagination-bullet-vertical-gap": "6px",
                "--swiper-pagination-right": "-20px",
              }}
                direction={"vertical"}
                pagination={{
                    clickable: true,                
                }}
                modules={[Pagination]}
                className="h-full w-[90%] 
                            md:w-[70%]"
            >
                <SwiperSlide>
                    <img
                        className="w-full h-full object-cover"
                        src="/images/dsa/vr/one_bed/5.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide ali="ye cheez">
                    <img
                        className="object-cover w-full h-full"
                        src="/images/dsa/vr/studio/2.png"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-cover w-full h-full"
                        src="/images/dsa/office.jpeg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
            <div className="flex flex-col gap-2 
                            lg:gap-10 md:gap-5" >
              <Link href="/dayim-signature-apartments/residences" className="cursor-pointer">
                <div onMouseEnter={() => setMyIndex(0)} className="space-y-2 w-fit px-5 rounded-lg hover:bg-white ">
                  <h3 className="text-xl font-semibold ">One Bed Apartmets</h3>
                  <p className="text-lg text-gray font-semibold">DELUXE, EXECUTIVE</p>
                </div>
              </Link>

              <Link href="/dayim-signature-apartments/residences" className="cursor-pointer">
                <div onMouseEnter={() => setMyIndex(1)} className="space-y-2 w-fit px-5 rounded-lg hover:bg-white">
                  <h3 className="text-xl font-semibold">Studio Apartments</h3>
                  <p className="text-lg text-gray font-semibold">DELUXE, EXECUTIVE</p>
                </div>
              </Link>

              <Link href="/dayim-signature-apartments/residences" className="cursor-pointer">
                <div onMouseEnter={() => setMyIndex(2)} className="space-y-2 w-fit px-5 rounded-lg hover:bg-white">
                  <h3 className="text-xl font-semibold">Shop / Office</h3>
                  <p className="text-lg text-gray font-semibold">DELUXE, EXECUTIVE</p>
                </div>
              </Link>                            
            </div>
        </div>
    );
}