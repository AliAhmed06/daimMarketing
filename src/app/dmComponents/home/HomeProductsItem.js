import Link from 'next/link'
import React from 'react'

const HomeProductsItem = ({houseImg}) => {
  return (
    <div>
        <Link href={"/contact"}>
            <img 
                src={houseImg} 
                alt="" 
                className='h-[400px]   rounded-md'
            />
        </Link>
    </div>
  )
}

export default HomeProductsItem