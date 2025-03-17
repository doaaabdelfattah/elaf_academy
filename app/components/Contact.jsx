import React from "react";
import SectionHeader from "./reusable/SectionHeader";
import Form from "./Form";

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
      </div>
    </div>
  );
};

export default Contact;
