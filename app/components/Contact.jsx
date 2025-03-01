import React from "react";
import SectionHeader from "./reusable/SectionHeader";
import Form from "./Form";
import Image from "next/image";

const Contact = () => {
  return (
    <div
      id="contact"
      className=" w-[85%] mx-auto py-10 scroll-mt-20 bg-no-repeat "
    >
      <SectionHeader
        title="Enroll in Our Courses Today"
        subtitle="Start Your Learning Journey With Us!"
        description="Fill out the form below to begin your journey of learning Qur'an, Arabic, and Islamic Studies."
      />
      
      <div className="flex flex-col w-full lg:flex-row items-center justify-between ">
        {/* Form Section */}
        <div className="w-full">
          <Form />
        </div>

        {/* Image Section */}
        <div className="w-full h-full lg:inline-block hidden">
          <Image 
            src="/Asset 1islamic-pattern-1.png" 
            width={900} 
            height={900} 
            className="opacity-50  bottom-0 right-0 object-cover"
            alt="Islamic Pattern"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
