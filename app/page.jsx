"use client"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1, 
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" } 
      }} >
        home
    </motion.section>
  )
}

export default Home;