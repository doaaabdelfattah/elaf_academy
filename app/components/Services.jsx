import { FaBookOpen, FaLanguage, FaMosque } from "react-icons/fa";
import SectionHeader from "./reusable/SectionHeader";

const Services = () => {
  const services = [
    {
      title: "Qur'an Learning",
      description: "Master Qur’anic recitation with Tajweed and memorization.",
      icon: <FaBookOpen className="text-mainGreen text-7xl" />,
    },
    {
      title: "Arabic Language",
      description: "Learn to read, write, and speak Arabic fluently.",
      icon: <FaLanguage className="text-mainGreen text-7xl" />,
    },
    {
      title: "Islamic Studies",
      description: "Explore Islamic teachings, history, and values.",
      icon: <FaMosque className="text-mainGreen text-7xl" />,
    },
  ];

  return (
    <section className="text-center py-16 px-6 section-separate w-[85%] mx-auto scroll-mt-20 " id="services">
      <SectionHeader title="Our Services" subtitle="What we serve"/>

<div className=" flex flex-col gap-5 lg:flex-row items-center justify-center">

        <div className="mt-10 w-full flex flex-col lg:flex-row justify-between gap-16 items-center mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center justify-around gap-7">
            <div className="flex  items-center">{service.icon}</div>
            <div>

            <h3 className="lg:text-4xl text-2xl text-gray-800">{service.title}</h3>
            <p className="text-gray-600 lg:text-lg text-base mt-2">{service.description}</p>
            </div>
            
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Services;
