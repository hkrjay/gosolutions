'use client'

import { Button, Carousel, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FeatureCard } from "./components/featurecard";
import { features, projectData } from "./dummyData";
import { FaFigma, FaUserFriends } from "react-icons/fa";
import { RiFileCodeLine, RiFileTransferLine } from "react-icons/ri";
import { ProjectCard } from "./components/projectcard";
import Link from "next/link";
import GetStartedModal from "./components/getStartedModal";
import { IoIosDesktop, IoIosPeople, IoMdCode } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { CiMobile3 } from "react-icons/ci";
import { AiOutlineFileSearch } from "react-icons/ai";
import { IoPeopleOutline } from "react-icons/io5";
import { TbMessageReport } from "react-icons/tb";
import { motion } from "motion/react"

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <section className="relative h-screen w-full z-0 lg:py-32 md:py-44 sm:py-28 bg-[url('/images/bg.webp')] bg-cover bg-center bg-fixed bg-no-repeat">
        <div className="lg:max-w-screen-xl mx-auto sm:max-w-screen-sm">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:gap-x-20 items-center">
            <div className="flex flex-col gap-3">
              <p
                className='bg-gray-600/30 text-white p-2 w-fit text-xs rounded-md'
              >
                Our High Quality Services
              </p>
              <h1 className="lg:text-5xl sm:text-3xl font-semibold my-4 text-gray-200 ">We Provide Best IT Services for your need</h1>
              <p className="mb-6 text-gray-300 font-light leading-relaxed text-justify">
                GoSolutions delivers top-notch coding and design, blending creativity with user-friendly features to build visually impressive and high-performing websites. We focus on quality, style, and functionality, making it easy for you to create a professional online presence that stands out.
              </p>
              <div className="flex items-center gap-7">
                <Link href={'/about'}>
                  <Button
                    className="bg-blue-900 flex items-center gap-2"
                  >
                    Learn More
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
                </Link>
                <Button
                  onClick={handleOpen}
                  variant="gradient"
                  className="w-fit"
                  transition={{ type: "spring", bounce: 0.25 }}
                >
                  Get Started
                </Button>
              </div>

            </div>
            <div className="lg:hidden h-16 clear-both"></div>
            <div
              className="relative w-[90%]"
            >
              <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
              <div className="absolute bg-gray-700 w-full h-full rounded-lg -z-10 -right-5 -top-5 opacity-40"></div>
              <img src="/images/banner_hero_img.jpg" className="bg-cover bg-no-repeat bg-center rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="lg:max-w-screen-xl sm:max-w-screen-sm py-20 mx-auto"
      >
        <div className="grid grid-cols-2 gap-x-10">
          <div className="flex flex-col gap-3">
            <p className="text-blue-900 font-medium">10 years of experience</p>
            <Typography variant="h2" className="font-semibold">Right Partner for Software Innovation</Typography>
            <p>
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit nam nec tellus a odio tincidunt auctor.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <IoMdCode size={40} color="blue" />
                <Typography variant="h4">Experience</Typography>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
              </div>
              <div>
                <BiSupport size={40} color="blue" />
                <Typography variant="h4">Quick Support</Typography>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
              </div>
            </div>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <img src="/images/service_page_img1.webp" className="rounded-lg" />
            <div className="absolute -bottom-7 -right-9 -z-10 w-40 h-40 border-2 border-orange-700 rounded-2xl"></div>
          </motion.div>
        </div>
        <Link href={'/about'}>
          <Button variant="text" className="text-blue-800 flex items-center gap-5">
            Learn More About Us
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
        </Link>
      </section>

      <section className="bg-gray-100">
        <div className="lg:max-w-screen-xl sm:max-w-screen-sm py-20 mx-auto ">
          <div className="pb-4">
            <h6 className="text-xs bg-blue-gray-50 rounded-sm px-2 py-1 w-fit">Why choosen gosolutions</h6>
            <h2 className="text-3xl font-bold mb-2 mt-3">
              Amazing Features
            </h2>
            <p>From software to network maintenance, we have your back.</p>
          </div>
          <div
            className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4"
          >
            {features.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} img={item.img} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900">
        <div className="max-w-screen-xl lg:py-20 sm:py-16 mx-auto">
          <div className="grid lg:grid-cols-4 sm:grid-cols-1 lg:gap-y-0 sm:gap-y-10 gap-x-10">
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-full bg-blue-700 w-24 h-24 flex items-center justify-center text-gray-100"><FaUserFriends size={50} /></div>
              <Typography className="text-gray-200 text-2xl font-medium"> 20+ Clients</Typography>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className=" rounded-full bg-blue-700 w-24 h-24 flex items-center justify-center  text-gray-100"><RiFileCodeLine size={50} /></div>
              <Typography className="text-gray-200 text-2xl font-medium"> 5+ Experience</Typography>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className=" rounded-full bg-blue-700 w-24 h-24 flex items-center justify-center text-gray-100"><RiFileTransferLine size={50} /></div>
              <Typography className="text-gray-200 text-2xl font-medium"> 10+ Finished Projects</Typography>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className=" rounded-full bg-blue-700 w-24 h-24 flex items-center justify-center text-gray-100"><RiFileTransferLine size={50} /></div>
              <Typography className="text-gray-200 text-2xl font-medium"> OnTime Delivery</Typography>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="lg:max-w-screen-xl sm:max-w-screen-sm mx-auto ">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-700 font-semibold"># Our Service</p>
              <Typography variant="h2" className="font-extrabold">We Offer a Wide <br />Variety of IT Services</Typography>
            </div>
            <Button variant="gradient" color="blue" className="ml-auto">All Services</Button>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-x-10 gap-y-10 mt-10">
            <div className="flex items-start gap-5">
              <IoIosDesktop size={40} className="text-blue-900 w-36" />
              <div>
                <Typography variant="h5">Web Application Development</Typography>
                <p className="text-gray-800 text-base mt-3">We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <CiMobile3 size={40} className="text-blue-900 w-36" />
              <div>
                <Typography variant="h5">Mobile Application Development</Typography>
                <p className="text-gray-800 text-base mt-3">We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <FaFigma size={40} className="text-blue-900 w-36" />
              <div>
                <Typography variant="h5">UI/UX Design</Typography>
                <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <AiOutlineFileSearch size={40} className="text-blue-900 w-36" />
              <div>
                <Typography variant="h5">QA & Testing</Typography>
                <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <TbMessageReport size={40} className="text-blue-900 w-36" />
              <div>
                <Typography variant="h5">IT Counsultancy</Typography>
                <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <IoPeopleOutline size={40} className="text-blue-900 w-36" />
              <div>
                <Typography variant="h5">Dedicated Team</Typography>
                <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="bg-gray-900 pt-20 py-20">
        <div className="lg:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md mx-auto">
          <div>
            <h6 className="text-xs bg-gray-600/30 text-white rounded-sm px-2 py-1 w-fit">All demo are included</h6>
            <h2 className="text-3xl font-medium mt-3 text-gray-200 mb-7">
              Project Preview
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8">
            {projectData.map((project, index) => (
              <ProjectCard key={index} data={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="lg:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md mx-auto">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            <div className="flex flex-col justify-between lg:gap-0 sm:gap-10 bg-black/90 text-gray-200 lg:rounded-s-xl lg:rounded-e-none sm:rounded-t-xl p-10">
              <div>
                <Typography variant="h3" className="pb-3 lg:text-3xl sm:text-2xl">
                  Have a project in mind?
                </Typography>
                <p>
                  Let us turn your ideas into reality. Let&rsquo;s collaborate to build something remarkable and achieve success together.
                </p>
              </div>
              <Link href="/contact-us">
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
              </Link>
            </div>
            <div>
              <img src="/images/service_page_img1.webp" alt="images" className="lg:rounded-e-xl lg:rounded-b-none sm:rounded-b-xl" />
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
