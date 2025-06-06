import React from "react";

import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { HiArrowSmRight } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="w-full bg-mainGreen border-t-[29px] min-h-fit relative bg-[url('/Islamic-Pattern-Footer.png')] bg-cover bg-center md:bg-fixed">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="md:mx-10 mx-5 mt-12 pb-10 flex flex-col lg:flex-row items-center justify-between z-50 relative text-white gap-10  border-b border-white">
        <div className="lg:w-1/2 mx-12 w-full flex flex-col gap-4">
          <img src="/white logo.png" width={400} height={400} alt="alx logo" />

          <p className="text-left lg:text-md font-light text-white leading-relaxed ">
            Our purpose is to inspire and educate individuals in the teachings
            of the Holy Quran, fostering a deep connection with its wisdom,
            values, and recitation to strengthen faith and character.
          </p>
        </div>
        <div className="w-full lg:w-1/2 py-10 flex items-start  justify-around px-2 max-sm:grid max-sm:grid-cols-1 gap-10 ">
          {/* first Section =================== */}

          <div className="flex flex-col text-left gap-4">
            <h2 className="text-2xl ">Useful Links</h2>
            <ul className="text-md gap-3 flex flex-col tracking-wider">
              <li className="slide-up-hover flex items-center gap-1">
                <HiArrowSmRight /> <Link href="#services">Our Services</Link>
              </li>
              <li className="slide-up-hover flex items-center gap-1">
                <HiArrowSmRight /> <Link href="#pricing">Our Packages</Link>
              </li>
              <li className="slide-up-hover flex items-center gap-1">
                <HiArrowSmRight /> <Link href="#contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4">
            <h2 className="text-2xl">Contact</h2>

            {/* Social Icons */}
            {/* <div className="flex gap-3 items-center">
    <Link href="/">
      <FaFacebook className="hover:text-white/70 duration-300 transition-all" size={30} />
    </Link>
    <Link href="/">
      <RiInstagramFill className="hover:text-white/70 duration-300 transition-all" size={30} />
    </Link>
  </div> */}

            {/* Contact Info */}
            <div className="flex flex-col gap-2 text-md">
              <div className="flex items-center gap-2">
                <MdEmail size={20} />
                <Link
                  href="mailto:elafacademy17@gmail.com"
                  className="hover:text-white/70 duration-300 transition-all"
                >
                  elafacademy17@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp size={20} />
                <Link
                  href="tel:+1234567890"
                  className="hover:text-white/70 duration-300 transition-all"
                >
                  +20 15 5078417
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white mx-20 py-3 md:py-4 flex flex-col justify-center  text-sm font-normal z-50 relative ">
        <p className="text-center tracking-widest">
          © Copyright 2025 | All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
