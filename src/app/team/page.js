"use client";

import {motion} from 'framer-motion'

import Link from 'next/link'


import NavBar from '../dmComponents/Navbar';
import MainFooter from '../dmComponents/footer/MainFooter';
import TeamItem from './TeamItem';



function Contact() {
  const b_t_animation = {
    hide: {
        opacity: 0,
        y: 300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
  };

  return (
    <div>
      <NavBar videoBg={false} />
    
      <section 
        className='my-[50px] mt-[150px] '>
              <h2 className='text-center font-bold text-4xl my-7'>Our Team</h2>
              <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7'>

                <TeamItem 
                  image={"/images/dayimMarketing/agents/AghaUsmanAhmed.jpg"}
                  name={"Mr. Agha Usman Ahmed"} 
                  designation={"Social Media Head/Host"}
                  mobile={"+923028460544"}
                  email={"usmanahmad1105@gmail.com"}
                  listingsLink={"#"}
                />

                <TeamItem 
                  image={"/images/dayimMarketing/agents/AliZark.jpg"}
                  name={"Mr. Ali Zark Jahangir"} 
                  designation={"Team Leader"}
                  mobile={"+923164956464"}
                  email={"ializark@gmail.com"}
                  listingsLink={"#"}
                />

                <TeamItem 
                  image={"/images/dayimMarketing/agents/FarahHafeez.jpg"}
                  name={"Ms. Farah Hafeez"} 
                  designation={"Business Development Manager"}
                  mobile={"+923065111175"}
                  email={"farah.dayim@gmai.com"}
                  listingsLink={"#"}
                />

                <TeamItem 
                  // image={"/images/dayimMarketing/agents/FarahHafeez.jpg"}
                  name={"Mr. Abdullah Razzaq"} 
                  designation={"Investment Advisor"}
                  mobile={"+923364412491"}
                  email={"abdullahrazzaq950@gmail.com"}
                  listingsLink={"#"}
                />

                <TeamItem 
                  image={"/images/dayimMarketing/agents/TaimoorKhan.jpg"}
                  name={"Mr. Taimoor Khan"} 
                  designation={"Investment Advisor"}
                  mobile={"+923057780879"}
                  email={"ktaimoor242@gmail.com"}
                  listingsLink={"#"}
                />

                <TeamItem 
                  image={"/images/dayimMarketing/agents/UsmanIjaz.jpg"}
                  name={"Mr. Usman Ijaz"} 
                  designation={"Investment Advisor"}
                  mobile={"+923049456008"}
                  email={"usman.dayim008@gmail.com"}
                  listingsLink={"#"}
                />

                <TeamItem 
                  image={"/images/dayimMarketing/agents/FarazmaHaroon.jpg"}
                  name={"Ms. Farazma Haroon Toor"} 
                  designation={"Creative Manager"}
                  mobile={"+923055111504"}
                  email={"farazmatoor@gmail.com"}
                  listingsLink={"#"}
                />

                <TeamItem 
                  // image={"/images/dayimMarketing/agents/UsmanIjaz.jpg"}
                  name={"Mr. Aown Abbas"} 
                  designation={"Admin & Account Manager"}
                  mobile={"+923057000139"}
                  email={"aowniub@gmail.com"}
                  listingsLink={"#"}
                />

                <TeamItem 
                  image={"/images/dayimMarketing/agents/YousafAslam.jpg"}
                  name={"Mr. Yousaf Aslam"} 
                  designation={"Business Development Officer"}
                  mobile={"+923174146664"}
                  email={"yousaf.aslam@hotmail.com"}
                  listingsLink={"#"}
                />

                <TeamItem 
                  image={"/images/dayimMarketing/agents/HamzaTayyab.jpg"}
                  name={"Mr. Hamza Tayyab"} 
                  designation={"Investment Advisor"}
                  mobile={"+923078072575"}
                  email={"hamza.dayim750@gmail.com"}
                  listingsLink={"#"}
                />

              </div>
      </section>

      <footer className='mt-20'>
        <MainFooter />
      </footer>
    </div>
  )
}

export default Contact