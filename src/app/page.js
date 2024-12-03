'use client'

import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Textarea, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FeatureCard } from "./components/featurecard";
import { features, projectData } from "./dummyData";
import { FaUserFriends } from "react-icons/fa";
import { RiFileCodeLine, RiFileTransferLine } from "react-icons/ri";
import { ProjectCard } from "./components/projectcard";
import Link from "next/link";
import GetStartedModal from "./components/getStartedModal";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <section className="relative h-full w-full z-0 lg:py-52 md:py-44 sm:py-28 bg-[url('/images/bg.webp')] bg-cover bg-center bg-fixed bg-no-repeat">

        {/* Content */}
        <div className="lg:max-w-screen-xl mx-auto sm:max-w-screen-sm">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
            <div>
              <h1 className="lg:text-4xl sm:text-3xl font-semibold mb-4 text-gray-200 ">Professional IT Solutions & Services</h1>
              <p className="text-sm mb-6 text-gray-300 font-light leading-relaxed">
                GoSolutions guarantees the highest standards in coding and design practices. Seamlessly integrating stunning styles and elements, It empowers you to effortlessly create a professional website that truly shines.
              </p>
              <Button onClick={handleOpen} variant="gradient" className="">
                Get Started
              </Button>
            </div>
            <div className="lg:hidden h-16 clear-both"></div>
            <div className="relative">
              <img src="/images/b1.jpg" className="w-[70%] relative z-30 top-0 right-20 translate-x-1/2 rounded-lg" />
              <img src="/images/b2.jpg" className="w-[55%] z-20 absolute lg:right-0 lg:-top-20 sm:-top-8 sm:right-3 rounded-lg" />
              <img src="/images/b3.jpg" className="w-[45%] absolute z-10 lg:-bottom-16 sm:-bottom-8 sm:left-0 lg:left-10 right-64 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="lg:max-w-screen-xl sm:max-w-screen-sm py-20 mx-auto">
        <div className="pb-4">
          <h6 className="text-xs bg-blue-gray-50 rounded-sm px-2 py-1 w-fit">Why choosen gosolutions</h6>
          <h2 className="text-3xl font-bold mb-2 mt-3">
            Amazing Features
          </h2>
          <p>From software to network maintenance, we have your back.</p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((item, index) => (
            <FeatureCard key={index} title={item.title} desc={item.desc} icon={item.icon} />
          ))}
        </div>
      </section>

      <section className="bg-[url('/images/bg.webp')] bg-cover bg-center bg-fixed bg-no-repeat mb-20">
        <div className="max-w-screen-xl lg:py-20 sm:py-16 mx-auto">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-y-0 sm:gap-y-10 gap-x-10">
            <div className="flex flex-col items-center gap-3">
              <div className=" rounded-full bg-gray-500/35 w-24 h-24 flex items-center justify-center"><FaUserFriends size={50} className="text-gray-200" /></div>
              <Typography className="text-gray-200 text-2xl font-medium"> 20+ Clients</Typography>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className=" rounded-full bg-gray-500/35 w-24 h-24 flex items-center justify-center"><RiFileCodeLine size={50} className="text-gray-200" /></div>
              <Typography className="text-gray-200 text-2xl font-medium"> 5+ Experience</Typography>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className=" rounded-full bg-gray-500/35 w-24 h-24 flex items-center justify-center"><RiFileTransferLine size={50} className="text-gray-200" /></div>
              <Typography className="text-gray-200 text-2xl font-medium"> OnTime Delivery</Typography>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 pt-20 pb-72">
        <div className="lg:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md mx-auto">
          <div>
            <h6 className="text-xs bg-gray-600/30 text-white rounded-sm px-2 py-1 w-fit">All demo are included</h6>
            <h2 className="text-3xl font-medium mt-3 text-gray-200 mb-7">
              Demo Preview
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8">
            {projectData.map((project, index) => (
              <ProjectCard key={index} data={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative lg:h-[500px] sm:h-[800px]">
        <div className="absolute lg:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md -top-48 left-[8%]">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            <div className="flex flex-col justify-between lg:gap-0 sm:gap-10 bg-black/90 text-gray-200 lg:rounded-s-xl sm:rounded-t-xl p-10">
              <div>
                <Typography variant="h3" className="pb-3 lg:text-3xl sm:text-2xl">
                  Have a project in mind?
                </Typography>
                <p>
                  Let us turn your ideas into reality. Let&rsquo;s collaborate to build something remarkable and achieve success together.
                </p>
              </div>
              <Button className="flex items-center gap-2 w-fit">
                Contact with us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </div>
            <div>
              <img src="/images/service_page_img1.webp" alt="images" className="lg:rounded-e-xl sm:rounded-b-xl" />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 sm:gap-y-5 sm:grid-cols-1 mt-10">
            <Typography variant={'h2'} className="text-gray-900 font-semibold lg:text-4xl sm:text-2xl">Let&rsquo;s work together to build a thriving business.</Typography>
            <p className="text-justify">
              Partnering with us means you&rsquo;re not growing your business alone. We&rsquo;re here to support you every step of the way, dedicating our expertise to driving the success of your team and organization. If you&rsquo;re searching for the right agency to enhance your online presence, boost conversions, and increase revenue, look no further – we&rsquo;ve got you covered!
            </p>
          </div>
        </div>
      </section>

      <GetStartedModal open={open} handleOpen={handleOpen} />
    </>
  );
}
