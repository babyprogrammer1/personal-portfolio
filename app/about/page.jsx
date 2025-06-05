"use client"
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

// components
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";



const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1, 
        transition: { delay: 2, duration: 0.4, ease: "easeInOut" } 
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* img & social icon */}
          <div className="hidden xl:flex w-full h-full pt-14 max-w-[438px] relative bg-pink-50/10">
            1
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Zoe</span> R.
              </h2>
              <p className="max-w-[540px] mb-12">
                I focus on crafting visually stunning, user-friendly web experiences that not only look great but also function
                seamlessly, ensuring every detail is carefully designed and executed.
              </p>
              <div className="flex flex-col items-start gap-16">
                <Stats/>
                <Testimonials/>
                <Info/>
                <Journey/>
                <Skills/>
              </div>
            </div>
          </ScrollArea>
        </div>  
      </div>
    </motion.section>
  )
}

export default About