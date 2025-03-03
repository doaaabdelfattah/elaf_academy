"use client";
import { FaBookOpen, FaLanguage, FaMosque } from "react-icons/fa";
import SectionHeader from "./reusable/SectionHeader";
import { motion } from "motion/react"

const Services = () => {
  const services = [
    {
      title: "Qur'an Learning",
      description: "Memorize quran with tajweed and proper recitation.",
      icon: <FaBookOpen className="text-mainGreen text-7xl" />,
    },
    {
      title: "Arabic Language",
      description: "Learn to read, write, and speak Arabic fluently.",
      icon: <FaLanguage className="text-mainGreen text-7xl" />,
    },
    {
      title: "Islamic Studies",
      description: "Learn about the life of Prophet Muhammed ﷺ , du'aa and hadith",
      icon: <FaMosque className="text-mainGreen text-7xl" />,
    },
  ];

  return (
    <section className="text-center py-16 px-6 section-separate w-[85%] mx-auto scroll-mt-20 " id="services">
      <SectionHeader title="Our Services" subtitle="What we serve"/>

<div className=" flex flex-col gap-5 lg:flex-row items-center justify-center">

        <div className="mt-20 w-full grid lg:grid-cols-3 grid-cols-1 gap-16 mx-auto">
        {services.map((service, index) => (
          <motion.div key={index} className="flex flex-col items-center justify-around gap-7"  initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: -20, opacity: 1 }}
          transition={{ duration: 0.6, delay: index*0.4 }}   >
            <div className="flex  items-center">{service.icon}</div>
            <div>

            <h3 className="lg:text-4xl text-2xl text-gray-800">{service.title}</h3>
            <p className="text-gray-600 lg:text-lg text-base mt-2">{service.description}</p>
            </div>
            
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Services;
