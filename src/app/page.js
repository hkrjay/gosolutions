'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import { motion } from "motion/react"
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
  Input,
  Textarea,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoDiamondOutline, IoPeopleOutline } from 'react-icons/io5'
import { SlRocket } from "react-icons/sl";
import { GoCodeSquare } from "react-icons/go";
import GetStartedModal from './components/getStartedModal'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { homeServiceData, technologiesData } from './dummyData'
import { ToastPopup } from './components/toastPopup'
import { PostApi } from './lib/postapi'

export default function Home() {

  const nameRegex = /^[a-zA-Z\s]{3,30}$/
  const telRegex = /^\d{10}$/
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [open, setOpen] = useState(false);
  const [serviceActiveTab, setServiceActiveTab] = useState("web development");
  const [domainActiveTab, setDomainActiveTab] = useState('healthcare')
  const [technologyActiveTab, setTechnologyActiveTab] = useState('frontend')
  const [showToast, setShowToast] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    tel: '',
    email: '',
    message: ''
  })

  const handleFormValuesChange = (e) => {
    const { name, value } = e.target
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleResetForm = () => {
    setFormValues({
      name: '',
      tel: '',
      email: '',
      message: ''
    })
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    const url = 'http://localhost:4004/contact'
    const response = await PostApi(url, formValues)
    if (response.ok) {
      handleResetForm()
      setShowToast(true)
      setTimeout(() => {
        setShowToast(false)
      }, 3000)
    }
  }

  const handleOpen = () => setOpen(!open);


  const domainData = [
    {
      label: "healthcare",
      value: "healthcare",
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
      img: 'healthcare.jpg'
    },
    {
      label: "finance",
      value: "finance",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      img: 'finance.jpg'
    },
    {
      label: "ecommerce",
      value: "ecommerce",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      img: 'ecommerce.svg'
    },
    {
      label: "automotive",
      value: "automotive",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      img: 'automotive.svg'
    },
    {
      label: "real estate",
      value: "realestate",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      img: 'realestate.svg'
    },
    {
      label: "education",
      value: "education",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      img: 'education.svg'
    },
  ];

  return (
    <>
      <section className="relative bg-black/90 pt-20 pb-16 bg-[url('/images/home/herobanner2.jpg')]">
        <div className='absolute inset-0 bg-black opacity-90 z-0'></div>
        <div className='lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md mx-auto z-10 relative'>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:gap-x-10 sm:gap-y-10 items-center'>
            <div className='flex flex-col gap-5'>
              <h1 className='lg:text-4xl sm:text-2xl text-gray-100 leading-snug font-medium'>Empowering Your Vision with Tailored IT Solutions</h1>
              <p className='lg:text-base sm:text-sm text-gray-100'>Beyond exceptional coding, we deliver innovative strategies and solutions that drive success. Let our expertise transform your ideas into impactful digital experiences.</p>
              <Link href={"/contact-us"}>
                <button className='lg:px-5 lg:py-3 sm:px-3 sm:py-2 text-sm border border-blue-800 bg-blue-800 w-fit text-gray-100 rounded-lg'>Contact Us Now!</button>
              </Link>
            </div>
            <motion.div
              className='custom-shadow'
              initial={{ y: 0 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image src='/images/home/banner3.png' alt='banner' width={500} height={500} className='' />
            </motion.div>
          </div>
        </div>
      </section>

      <section className='bg-blue-900 pt-20 text-gray-100'>
        <div className='lg:max-w-screen-lg sm:max-w-screen-sm mx-auto'>
          <div className='grid lg:grid-cols-3 sm:grid-cols-1 sm:gap-y-10 gap-x-10'>
            <div>
              <h2 className='lg:text-6xl sm:text-4xl'>05+</h2>
              <div className='pl-3 flex items-center gap-2'><BsArrowReturnRight size={45} /> <h5 className='lg:text-2xl sm:text-xl'>year on <br /> the market</h5></div>
            </div>
            <div>
              <h2 className='lg:text-6xl sm:text-4xl'>20+</h2>
              <div className='pl-3 flex items-center gap-2'><BsArrowReturnRight size={45} /> <h5 className='lg:text-2xl sm:text-xl'>clients <br /> across cities</h5></div>
            </div>
            <div>
              <h2 className='lg:text-6xl sm:text-4xl'>10+</h2>
              <div className='pl-3 flex items-center gap-2'><BsArrowReturnRight size={45} /> <h5 className='lg:text-2xl sm:text-xl'>projects <br /> delivered</h5></div>
            </div>
          </div>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 pt-10 lg:pb-0 sm:pb-20 items-center'>
            <motion.div
              initial={{ y: 0 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image src='/images/home/img6.svg' alt='about gosolutions' width={469} height={469} className='w-11/12' />
            </motion.div>
            <div className="flex flex-col gap-3">
              <h2 className="lg:text-3xl sm:text-2xl">
                GoSolutions: Your Trusted Technology Partner
              </h2>
              <p className="lg:text-base sm:text-sm">
                At GoSolutions, we empower businesses to achieve operational efficiency through seamless digital transformation. From solution design to implementation and maintenance, we offer comprehensive software development services tailored to your unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-gray-100'>
        <div className='lg:max-w-screen-lg sm:max-w-screen-sm mx-auto'>
          <div className='flex items-center justify-between'>
            <h2 className='lg:text-4xl sm:text-2xl font-medium'>Services</h2>
            <Link href="/services" className="flex gap-2 items-center text-blue-700 text-base font-medium">
              All Services
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
            </Link>
          </div>
          <Tabs value={serviceActiveTab} orientation="vertical" className={`pt-10 gap-10 lg:flex-nowrap sm:flex-wrap`}>
            <TabsHeader
              className="w-52 bg-transparent border-l border-blue-900 rounded-none shadow-none"
              indicatorProps={{
                className:
                  "bg-transparent shadow-none rounded-none",
              }}
            >
              {homeServiceData.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setServiceActiveTab(value)}
                  className={`capitalize justify-start gap-5 shadow-none rounded-none  ${serviceActiveTab === value ? "font-semibold text-blue-900" : ""}`}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 100 },
                mount: { y: 0 },
                unmount: { y: 100 },
              }}
            >
              {homeServiceData.map(({ value, categories }) => (
                <TabPanel key={value} value={value} className="pt-0">
                  <h2 className='text-2xl text-gray-900 font-bold pt-0 capitalize pb-5'>{serviceActiveTab}</h2>
                  <div className='grid lg:grid-cols-2 sm:grid-cols-1 grid-rows-2 lg:gap-10 sm:gap-5'>
                    {categories.map(({ label, desc, value }) => (
                      <div key={value} className='border-b border-gray-900 px-2 pb-4'>
                        <h3 className='font-semibold text-md text-gray-900'>{label}</h3>
                        <p className='lg:text-base sm:text-sm'>{desc}</p>
                      </div>
                    ))}
                  </div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>

      </section>

      <section className='py-20 bg-gray-900'>
        <div className='lg:max-w-screen-lg sm:max-w-screen-sm mx-auto text-center'>
          <h2 className='text-blue-700 lg:text-4xl sm:text-2xl font-medium'>Smart strategy & excellent performance</h2>
          <p className='text-gray-100 pt-4 lg:text-base sm:text-sm'>Process that gurantees high productivity and profitablity for your solution</p>
          <div className='grid lg:grid-cols-3 sm:grid-cols-1 sm:gap-y-10 gap-x-10 mt-20'>
            <div className='flex flex-col items-center gap-7'>
              <div className='bg-gray-100 lg:w-24 lg:h-24 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-blue-900'><HiOutlineLightBulb size={55} className='' /></div>
              <div className='text-gray-100'>
                <h6 className='text-md font-medium'>Data Analysis</h6>
                <p className='text-gray-400 text-sm pt-3'>We conduct through data collection and analysis of your institution&rsquo;s current strenghts and differentiators.</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-7'>
              <div className='bg-gray-100 lg:w-24 lg:h-24 sm:w-20 sm:h-20  rounded-full flex items-center justify-center text-blue-900'><IoDiamondOutline size={55} className='' /></div>
              <div className='text-gray-100'>
                <h6 className='text-md font-medium'>Making Plan</h6>
                <p className='text-gray-400 text-sm pt-3'>We conduct through data collection and analysis of your institution&rsquo;s current strenghts and differentiators.</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-7'>
              <div className='bg-gray-100 lg:w-24 lg:h-24 sm:w-20 sm:h-20  rounded-full flex items-center justify-center text-blue-900'><SlRocket size={55} className='' /></div>
              <div className='text-gray-100'>
                <h6 className='text-md font-medium'>Deliver Result</h6>
                <p className='text-gray-400 text-sm pt-3'>We conduct through data collection and analysis of your institution&rsquo;s current strenghts and differentiators.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='lg:max-w-screen-lg sm:max-w-screen-sm mx-auto'>
          <h2 className='text-center lg:text-4xl sm:text-2xl font-medium'>We work on different domains</h2>
          <Tabs value={domainActiveTab} className="pt-10">
            <TabsHeader
              className="bg-transparent border-b border-gray-900 rounded-none shadow-none overflow-auto"
              indicatorProps={{
                className: "bg-transparent font-bold rounded-none shadow-none",
              }}
            >
              {domainData.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setDomainActiveTab(value)}
                  className={`capitalize justify-start gap-5 shadow-none rounded-none  ${domainActiveTab === value ? "font-semibold" : ""}`}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              className='lg:pt-0 sm:pt-10'
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 70 },
              }}
            >
              {domainData.map(({ label, value, desc, img }) => (
                <TabPanel key={value} value={value}>
                  <div className='grid lg:grid-cols-2 sm:grid-cols-1 sm:gap-y-10 gap-x-20 items-center'>
                    <div className='flex flex-col gap-7'>
                      <h3 className='capitalize text-2xl text-black font-medium'>{label}</h3>
                      <p>{desc}</p>
                    </div>
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    ><img src={`/images/home/${img}`} /></motion.div>
                  </div>

                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </section>

      <section className='py-20 bg-blue-900'>
        <div className='lg:max-w-screen-lg sm:max-w-screen-sm mx-auto'>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 sm:gap-y-14 gap-x-20 justify-between items-center'>
            <div className='flex flex-col gap-5'>
              <h2 className='lg:text-4xl sm:text-3xl text-gray-100'>Have a project in mind?</h2>
              <p className='text-gray-400 lg:text-base sm:text-sm'>Let us turn your ideas into reality. Let&rsquo;s collaborate to build something remarkable and achieve success together.</p>
              <Button variant="gradient" color='blue' className="bg-blue-700 w-fit" onClick={handleOpen}>Let&rsquo;s Get Started</Button>
            </div>
            <div className='grid grid-cols-2 grid-rows-2 lg:gap-10 sm:gap-5'>
              <div className='flex items-center gap-5 hover:shadow-xl px-3 py-2 group'>
                <IoPeopleOutline size={40} className='text-gray-100' />
                <div>
                  <h4 className='text-gray-100 text-3xl'>20+</h4>
                  <p className='text-gray-400 text-sm group-hover:text-gray-50'>Team Memebers</p>
                </div>
              </div>
              <div className='flex items-center gap-5 hover:shadow-xl px-3 py-2 group'>
                <GoCodeSquare size={40} className='text-gray-100' />
                <div>
                  <h4 className='text-gray-100 text-3xl'>7+</h4>
                  <p className='text-gray-400 text-sm group-hover:text-gray-50'>years of Experience</p>
                </div>
              </div>
              <div className='flex items-center gap-5 hover:shadow-xl px-3 py-2 group'>
                <IoPeopleOutline size={40} className='text-gray-100' />
                <div>
                  <h4 className='text-gray-100 text-3xl'>10+</h4>
                  <p className='text-gray-400 text-sm group-hover:text-gray-50'>Team Memebers</p>
                </div>
              </div>
              <div className='flex items-center gap-5 hover:shadow-xl px-3 py-2 group'>
                <IoPeopleOutline size={40} className='text-gray-100' />
                <div>
                  <h4 className='text-gray-100 text-3xl'>10+</h4>
                  <p className='text-gray-400 text-sm group-hover:text-gray-50'>Team Memebers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-gray-100'>
        <div className='lg:max-w-screen-lg sm:max-w-screen-sm mx-auto'>
          <div className='flex items-center justify-between'>
            <h2 className='lg:text-4xl sm:text-2xl text-gray-900 font-medium'>Techonologies</h2>
            <Link href={"/services"} target='_blank' className='flex items-center gap-2 text-blue-700 font-medium text-base'>
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
            </Link>
          </div>
          <Tabs value={technologyActiveTab} orientation="vertical" className={`pt-10 gap-10 lg:flex-nowrap sm:flex-wrap`}>
            <TabsHeader
              className="w-52 bg-transparent border-l border-blue-900 rounded-none shadow-none"
              indicatorProps={{
                className:
                  "bg-transparent shadow-none rounded-none",
              }}
            >
              {technologiesData.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setTechnologyActiveTab(value)}
                  className={`capitalize justify-start gap-5 shadow-none rounded-none  ${technologyActiveTab === value ? "font-semibold text-blue-900" : ""}`}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 0 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              <TabPanel value={technologyActiveTab} className='lg:text-2xl sm:text-xl text-gray-900 font-bold pt-0 capitalize'>{technologyActiveTab} Development Technologies</TabPanel>
              {technologiesData.map(({ value, categories }) => (
                <TabPanel key={value} value={value} className="">
                  <div className='grid lg:grid-cols-2 sm:grid-cols-1 grid-rows-2 gap-10'>
                    {categories.map(({ label, desc, value, img }) => (
                      <div key={value} className='border-b border-gray-900 px-2 pb-4'>
                        <h3 className='flex items-center gap-2 font-semibold text-md text-gray-900 capitalize'>
                          {label}
                          <Image src={`/images/home/${img}`} alt={value} width={30} height={30} />
                        </h3>
                        <p className=''>{desc}</p>
                      </div>
                    ))}
                  </div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </section>

      <section className='py-20 bg-gray-900'>
        <div className='lg:max-w-screen-lg sm:max-w-screen-sm mx-auto'>
          <h2 className='text-center lg:text-4xl sm:text-3xl font-medium text-gray-100 mb-10'>Recent Projects</h2>

          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
            keyboard
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <div className="relative group bg-[url('/images/projectSS/savemaxweb.png')] w-full h-80 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg overflow-hidden">
                <div className="absolute top-5 right-5 bg-red-100 text-red-900 px-3 py-1 text-xs font-medium rounded-xl shadow-md">Real Estate</div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-gray-900 bg-opacity-60 backdrop-blur-sm text-gray-100 rounded-t-lg transition-transform duration-300 transform group-hover:translate-y-0 translate-y-full">
                  <h3 className="text-xl font-bold">Save Max</h3>
                  <p className="text-sm mt-2 line-clamp-2">Save Max makes it effortless for you to search for Real Estate and MLS Listings in Canada.</p>
                  <Link href="https://savemax.com/" target='_blank'><Button size='sm' className="mt-4 capitalize bg-blue-900 text-sm">Preview</Button></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative group bg-[url('/images/projectSS/platinumV.png')] w-full h-80 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg overflow-hidden">
                {/* <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/50 transition-opacity duration-300 group-hover:opacity-80"></div> */}
                <div className="absolute top-5 right-5 bg-amber-50 text-amber-900 px-3 py-1 text-xs font-medium rounded-xl shadow-md">Digital Marketing</div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-gray-900 bg-opacity-60 backdrop-blur-sm text-gray-100 rounded-t-lg transition-transform duration-300 transform group-hover:translate-y-0 translate-y-full">
                  <h3 className="text-xl font-bold">Platinum Visionaries</h3>
                  <p className="text-sm mt-2 line-clamp-2">Platinum Visionaries experience the transformation of your skill set, paving the way for sustained success in the realm of digital marketing,</p>
                  <Link href="https://platinumvisionaries.com/" target='_blank'><Button size='sm' className="mt-4 capitalize bg-blue-900 text-sm">Preview</Button></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative group bg-[url('/images/projectSS/savemaxweb.png')] w-full h-80 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg overflow-hidden">
                <div className="absolute top-5 right-5 bg-red-100 text-red-900 px-3 py-1 text-xs font-medium rounded-xl shadow-md">Real Estate</div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-gray-900 bg-opacity-60 backdrop-blur-sm text-gray-100 rounded-t-lg transition-transform duration-300 transform group-hover:translate-y-0 translate-y-full">
                  <h3 className="text-xl font-bold">Save Max</h3>
                  <p className="text-sm mt-2 line-clamp-2">Save Max makes it effortless for you to search for Real Estate and MLS Listings in Canada.</p>
                  <Link href="https://savemax.com/" target='_blank'><Button size='sm' className="mt-4 capitalize bg-blue-900 text-sm">Preview</Button></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative group bg-[url('/images/home/herobanner2.jpg')] w-full h-80 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/50 transition-opacity duration-300 group-hover:opacity-80"></div>
                <div className="absolute top-5 right-5 bg-amber-50 text-amber-900 px-3 py-1 text-xs font-medium rounded-xl shadow-md">Digital Marketing</div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-900 bg-opacity-60 backdrop-blur-sm text-gray-100 rounded-t-lg transition-transform duration-300 transform group-hover:translate-y-0 translate-y-full">
                  <h3 className="text-xl font-bold">Platinum Visionaries</h3>
                  <p className="text-sm mt-2 line-clamp-2">Platinum Visionaries experience the transformation of your skill set, paving the way for sustained success in the realm of digital marketing,</p>
                  <Link href="https://platinumvisionaries.com/" target='_blank'><Button size='sm' className="mt-4 capitalize bg-blue-900 text-sm">Preview</Button></Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="relative group bg-[url('/images/projectSS/savemaxweb.png')] w-full h-80 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/50 transition-opacity duration-300 group-hover:opacity-80"></div>
              <div className="absolute top-5 right-5 bg-red-100 text-red-900 px-3 py-1 text-xs font-medium rounded-xl shadow-md">Real Estate</div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-900 bg-opacity-60 backdrop-blur-sm text-gray-100 rounded-t-lg transition-transform duration-300 transform group-hover:translate-y-0 translate-y-full">
                <h3 className="text-xl font-bold">Save Max</h3>
                <p className="text-sm mt-2 line-clamp-2">Save Max makes it effortless for you to search for Real Estate and MLS Listings in Canada.</p>
                <Link href="https://savemax.com/" target='_blank'><Button size='sm' className="mt-4 capitalize bg-blue-900 text-sm">Preview</Button></Link>
              </div>
            </div>
            <div className="relative group bg-[url('/images/projectSS/platinumV.png')] w-full h-80 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/50 transition-opacity duration-300 group-hover:opacity-80"></div>
              <div className="absolute top-5 right-5 bg-amber-50 text-amber-900 px-3 py-1 text-xs font-medium rounded-xl shadow-md">Digital Marketing</div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-900 bg-opacity-60 backdrop-blur-sm text-gray-100 rounded-t-lg transition-transform duration-300 transform group-hover:translate-y-0 translate-y-full">
                <h3 className="text-xl font-bold">Platinum Visionaries</h3>
                <p className="text-sm mt-2 line-clamp-2">Platinum Visionaries experience the transformation of your skill set, paving the way for sustained success in the realm of digital marketing,</p>
                <Link href="https://platinumvisionaries.com/" target='_blank'><Button size='sm' className="mt-4 capitalize bg-blue-900 text-sm">Preview</Button></Link>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section className='py-20 bg-gray-100'>
        <div className='lg:max-w-screen-lg sm:max-w-screen-sm mx-auto'>
          <div className='text-gray-900 text-center'>
            <h2 className='lg:text-3xl sm:text-xl font-medium'>Two working days response time</h2>
            <p className='lg:text-base sm:text-sm pt-3'>if you want urgent meeting direct call to us.........</p>
          </div>
          <div className='shadow-md lg:px-7 sm:px-5 py-5 lg:mt-10 sm:mt-5'>
            <div className=''>
              <h5 className='text-xl font-medium'>Start a conversation</h5>
              <p className='lg:text-base sm:text-sm pt-2'>We&rsquo;d like to hear from you. Use the contact form below and we&rsquo;ll get back to you shortly.</p>
            </div>
            <form method='POST' onSubmit={handleSubmitForm}>
              <div className='grid lg:grid-cols-3 sm:grid-cols-1 sm:gap-y-5 gap-x-5 pt-5'>
                <Input
                  type='text'
                  label="Full Name"
                  color="blue"
                  name='name'
                  maxLength={30}
                  value={formValues.name}
                  error={formValues.name.length > 0 ? !nameRegex.test(formValues.name) : false}
                  onChange={handleFormValuesChange}
                  required
                />
                <Input
                  label="Email"
                  name='email'
                  color="blue"
                  maxLength={50}
                  value={formValues.email}
                  error={formValues.email.length > 0 ? !emailRegex.test(formValues.email) : false}
                  onChange={handleFormValuesChange}
                  required
                />
                <Input
                  type='tel'
                  name='tel'
                  pattern="[0-9]*"
                  inputMode="numeric"
                  color="blue"
                  maxLength={10}
                  error={formValues.tel.length > 0 ? !telRegex.test(formValues.tel) : false}
                  label="Contact Number"
                  value={formValues.tel}
                  onChange={handleFormValuesChange}
                />
              </div>
              <div className="mt-7">
                <Textarea
                  label="How can we help you?"
                  className=''
                  name='message'
                  color="blue"
                  value={formValues.message}
                  onChange={handleFormValuesChange}
                />
              </div>
              {/* <Checkbox
                color='blue'
                label={
                  <Typography color="blue-gray" className="lg:text-base sm:text-sm font-medium">
                    I agree with the
                    <Link
                      href={"/terms&conditions"}
                      className="font-medium transition-colors text-blue-700"
                    >
                      &nbsp;terms and conditions
                    </Link>
                    .
                  </Typography>
                }
              /> */}
              <div className='flex items-center mt-5 gap-5 justify-end'>
                <Button type='button' variant="outlined" color='red' onClick={handleResetForm}>Reset</Button>
                <Button
                  type='submit'
                  variant="filled"
                  color='blue'
                  className='bg-blue-900'
                  disabled={!nameRegex.test(formValues.name) || !emailRegex.test(formValues.email)}
                >
                  Send Request
                </Button>
              </div>
            </form>
          </div>
        </div>

      </section>

      <section className="bg-gray-900 py-20">
        <div className='lg:max-w-screen-xl sm:max-w-screen-sm mx-auto'>
          <div className='flex flex-col lg:gap-7 sm:gap-7 text-center text-gray-100'>
            <Typography variant='h1' className='lg:text-4xl sm:text-3xl'>Let&rsquo;s work together</Typography>
            <p className='lg:text-sm sm:text-sm'>Each demo built with Teba will look different. You can customize anything <br /> appearance of your website with only a few clicks</p>
            <Button size='sm' className='w-fit mx-auto bg-blue-900 capitalize text-sm shadow-animate'>Let&rsquo;s Start a Project</Button>
          </div>
        </div>
      </section>

      <GetStartedModal open={open} handleOpen={handleOpen} />
      {showToast && <div className='fixed top-20 right-5 z-50'><ToastPopup message={"Your Response has submitted. We will contact you soon."} /></div>}
    </>
  )
}
