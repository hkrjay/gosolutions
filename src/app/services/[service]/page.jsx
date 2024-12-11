'use client'

import { tabData } from '@/app/dummyData'
import { Tab, Tabs, TabsBody, TabsHeader, Typography, TabPanel, Button } from '@material-tailwind/react'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Service = () => {
    return (
        <>
            <section className="relative h-full z-0 lg:py-24 sm:pt-20 sm:pb-16 bg-[url('/images/web_dev_bg.jpg')] bg-cover bg-center bg-fixed bg-no-repeat">
                <div className='absolute inset-0 bg-black opacity-70 z-0'></div>
                <div className="text-white lg:max-w-screen-xl sm:max-w-screen-sm mx-auto text-center relative z-10">
                    <p className='bg-gray-600/30 text-white p-2 w-fit mx-auto text-sm rounded-md'>Service</p>
                    <h1 className="lg:text-4xl sm:text-2xl font-semibold my-4">Web Development</h1>
                    <p className="lg:text-base sm:text-sm text-gray-400 leading-6 lg:px-72 sm:px-0">
                        UpTech guarantees the highest standards in coding and design practices. Seamlessly integrating stunning styles and elements, UpTech empowers you to effortlessly create a professional website that truly shines.
                    </p>
                </div>
            </section>

            <section className='pt-20 bg-gray-100'>
                <div className='lg:max-w-screen-xl sm:max-w-screen-sm mx-auto'>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 items-center'>
                        <img src='/images/sub_service_img.png' />
                        <div>
                            <p className='text-sm text-blue-900 font-medium sm:mt-10 lg:mt-0'>// About Service</p>
                            <Typography variant='h2' className='font-extrabold lg:text-4xl sm:text-3xl'>We Provide Best <br /> Web Development</Typography>
                            <div className='grid grid-cols-2 grid-rows-2 gap-y-10 gap-x-10 mt-10'>
                                <div className=''>
                                    <p className='text-blue-900 font-semibold'>01.</p>
                                    <Typography variant='h5' className='py-3'>Vanilla JS</Typography>
                                    <p className='text-gray-700'>We're committed to building sustainable and high-quality Java solutions.</p>
                                </div>
                                <div className=''>
                                    <p className='text-blue-900 font-semibold'>02.</p>
                                    <Typography variant='h5' className='py-3'>React.js</Typography>
                                    <p className='text-gray-700'>We're committed to building sustainable and high-quality Java solutions.</p>
                                </div>
                                <div className=''>
                                    <p className='text-blue-900 font-semibold'>03.</p>
                                    <Typography variant='h5' className='py-3'>Next.js</Typography>
                                    <p className='text-gray-700'>We're committed to building sustainable and high-quality Java solutions.</p>
                                </div>
                                <div className=''>
                                    <p className='text-blue-900 font-semibold'>04.</p>
                                    <Typography variant='h5' className='py-3'>Vue.js</Typography>
                                    <p className='text-gray-700'>We're committed to building sustainable and high-quality Java solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-gray-100 py-20'>
                <div className='lg:max-w-screen-xl sm:max-w-screen-sm mx-auto'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 sm:grid-rows-3 sm:gap-y-10 lg:grid-rows-1'>
                        <div className='flex items-center gap-5 border border-gray-300 hover:shadow-2xl transition-shadow delay-200 ease-linear w-fit lg:py-7 lg:pr-20 lg:pl-10 sm:pl-5 sm:pr-16 relative'>
                            <span className='absolute -right-[6px] -bottom-[6px] text-6xl font-bold text-gray-300 opacity-50'>01</span>
                            <div className='w-10 h-10 bg-indigo-700 text-white flex items-center justify-center rounded-full'><FaCheck size={20} /></div>
                            <div>
                                <Typography variant='h5' className='lg:text-xl sm:text-lg'>Machine Learning</Typography>
                                <p>Support and Evolution</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 border border-gray-300  hover:shadow-2xl transition-shadow delay-200 w-fit lg:py-7 lg:pr-20 lg:pl-10 sm:pl-5 sm:py-5 sm:pr-14 relative'>
                            <span className='absolute -right-[6px] -bottom-[6px] text-6xl font-bold text-gray-300 opacity-50'>02</span>
                            <div className='w-10 h-10 bg-indigo-700 text-white flex items-center justify-center rounded-full'><FaCheck size={20} /></div>
                            <div>
                                <Typography variant='h5' className='lg:text-xl sm:text-lg'>Artificial Intelligence</Typography>
                                <p>Support and Evolution</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 border border-gray-300  hover:shadow-2xl transition-shadow delay-200 w-fit lg:py-7 lg:pr-20 lg:pl-10 sm:pl-5 sm:py-5 sm:pr-16 relative'>
                            <span className='absolute -right-[6px] -bottom-[6px] text-6xl font-bold text-gray-300 opacity-50'>03</span>
                            <div className='w-10 h-10 bg-indigo-700 text-white flex items-center justify-center rounded-full'><FaCheck size={20} /></div>
                            <div>
                                <Typography variant='h5' className='lg:text-xl sm:text-lg'>Augmented Reality</Typography>
                                <p>Support and Evolution</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex lg:flex-row sm:flex-col items-center mb-20 bg-[#211E3B] text-gray-100 sm:pt-20 lg:py-0'>
                <div className='lg:max-w-screen-xl sm:max-w-screen-sm mx-auto'>
                    <p className='uppercase lg:text-lg sm:text-base text-[#8E88B8]'># technology index</p>
                    <Typography variant='h1' className='pt-2 pb-7 lg:text-5xl sm:text-3xl'>We Organize Our <br />Production Process</Typography>
                    <Tabs id="custom-animation" value="analysis" className="max-w-[40rem]">
                        <TabsHeader
                            className="bg-transparent"
                            indicatorProps={{
                                className: "bg-blue-700 shadow-none",
                            }}
                        >
                            {tabData.map(({ label, value }) => (
                                <Tab key={value} value={value} className='uppercase text-gray-200'>
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody
                            animate={{
                                initial: { y: 250 },
                                mount: { y: 0 },
                                unmount: { y: 250 },
                            }}
                        >
                            {tabData.map(({ value, desc }) => (
                                <TabPanel key={value} value={value} className='text-gray-400'>
                                    {desc}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>
                <div className='lg:w-1/2 sm:w-full sm:pt-10 lg:pt-0'>
                    <img src='/images/bg1-service.jpg' className='bg-cover bg-no-repeat' />
                </div>
            </section>

            <section className="bg-[url('/images/blue-bg.png')] py-20 mb-20">
                <div className='lg:max-w-screen-xl sm:max-w-screen-sm mx-auto'>
                    <div className='flex flex-col ;g:gap-5 sm:gap-7 text-center text-gray-100'>
                        <Typography variant='h1' className='lg:text-5xl sm:text-3xl'>Let's work together</Typography>
                        <p className='lg:text-base sm:text-sm'>Each demo built with Teba will look different. You can customize anything <br /> appearance of your website with only a few clicks</p>
                        <Button className='w-fit mx-auto bg-blue-700 py-4 capitalize text-sm shadow-animate'>Let's Start a Project</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service