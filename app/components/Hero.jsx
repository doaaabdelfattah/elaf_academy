"use client";
import React from "react";
import { motion } from "motion/react"


const Hero = () => {
  return (
    <div className="h-[100dvh] relative bg-[url('/Hero-image.jpg')] bg-cover bg-center bg-fixed" id="home">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Navbar */}

      {/* Content Wrapper */}
      <div className="relative h-full flex items-center justify-center flex-col md:flex-row z-10">
        {/* Right Section - Text */}
        <div className="w-full mx-auto flex flex-col max-sm:gap-2 gap-4 text-center text-white  md:pt-0 max-sm:px-3">
          <motion.p      initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }} className="text-lg tracking-wide font-Prata">
            Welcome To Our Academy
          </motion.p>
          <motion.h1      initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }} className="text-5xl  tracking-wider leading-tight font-Prata">
            Learn the Qur'an with Ease
          </motion.h1>
          <motion.p      initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }} className="text-lg tracking-wide mt-4 font-Prata">
            Join our structured Qur'an learning program designed for non-Arabic
          </motion.p>
          <div className="flex flex-col md:flex-row md:gap-5 gap-1 justify-center md:mt-10 mt-3">
            <a href="#pricing">
            <button className="mt-6 px-6 py-3 bg-white text-black rounded-full text-lg hover:bg-mainGreen hover:text-white hover:scale-[1.05] transition-all duration-500 ">
              Our plans
              </button>
            </a>
            <a href="#enroll">
            <button className="mt-6 px-6 py-3 text-white border-white border-2 rounded-full text-lg hover:bg-mainGreen hover:text-white hover:scale-[1.05] transition-all duration-500 ">
              
              Enroll now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
