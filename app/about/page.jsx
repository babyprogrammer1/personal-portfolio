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
import Blob from "@/components/Blob";
import Socials from "@/components/Socials";



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
          <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative ">
            {/*<Image
              src="/assets/avatar.png"
              width={320}
              height={496}
              alt=""
              className="z-20 relative"
            />*/}
            {/* overlay */}
            <div className="w-full h-[60px] absolute left-0 top-[420px] right-0 bg-gradient-to-t from-primary 
            via-primary/90 z-30"></div>

            {/* blob */}
            <div className="absolute top-[80px] -left-[80px] z-10">
              <Blob containerStyles="w-[420px] h-[420px]"/>
            </div>

            {/* socials */}
            <Socials containerStyles="flex gap-4 z-40 w-max transform translate-x-[30px]"
              iconStyles="w-[48px] h-[48px] text-[22px] text-accent hover:text-accent-hover transition-all flex items-center
            justify-center rounded-full cursor-pointer"/>
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px] xl:mt-[60px] xs:mt-[100px] sm:mt-[20px] xs:h-screen">
            <div>
              <div className="flex items-center gap-3 mb-4 xl:mt-12">
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
              <div className="flex flex-col items-start gap-16 xs:gap-6">
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