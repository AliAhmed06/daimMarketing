import React from 'react'
import AdminLayout from '../components/layouts/AdminLayout'
import Link from 'next/link'

const DmEventsPage = () => {
  return (
    <AdminLayout>
        <div className='h-full w-full flex flex-col p-10'>
            <div className='w-full '>
              <Link href={"/admin/dm-events/add"} className='text-second text-lg font-bold hover:underline'>Add New</Link>
            </div>
            <div className='flex-1 flex items-center justify-center'>
              2
            </div>            
        </div>        
    </AdminLayout>
  )
}

export default DmEventsPage