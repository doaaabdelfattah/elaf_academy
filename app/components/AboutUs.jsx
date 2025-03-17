"use client";
import React from "react";
import SectionHeader from "./reusable/SectionHeader";
import { motion } from "motion/react";
const AboutUs = () => {
  return (
    <div className="section-separate" id="about-us">
      <div className="relative h-full flex-col gap-16 md:flex-row flex items-center justify-between md:px-16 px-8 z-10">
        {/* Left Section - Arched Image */}
        <div className="lg:w-1/2 w-full relative">
          <div className="w-[80%] mx-auto h-full flex justify-center items-center relative">
            {/* Shadow Effect */}
            <div className="absolute w-full h-full bg-mainGreen rounded-[50px] left-[-20px] top-3 bottom-0 clip-arch"></div>

            {/* Main Image */}
            <img
              src="/Quraan-1.jpg" // Replace with your image path
              alt="Qur'an"
              width={500}
              height={1300} // Make it taller
              className="clip-arch z-10 h-[300px] md:h-[600px] object-cover"
            />
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="lg:w-1/2 w-full flex flex-col items-start gap-5">
          <SectionHeader
            title="Learn Qur'an with Ease"
            subtitle="Welcome To Our Academy"
            align={"items-start"}
            textAlign={"text-left"}
          />

          <motion.p
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg mt-4 leading-loose tracking-wider"
          >
            Learn Quran online with expert teachers through interactive and
            personalized lessons. We offer Quran recitation, Tajweed, Hifz, and
            Islamic studies for all ages. <br />
            Join us today and start your Quran journey.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
