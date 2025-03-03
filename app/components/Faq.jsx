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
    <AccordionContent className="text-base  leading-loose tracking-wide">
    We offer a range of courses, including:<br/>
      •⁠  ⁠Quran Recitation with Tajweed <br/>
      •⁠  ⁠Quran Memorization (Hifz Program)<br/>
      •⁠  ⁠Basic Islamic Studies (Duas, Hadith, Fiqh, etc.)<br/>
      •⁠  ⁠Arabic Language for Quran Understanding

    </AccordionContent>
  </AccordionItem>


    {/* ============== Q2================ */}
  <AccordionItem value="item-2" >
    <AccordionTrigger className="lg:text-xl text-lg">How can I enroll in a course?</AccordionTrigger>
    <AccordionContent className="text-base  leading-loose tracking-wide">
    You can register online by filling out our enrollment form on the website or contacting us via WhatsApp, email, or phone.
    </AccordionContent>
  </AccordionItem>


   {/* ============== Q3 ================ */}
  <AccordionItem value="item-3" >
    <AccordionTrigger className="lg:text-xl text-lg">⁠How do online classes work?</AccordionTrigger>
    <AccordionContent className="text-base leading-loose tracking-wide">
    Classes are conducted through video conferencing platforms like Zoom or Google meets with a qualified tutor. <br/>
    Lessons are interactive, with screen sharing, digital whiteboards, and one-on-one guidance to ensure effective learning.

    </AccordionContent>
  </AccordionItem>


     {/* ============== Q4 ================ */}
  <AccordionItem value="item-4" >
    <AccordionTrigger className="lg:text-xl text-lg">What are the class timings?</AccordionTrigger>
    <AccordionContent className="text-base  leading-loose tracking-wide">
    We offer flexible scheduling to accommodate students from different time zones. You can choose class timings that suit your availability.
    </AccordionContent>
  </AccordionItem>

     {/* ============== Q5 ================ */}
  <AccordionItem value="item-5" >
    <AccordionTrigger className="lg:text-xl text-lg">What qualifications do your teachers have?</AccordionTrigger>
    <AccordionContent className="text-base  leading-loose tracking-wide">
    Our tutors are certified Quran teachers with expertise in Tajweed, Hifz, and Islamic studies. They have years of teaching experience and are fluent in multiple languages for better communication.
    </AccordionContent>
  </AccordionItem>

     {/* ============== Q6 ================ */}
  <AccordionItem value="item-6" >
    <AccordionTrigger className="lg:text-xl text-lg">
    ⁠Is there a trial class available?
      </AccordionTrigger>
    <AccordionContent className="text-base leading-loose tracking-wide">
    Yes! We offer a free trial class so you can experience our teaching method before enrolling in a full course.
    </AccordionContent>
  </AccordionItem>
     {/* ============== Q7 ================ */}
  <AccordionItem value="item-7" >
    <AccordionTrigger className="lg:text-xl text-lg">
    How much do the courses cost?
      </AccordionTrigger>
    <AccordionContent className="text-base  leading-loose tracking-wide">
    Our pricing varies based on the course type and class frequency. Please contact us for a detailed fee structure and any ongoing discounts.
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>
  )
}

export default Faq