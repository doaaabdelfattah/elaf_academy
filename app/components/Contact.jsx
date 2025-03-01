import React from "react";
import SectionHeader from "./reusable/SectionHeader";
import Form from "./Form";
import Image from "next/image";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat overflow-hidden"
    >
      <SectionHeader
        title="Enroll in Our Courses Today"
        subtitle="Start Your Learning Journey With Us!"
        description="Fill out the form below to begin your journey of learning Qur'an, Arabic, and Islamic Studies."
      />
      
      <div className="flex flex-col lg:flex-row items-center justify-between relative">
        {/* Form Section */}
        <div className="lg:w-2/3 w-full">
          <Form />
        </div>

        {/* Image Section */}
        <div className="lg:block hidden w-1/3 overflow-hidden relative">
          <Image 
            src="/Asset 1islamic-pattern-1.png" 
            width={700} 
            height={900} 
            className="opacity-50 absolute bottom-0 right-0 object-cover"
            alt="Islamic Pattern"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
