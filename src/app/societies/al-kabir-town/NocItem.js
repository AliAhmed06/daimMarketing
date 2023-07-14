import Link from 'next/link'
import React from 'react'

const NocItem = ({title, link}) => {
  return (
    <Link href={link} className='bg-white shadow-md py-5 px-10 h-[250px] flex items-center justify-center hover:scale-110 transition'>
            <h3 className='font-bold text-2xl  text-second '>{title}</h3>                      
    </Link>
  )
}

export default NocItem