"use client";

import React from 'react';

const HomeImageItem2 = () => {
  const handleMouseOver = (id) => {
    const highlightArea = document.getElementById(`highlight-${id}`);
    highlightArea.classList.remove('hidden');
    highlightArea.classList.add('flex');
  };

  const handleMouseOut = (id) => {
    const highlightArea = document.getElementById(`highlight-${id}`);
    
    highlightArea.classList.add('hidden');
    highlightArea.classList.remove('flex');
  };

  return (
    <div className="relative">

    {/* <img src="Exterior view 1 (1).jpg" usemap="#image-map">

    <map name="image-map">
        <area target="" alt="" title="" href="" coords="490,128,750,199" shape="rect">
        <area target="" alt="" title="" href="" coords="491,206,751,277" shape="rect">
        <area target="" alt="" title="" href="" coords="492,282,751,353" shape="rect">
        <area target="" alt="" title="" href="" coords="493,359,751,428" shape="rect">
        <area target="" alt="" title="" href="" coords="493,436,748,508" shape="rect">
        <area target="" alt="" title="" href="" coords="495,512,750,574" shape="rect">
        <area target="" alt="" title="" href="" coords="490,581,754,641" shape="rect">
    </map> */}


      <img src="/images/dsa/building_bg4.jpg" alt="Your Image" useMap="#your-image-map" className=' '  />
      <map name="your-image-map">
        <area shape="rect" coords="490,128,750,199" href='/dayim-signature-apartments/residences#apartments' onMouseEnter={() => handleMouseOver('area1')} onMouseLeave={() => handleMouseOut('area1')} />
        <area shape="rect" coords="491,206,751,277" href='/dayim-signature-apartments/residences#apartments' onMouseEnter={() => handleMouseOver('area2')} onMouseLeave={() => handleMouseOut('area2')} />
        <area shape="rect" coords="492,282,751,353" href='/dayim-signature-apartments/residences#apartments' onMouseEnter={() => handleMouseOver('area3')} onMouseLeave={() => handleMouseOut('area3')} />
        <area shape="rect" coords="493,359,751,428" href='/dayim-signature-apartments/residences#apartments' onMouseEnter={() => handleMouseOver('area4')} onMouseLeave={() => handleMouseOut('area4')} />
        <area shape="rect" coords="493,436,748,508" href='/dayim-signature-apartments/residences#apartments' onMouseEnter={() => handleMouseOver('area5')} onMouseLeave={() => handleMouseOut('area5')} />
        <area shape="rect" coords="495,512,750,574" href='/dayim-signature-apartments/residences' onMouseEnter={() => handleMouseOver('area6')} onMouseLeave={() => handleMouseOut('area6')} />
        <area shape="rect" coords="490,581,754,641" href='/dayim-signature-apartments/residences' onMouseEnter={() => handleMouseOver('area7')} onMouseLeave={() => handleMouseOut('area7')} />

        {/* Add more areas as needed */}
      </map>
      <div className='hidden lg:block'>
        <div id="highlight-area1" className="absolute hidden  bg-third w-[200px] h-[70px] top-[20%] right-[15%] rounded-2xl  items-center justify-center text-white font-bold text-xl ">Available - 4</div>
        <div id="highlight-area2" className="absolute hidden bg-third w-[200px] h-[70px] top-[31%] right-[15%] rounded-2xl  items-center justify-center text-white font-bold text-xl ">Available - 4</div>
        <div id="highlight-area3" className="absolute hidden bg-third w-[200px] h-[70px] top-[42%] right-[15%] rounded-2xl  items-center justify-center text-white font-bold text-xl ">Available - 3</div>
        <div id="highlight-area4" className="absolute hidden bg-third w-[200px] h-[70px] top-[53%] right-[15%] rounded-2xl  items-center justify-center text-white font-bold text-xl ">Available - 3</div>
        <div id="highlight-area5" className="absolute hidden bg-third w-[200px] h-[70px] top-[64%] right-[15%] rounded-2xl  items-center justify-center text-white font-bold text-xl ">Available - 0</div>
        <div id="highlight-area6" className="absolute hidden bg-third w-[200px] h-[70px] top-[75%] right-[15%] rounded-2xl  items-center justify-center text-white font-bold text-xl ">Available - 2</div>
        <div id="highlight-area7" className="absolute hidden bg-third w-[200px] h-[70px] top-[86%] right-[15%] rounded-2xl  items-center justify-center text-white font-bold text-xl ">Available - 1</div>
      </div>

      {/* Add more highlight divs for additional areas */}
    </div>
  );
};

export default HomeImageItem2;
