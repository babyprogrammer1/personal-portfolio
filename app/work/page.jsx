"use client"
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper modules
import { Pagination } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    title: "An Audio Store",
    description: "React + Tailwind",
    image: "/assets/work/thumb1.jpg",
    link: "https://audiophile-s.netlify.app/",
    github: "https://github.com/babyprogrammer1/audiophile",
    tech: ["React", "TailwindCss"]
  },
  {
    id: 2,
    category: "frontend",
    title: "Agency Ai website",
    description: "React + Tailwind",
    image: "/assets/work/thumb2.jpg",
    link: "https://agency-a-i.netlify.app/",
    github: "https://github.com/babyprogrammer1/agency",
    tech: ["React", "TailwindCss","Framer Motion"]
  },
  {
    id: 3,
    category: "frontend",
    title: "Noors path webpage",
    description: "HTML + CSS",
    image: "/assets/work/thumb3.jpg",
    link: "https://noorspath.netlify.app/",
    github: "https://github.com/babyprogrammer1/Noor-s-path",
    tech: ["HTML","CSS","Javascript"]
  },
  {
    id: 4,
    category: "frontend",
    title: "Personal Portfolio website",
    description: "Next + Tailwind",
    image: "/assets/work/thumb4.jpg",
    link: "https://www.rafiuayomide.me/",
    github: "https://github.com/babyprogrammer1/personal-portfolio",
    tech: ["Next","TailwindCss","Framer Motion","Swiper","React Icons","Vercel"]
  },
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
      className="h-screen flex items-center"
    >
      <div className="container mx-auto px-2 md:px-4 xl:px-0 xl:mt-[120px]">
        <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-24 w-full xl:h-[680px]">
          <ScrollArea className="w-full h-[600px] xl:mt-[60px] xs:mt-[40px] sm:mt-[60px] xs:h-screen">
            <div className="pr-4">
              {/* heading */}
              <h2 className="h2 mb-6 xl:mb-12 xl:mt-4 max-w-[600px]">
                My Latest <span className="text-accent">Work</span>
              </h2>
              {/* tabs */}
              <Tabs defaultValue="frontend" className="w-full flex flex-col gap-6 xl:gap-12 min-h-0">
                {/* tabs list */}
                <TabsList className="flex flex-wrap justify-start sm:justify-center items-center gap-4 h-full mb-2 xl:mb-0">
                  {categories.map((category) => {
                    return (
                      <TabsTrigger key={category} value={category} className="capitalize border border-white/10 
                      data-[state=active]:bg-accent data-[state=active]:border-accent h-[40px] px-6 rounded-full cursor-pointer">
                        {category}
                      </TabsTrigger>
                    )
                  })}
                </TabsList>
                {/* tabs content */}
                <div className="xl:max-h-none">
                  {categories.map((category) => {
                    return (
                      <TabsContent key={category} value={category} className="mt-0">
                        <Swiper
                          autoHeight
                          modules={[Pagination]}
                          pagination={{ clickable: true, dynamicBullets: true }}
                          className="w-full"
                        >
                          {projects.filter((project) => project.category === category).map((project) => {
                            return (
                              <SwiperSlide key={project.id} className="h-auto pb-10">
                                <div className="flex flex-col xl:flex-row gap-6 xl:gap-12">
                                  {/* project info */}
                                  <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2
                                  xl:order-none">
                                    {/* title */}
                                    <h3 className="h3">
                                      {project.title}
                                    </h3>
                                    {/* tech */}
                                    <div className="xl:mb-4 max-w-[300px] min-h-[110px]">
                                      <p className="mb-4">Technologies Used</p>
                                      <ul className="flex flex-wrap gap-4">
                                        {project.tech.map((item, index) => {
                                          return (
                                            <li key={index} className="flex items-center gap-4 bg-[#a883ff]/13 
                                            h-[28px] px-[14px] rounded-full">{item}</li>
                                          )
                                        })}
                                      </ul>
                                    </div>
                                    {/* btns */}
                                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                                    <Link href={project.link}>
                                      <button className="btn btn-sm btn-accent flex gap-2 w-full sm:w-auto">
                                        <MdArrowOutward className="text-xl" />
                                        <span>Live Project</span>
                                      </button>
                                    </Link>
                                    <Link href={project.github}>
                                      <button className="btn btn-sm btn-white flex gap-2 w-full sm:w-auto">
                                        <FaGithub className="text-xl" />
                                        <span>Github Repo</span>
                                      </button>
                                    </Link>
                                    </div>
                                  </div>
                                  {/* project img */}
                                  <div className="w-full h-[220px] sm:h-[300px] xl:h-[400px] relative bg-pink-50/20 order-1
                                  xl:order-none">
                                    <Image src={project.image} alt={project.image} fill
                                    className="object-cover"/>
                                  </div>
                                </div>
                              </SwiperSlide>
                            )
                          })}
                        </Swiper>
                      </TabsContent>
                    )
                  })}
                </div>
              </Tabs>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  )
}

export default Work