"use client";
import { motion } from "motion/react"


const SectionHeader = ({ subtitle, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.h4 
      initial={{ y: 0, opacity: 0 }}
     whileInView={{ y: -20, opacity: 1 }}
     transition={{ duration: 0.6, delay: 0.4 }}   
     className="text-center mb-2 text-lg font-Prata ">{subtitle}
      </motion.h4>

    <motion.h2 
     initial={{ y: -20, opacity: 0 }}
     whileInView={{ y: 0, opacity: 1 }}
     transition={{ duration: 0.8, delay: 0.5 }}    
     className=" text-center font-Prata inline-block 
     text-5xl"
     >
      {title}
  </motion.h2>
      </div>
  )
}

export default SectionHeader