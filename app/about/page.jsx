"use client"
import { motion } from "framer-motion";



const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1, 
        transition: { delay: 2, duration: 0.4, ease: "easeInOut" } 
      }} >
        about
    </motion.section>
  )
}

export default About