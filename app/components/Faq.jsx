import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import React from 'react'
import SectionHeader from "./reusable/SectionHeader"

const Faq = () => {
  return (
    <div className="w-[85%] mx-auto mb-20 pt-20 scroll-mt-40" id="faq">
      <SectionHeader title="FAQ" subtitle="Frequently asked questions"/>
      <Accordion type="single" collapsible className="lg:w-[50%] w-full mx-auto mt-10" >
        {/* ============== Q1================ */}
  <AccordionItem value="item-1" >
    <AccordionTrigger className="lg:text-xl text-lg">What courses does Elaf Academy offer?</AccordionTrigger>
    <AccordionContent className="text-base  leading-loose">
    Elaf Academy provides courses in <strong>Qur'an, Arabic, and Islamic Studies
      </strong>
      , catering to different levels of learners.
    </AccordionContent>
  </AccordionItem>


    {/* ============== Q2================ */}
  <AccordionItem value="item-2" >
    <AccordionTrigger className="lg:text-xl text-lg">How can I enroll in a course?</AccordionTrigger>
    <AccordionContent className="text-base  leading-loose">
    You can enroll by filling out our online registration form, selecting your preferred courses, and submitting your details.
    </AccordionContent>
  </AccordionItem>


   {/* ============== Q3 ================ */}
  <AccordionItem value="item-3" >
    <AccordionTrigger className="lg:text-xl text-lg">What are the available class schedules?</AccordionTrigger>
    <AccordionContent className="text-base leading-loose">
    Our classes are flexible! You can choose preferred days for your lessons during registration, and we’ll coordinate with you for suitable timings.
    </AccordionContent>
  </AccordionItem>


     {/* ============== Q4 ================ */}
  <AccordionItem value="item-4" >
    <AccordionTrigger className="lg:text-xl text-lg">How can I contact Elaf Academy for more details?</AccordionTrigger>
    <AccordionContent className="text-base  leading-loose">
    You can reach us via email (details provided on our website). We’re happy to assist with any questions!
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>
  )
}

export default Faq