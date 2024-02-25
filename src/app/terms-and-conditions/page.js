"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import NavBar from "../dmComponents/Navbar";
import MainFooter from "../dmComponents/footer/MainFooter";

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

      <section className="my-[50px] mt-[150px] ">
        <h2 className="text-center font-bold text-4xl my-7">
          Terms and Conditions
        </h2>
      </section>

      <footer className="mt-20">
        <MainFooter />
      </footer>
    </div>
  );
}

export default Contact;
