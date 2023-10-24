import NavBar from '@/app/dmComponents/Navbar'
import MainFooter from '@/app/dmComponents/footer/MainFooter'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='min-h-screen w-full '>
      <NavBar videoBg={false} />
        
      <footer className='mt-20'>
        <MainFooter />
      </footer>
    </div>
  )
}

export default LoginPage