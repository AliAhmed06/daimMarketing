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
import { Pagination, Navigation } from "swiper";
import Link from "next/link";
import residence_types from "@/app/dayim-signature-apartments/vr/Data";
import Image from "next/image";

export default function VRSLider1() {
  const [myIndex, setMyIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    sliderRef.current.swiper.slideTo(myIndex);
  }, [myIndex]);

  function prevSlide() {
    if (myIndex > 0) {
      setMyIndex(myIndex - 1);
    }
  }

  function nextSlide() {
    if (myIndex < 1) {
      setMyIndex(myIndex + 1);
    }
  }

  return (
    <div className="w-full overflow-hidden ">
      <div
        className="h-[300px] w-full 
                        md:h-[400px] md:mt-[0px]"
      >
        <Swiper
          ref={sliderRef}
          breakpoints={{
            1024: { slidesPerView: 2 },
          }}
          slidesPerView={1}
          spaceBetween={40}
          className="h-full w-full bg-transparent"
          //   pagination={true}
          //   modules={[Pagination]}
          style={
            {
              // "--swiper-pagination-color": "#FFBA08",
              // "--swiper-pagination-top": "-10px",
            }
          }
        >
          {residence_types.map((item) => (
            <SwiperSlide key={item.id}>
              <div className=" mx-auto h-[100%] lg:h-[70%] w-full flex flex-col items-center justify-center">
                <img
                  src="/images/dsa/vr-icon.svg"
                  className="absolute  object-contain h-[30px]  "
                />
                <Link
                  href={item.link}
                  className="inline-block h-full w-full relative"
                >
                  <Image
                    fill={true}
                    src={item.image}
                    alt=""
                    className="w-[100%] h-[100%] object-cover"
                  />
                </Link>
                <h3 className="text-center text-white text-lg font-bold mt-5">
                  {item.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
