"use client";

import { motion } from "framer-motion";

import NavBar from "../components/Navbar";
import Link from "next/link";

import MainFooter from "../components/footer/MainFooter";
import AboutSlider1 from "../components/sliders/about/AboutSlider1";
import AboutSlider2 from "../components/sliders/about/AboutSlider2";
import AboutSlider3 from "../components/sliders/about/AboutSlider3";

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

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="mt-[200px] w-full flex items-center justify-center"
      >
        <div
          className="flex flex-col w-[80%]  gap-10 items-center
                        lg:flex-row"
        >
          <div
            className="w-[100%] px-3
                        md:px-10 lg:w-[70%]"
          >
            <h3 className="text-6xl text-second font-bold">Contact</h3>
            <form className="w-full mt-20">
              <div
                className="grid grid-cols-1 gap-10
                                md:grid-cols-2"
              >
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="block px-2.5 pb-2.5 pt-5 w-full  text-second text-xl border-0 border-b border-gray appearance-none   focus:outline-none focus:ring-0 focus:border-second peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-xl text-gray duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-second peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your full name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    className="block px-2.5 pb-2.5 pt-5 w-full  text-second text-xl border-0 border-b border-gray appearance-none   focus:outline-none focus:ring-0 focus:border-second peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-xl text-gray duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-second peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="phone"
                    className="block px-2.5 pb-2.5 pt-5 w-full  text-second text-xl border-0 border-b border-gray appearance-none   focus:outline-none focus:ring-0 focus:border-second peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-xl text-gray duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-second peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Phone Number
                  </label>
                </div>
              </div>

              <div className="mt-10">
                <label
                  htmlFor="message"
                  className="text-lg font-semibold text-gray"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full h-[200px] outline-none border border-gray focus:border-second"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-second w-full text-white p-5 mt-10 hover:bg-third font-bold text-lg"
              >
                Submit
              </button>
            </form>
          </div>

          {/* right side */}
          <div
            className="w-[90%] bg-fifth p-16 flex flex-col font-semibold text-lg
                        lg:w-[30%]"
          >
            <h3 className="font-bold text-lg">Head Office:</h3>
            <p className="text-sm">
              66-B, 3/F Main Commercial Sector C, Bahria Town, Lahore.
            </p>
            <p className="text-sm">+92-308-511-117-6</p>
            <p className="text-sm">+92-423-597-617-4</p>
            <Link
              href="https://goo.gl/maps/1oTpsiotRN4JZEvC8"
              target="_blank"
              className="text-second underline hover:text-third"
            >
              view map
            </Link>

            <h3 className="font-bold text-lg mt-5">Al-Kabir Office:</h3>
            <p className="text-sm">
              9-A, 1st/F Main Commercial, Al-Kabir Town Phase 2, Lahore.
            </p>
            <p className="text-sm">+92-309-511-117-6</p>
            <Link
              href="https://goo.gl/maps/2eyWmxmZH1FS8bFg8"
              target="_blank"
              className="text-second underline hover:text-third"
            >
              view map
            </Link>

            <h3 className="font-bold text-lg mt-5">US Office:</h3>
            <p className="text-sm">
              Suite # 368, 30 Lake Avenue Riverhead, NY, 11901.
            </p>
            <p className="text-sm">+1(718)715-8208</p>
            <Link
              href="https://goo.gl/maps/22Fung9LQ8khjRhq8"
              target="_blank"
              className="text-second underline hover:text-third"
            >
              view map
            </Link>

            <h3 className="font-bold text-lg mt-5">Project Site:</h3>
            <p className="text-sm">
              45-46-47, A Side Broadway Commercial Opposite Lake City, Lahore.
            </p>
            <Link
              href="https://goo.gl/maps/nukZwWqvtZKfJ3y5A"
              target="_blank"
              className="text-second underline hover:text-third"
            >
              view map
            </Link>

            {/* <h3 className='font-bold text-lg mt-5'>Contact:</h3>
            <p className='text-sm'>+92-423-597-617-4</p>
            <p className='text-sm'>+92-309-511-117-6</p>
            <p className='text-sm'>+1(718)715-8208</p>
            <Link href="https://goo.gl/maps/wkE4ktjhkstfcjwm7" target='_blank' className='text-second underline hover:text-third'>view map</Link> */}
          </div>
        </div>
      </motion.section>

      <footer className="mt-20">
        <MainFooter />
      </footer>
    </div>
  );
}

export default Contact;
