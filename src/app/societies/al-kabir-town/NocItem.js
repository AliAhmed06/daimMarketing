import Link from 'next/link'
import React from 'react'

const NocItem = ({title, link, imageUrl}) => {
  return (
    <Link href={link} className='bg-white shadow-md py-5 px-10 h-[250px] flex items-center justify-center hover:scale-110 transition space-x-5'>
          <img src={imageUrl}  alt="" className='h-[100px]' />
          <h3 className='font-bold text-2xl  text-second '>{title}</h3>                      
    </Link>
  )
}

export default NocItem