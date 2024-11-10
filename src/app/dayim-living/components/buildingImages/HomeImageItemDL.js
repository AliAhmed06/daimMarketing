"use client";

import React, { useEffect, useState } from "react";
import { getAvailableResidencesByFloor } from "../../residences/Data";
import useSWR from "swr";
import { GET_ALL_PROPERTIES_API } from "@/lib/apiEndPoints";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const HomeImageItemDL = () => {
  const { data, error, isLoading } = useSWR(GET_ALL_PROPERTIES_API, fetcher);
  if (error) {
    return <h2>failed to load</h2>;
  }

  const residences = data?.filter((item) => item.name === "Dayim Living") || [];

  function getAvailableResidencesByFloor(floor) {
    return residences.filter(
      (item) => item.floor === floor && item.sold == "No"
    ).length;
  }

  const firstFloorAvailable = getAvailableResidencesByFloor("1st");
  const secondFloorAvailable = getAvailableResidencesByFloor("2nd");
  const thirdFloorAvailable = getAvailableResidencesByFloor("3rd");
  const fourthFloorAvailable = getAvailableResidencesByFloor("4th");
  const fifthFloorAvailable = getAvailableResidencesByFloor("5th");

  const handleMouseOver = (id) => {
    const highlightArea = document.getElementById(`highlight-${id}`);
    highlightArea.classList.remove("hidden");
    highlightArea.classList.add("flex");
  };

  const handleMouseOut = (id) => {
    const highlightArea = document.getElementById(`highlight-${id}`);

    highlightArea.classList.add("hidden");
    highlightArea.classList.remove("flex");
  };

  return (
    <div className="relative">
      <img
        src="/images/dayim_living/f1-floors-sizes.jpeg"
        alt="Your Image"
        useMap="#your-image-map"
        className=" "
      />
      {/* <map name="your-image-map">
        <area
          target=""
          alt=""
          title=""
          coords="434,109,761,173"
          shape="rect"
          href="/dayim-living/residences"
          onMouseEnter={() => handleMouseOver("area1")}
          onMouseLeave={() => handleMouseOut("area1")}
        />
        <area
          target=""
          alt=""
          title=""
          coords="433,177,764,238"
          shape="rect"
          href="/dayim-signature-apartments/residences"
          onMouseEnter={() => handleMouseOver("area2")}
          onMouseLeave={() => handleMouseOut("area2")}
        />
        <area
          target=""
          alt=""
          title=""
          coords="434,242,765,302"
          shape="rect"
          href="/dayim-signature-apartments/residences"
          onMouseEnter={() => handleMouseOver("area3")}
          onMouseLeave={() => handleMouseOut("area3")}
        />
        <area
          target=""
          alt=""
          title=""
          coords="434,307,766,367"
          shape="rect"
          href="/dayim-signature-apartments/residences"
          onMouseEnter={() => handleMouseOver("area4")}
          onMouseLeave={() => handleMouseOut("area4")}
        />
        <area
          target=""
          alt=""
          title=""
          coords="433,369,764,425"
          shape="rect"
          href="/dayim-signature-apartments/residences"
          onMouseEnter={() => handleMouseOver("area5")}
          onMouseLeave={() => handleMouseOut("area5")}
        />
        <area
          target=""
          alt=""
          title=""
          coords="432,429,762,500"
          shape="rect"
          href="/dayim-signature-apartments/residences"
          onMouseEnter={() => handleMouseOver("area6")}
          onMouseLeave={() => handleMouseOut("area6")}
        />
        <area
          target=""
          alt=""
          title=""
          coords="434,504,762,565"
          shape="rect"
          href="/dayim-signature-apartments/residences"
          onMouseEnter={() => handleMouseOver("area7")}
          onMouseLeave={() => handleMouseOut("area7")}
        />
      </map> */}
      <map name="your-image-map">
        <area
          target=""
          alt=""
          title=""
          coords="752,145,517,54"
          shape="rect"
          href="/dayim-living/residences"
          onMouseEnter={() => handleMouseOver("area5")}
          onMouseLeave={() => handleMouseOut("area5")}
        />
        <area
          target=""
          alt=""
          title=""
          coords="514,152,753,233"
          shape="rect"
          href="/dayim-living/residences"
          onMouseEnter={() => handleMouseOver("area4")}
          onMouseLeave={() => handleMouseOut("area4")}
        />
        <area
          target=""
          alt=""
          title=""
          coords="514,241,750,327"
          shape="rect"
          href="/dayim-living/residences"
          onMouseEnter={() => handleMouseOver("area3")}
          onMouseLeave={() => handleMouseOut("area3")}
        />
        <area
          target=""
          alt=""
          title=""
          coords="516,333,760,419"
          shape="rect"
          href="/dayim-living/residences"
          onMouseEnter={() => handleMouseOver("area2")}
          onMouseLeave={() => handleMouseOut("area2")}
        />
        <area
          target=""
          alt=""
          title=""
          coords="515,424,750,500"
          shape="rect"
          href="/dayim-living/residences"
          onMouseEnter={() => handleMouseOver("area1")}
          onMouseLeave={() => handleMouseOut("area1")}
        />
      </map>
      <div className="hidden lg:block">
        <div
          id="highlight-area5"
          className="absolute hidden  bg-third w-[200px] h-[60px] top-[16%] right-[15%] rounded-2xl  items-center justify-center text-white font-bold text-xl "
        >
          Available - {fifthFloorAvailable}
        </div>
        <div
          id="highlight-area4"
          className="absolute hidden bg-third w-[200px] h-[60px] top-[25%] right-[15%] rounded-2xl  items-center justify-center text-white font-bold text-xl "
        >
          Available - {fourthFloorAvailable}
        </div>
        <div
          id="highlight-area3"
          className="absolute hidden bg-third w-[200px] h-[60px] top-[35%] right-[15%] rounded-2xl  items-center justify-center text-white font-bold text-xl "
        >
          Available - {thirdFloorAvailable}
        </div>
        <div
          id="highlight-area2"
          className="absolute hidden bg-third w-[200px] h-[60px] top-[45%] right-[15%] rounded-2xl  items-center justify-center text-white font-bold text-xl "
        >
          Available - {secondFloorAvailable}
        </div>
        <div
          id="highlight-area1"
          className="absolute hidden bg-third w-[200px] h-[60px] top-[55%] right-[15%] rounded-2xl  items-center justify-center text-white font-bold text-xl "
        >
          Available - {firstFloorAvailable}
        </div>
      </div>

      {/* Add more highlight divs for additional areas */}
    </div>
  );
};

export default HomeImageItemDL;
