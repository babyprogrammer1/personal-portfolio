"use client"
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper modules
import { Pagination } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "frontend",
    title: "s",
    description: "React + Tailwind",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["React"]
  },
  {
    id: 2,
    category: "frontend",
    title: "s",
    description: "React + Tailwind",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["React"]
  },
  {
    id: 3,
    category: "frontend",
    title: "s",
    description: "React + Tailwind",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["React"]
  },
  {
    id: 4,
    category: "frontend",
    title: "s",
    description: "React + Tailwind",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["React"]
  },
  {
    id: 5,
    category: "fullstack",
    title: "s",
    description: "React + Tailwind",
    image: "/assets/work/thumb5.png",
    link: "",
    github: "",
    tech: ["React"]
  }
];
const categories = ["frontend", "fullstack"];

const Work = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1, 
        transition: { delay: 2, duration: 0.4, ease: "easeInOut" } 
      }}
      className="min-h-screen flex item-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 xl:mt-14 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>
        {/* tabs */}
        <Tabs defaultValue="frontend" className="w-full flex flex-col gap-6 xl:gap-12">
          <TabsList>
          </TabsList>
        </Tabs>
      </div>
    </motion.section>
  )
}

export default Work