"use client";

import SectionHeader from "./reusable/SectionHeader";

import { FaRegCircleCheck } from "react-icons/fa6";
import pricingPlans from "@/lib/data";
import { motion } from "motion/react"
const PricingSection = () => {
  return (
    <section className="py-16 px-6 w-[85%] mx-auto items-center flex flex-col  scroll-mt-20" id="pricing">
      <SectionHeader
        title="Our Packages"
        subtitle="Choose the best plan for your journey."
      />

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
  {pricingPlans.map((plan, index) => (
    <motion.div

    initial={{  opacity: 0 }} // 👈 Start from above (-30px)
    whileInView={{ opacity: 1 }} // 👈 Moves down into place
    transition={{ duration: 0.7, delay: index * 0.3 }} // 👈 Staggered animation
    viewport={{ once: true }} // 👈 Each card animates with a small delay
    // viewport={{ once: true }}  // 👈 Ensures it only
      key={index}
      className="rounded-2xl shadow-lg p-6 lg:border-double border-mainGreen border lg:border-2 clip-arch h-full slide-up-hover duration-700 transition-all flex flex-col justify-between cursor-pointer gap-5 hover:bg-mainGreen/10"
    >
      {/*=============  Price & description ================ */}
      <div className="flex flex-col flex-grow items-center justify-between  text-center gap-2 mt-10">
        <h3 className="text-4xl font-semibold">
          {plan.price} {""}
          <span className="text-lg font-medium ">£/week</span>
        </h3>
        <p className="text-sm font-light min-h-[50px]">{plan.description}</p>
      </div>

      {/* Schedule ================ */}
      <div className="text-md shadow-lg text-center bg-mainGreen rounded-md py-1 text-white">
        {plan.schedule}
      </div>

      {/* Features */}
      <div className="mt-4 space-y-2 flex-grow">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2">
            <FaRegCircleCheck />
            <span>{feature}</span>
          </div>
        ))}
      </div>
       
    </motion.div>
  ))}
</div>
{/* <div className="mx-auto mt-16 flex items-center justify-center">

<a href="#contact" className="p-2 w-[50%] text-3xl rounded-sm hover:bg-mainGreen hover:text-white border-mainGreen border">
  <button className="w-full rounded-full
  ">
    Enroll now
  </button>
</a>
    </div> */}
    </section>
  );
};

export default PricingSection;
