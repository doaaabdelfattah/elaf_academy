import React from "react";
import SectionHeader from "./reusable/SectionHeader";
import Form from "./Form";
import Image from "next/image";
const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat "
    >
      <SectionHeader
        title="Enroll in Our Courses Today"
        subtitle="Start Your Learning Journey With Us!"
        description=" Fill out the form below to begin your journey of learning Qur'an, Arabic, and Islamic Studies."
      />
      <div className="flex relative flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-2/3 w-full">
          <Form />
        </div>
        <div className="lg:block hidden w-1/3  bg-[url('/Asset 1islamic-pattern-1.png')] bg-cober bg-center bg-fixed">
          <Image src="/Asset 1islamic-pattern-1.png" width={700} height={900} className="opacity-50 absolute bottom-[60] right-[-160]"/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
