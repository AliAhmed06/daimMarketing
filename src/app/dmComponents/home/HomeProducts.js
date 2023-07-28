import React from 'react'
import HomeProductsItem from './HomeProductsItem'

const HomeProducts = () => {
  return (
    <div className='p-[20px] w-full  text-center space-y-7
                        lg:px-[200px]'>
        <h2 className='text-second font-bold text-4xl hover:text-black'>Our Featured Exclusives​</h2>
        <p className='text-gray text-lg'>Searching for your ideal home or commercial property in Lahore should not be a daunting experience. That is why we are here to assist you in finding the perfect property at the right price.</p>
            
        <div className='w-full grid grid-cols-1 gap-7
                        md:grid-cols-2 lg:grid-cols-3  '>
            {/* <HomeProductsItem houseImg="/images/dayimMarketing/home/houses/house1.jpeg" /> */}
            <HomeProductsItem houseImg="/images/dayimMarketing/home/houses/house2.jpeg" />
            <HomeProductsItem houseImg="/images/dayimMarketing/home/houses/house3.jpeg" />
            <HomeProductsItem houseImg="/images/dayimMarketing/home/houses/house4.jpeg" />
            <HomeProductsItem houseImg="/images/dayimMarketing/home/houses/house5.jpeg" />
        </div>
    </div>
  )
}

export default HomeProducts