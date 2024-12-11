import Image from 'next/image'
import React from 'react'
import { FaCheck, FaCode } from 'react-icons/fa'

const About = () => {
    return (
        <>
            <section className="relative h-full z-0 lg:py-36 sm:pt-20 sm:pb-16 bg-[url('/images/bg.webp')] bg-cover bg-center bg-fixed bg-no-repeat">
                <div className="text-white lg:max-w-screen-xl sm:max-w-screen-sm mx-auto text-center">
                    <p className='bg-gray-600/30 text-white p-2 w-fit mx-auto text-sm rounded-md'>About Us</p>
                    <h1 className="lg:text-4xl sm:text-2xl font-semibold my-4">Providing Best IT Solutions</h1>
                    <p className="lg:text-base sm:text-sm text-gray-400 leading-6 lg:px-72 sm:px-0">
                        UpTech guarantees the highest standards in coding and design practices. Seamlessly integrating stunning styles and elements, UpTech empowers you to effortlessly create a professional website that truly shines.
                    </p>
                </div>
            </section>

            {/* <section className="relative lg:max-w-screen-xl sm:max-w-screen-sm rounded-3xl mx-auto h-ful py-16 my-10 z-0 bg-[url('/images/black_pattern.jpg')] bg-cover bg-fixed bg-no-repeat">
                <div className="text-white lg:p-10 sm:p-5 text-center">
                    <p className='bg-gray-600/40 p-2 w-fit mx-auto text-xs rounded-md'>Our Vision</p>
                    <h1 className="lg:text-4xl sm:text-2xl font-semibold my-4">Trusted By Business</h1>
                    <p className="mb-6 text-gray-400 leading-6 lg:w-9/12 sm:w-full lg:text-base sm:text-sm mx-auto">
                        We aspire to create a digital landscape where technology seamlessly enhances productivity, connectivity, and sustainability, fostering a brighter, more efficient, and inclusive future for all.
                    </p>
                    <button className='px-3 py-2 text-sm rounded-md bg-blue-700 border hover:bg-transparent text-gray-200 border-blue-700'>Lets Work Together.</button>
                </div>
            </section> */}

            <section className='lg:max-w-screen-xl sm:max-w-screen-sm mx-auto py-20'>
                <div className='grid grid-cols-2 items-center'>
                    <div className='mr-20 relative'>
                        <Image src="/images/thumb1.webp" alt="about image" width={500} height={500} className="z-10 bg-cover w-[80%]" />
                        <div className='absolute -right-24 -bottom-10'>
                            <Image src="/images/thumb2.webp" alt="about image" width={500} height={500} className="z-20 bg-cover w-[70%]" />
                        </div>
                        <div className='absolute right-10 top-[70px] -z-10'>
                            <Image src="/images/shape1.svg" alt="about image" width={133} height={200} className="bg-cover" />
                        </div>
                        <div className='absolute left-36 -bottom-[70px] -z-10'>
                            <Image src="/images/shape2.svg" alt="about image" width={104} height={107} className="bg-cover" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-4xl text-blue-900 font-semibold'>Exclusive technology to provide IT solutions</h1>
                        <p className='text-base'>
                            Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.
                        </p>
                        <ul className='list-none text-base leading-8'>
                            <li className='flex items-center gap-3'><FaCheck className='text-blue-900' />Easily Build Custom Reports And Dashboards</li>
                            <li className='flex items-center gap-3'><FaCheck className='text-blue-900' />Legacy Software Modernization</li>
                            <li className='flex items-center gap-3'><FaCheck className='text-blue-900' />Software For The Open Enterprise</li>
                            <li className='flex items-center gap-3'><FaCheck className='text-blue-900' />Software For The Open Enterprise</li>
                            <li className='flex items-center gap-3'><FaCheck className='text-blue-900' />Software For The Open Enterprise</li>
                        </ul>
                        <button className='px-3 py-2 text-sm w-fit rounded-md bg-blue-700 border hover:bg-transparent text-gray-200 border-blue-700'>Lets Work Together.</button>
                    </div>
                </div>
            </section>

            <section className="relative bg-[url('/images/heroImg.jpg')] bg-cover bg-center bg-fixed bg-no-repeat my-20">
                <div className='absolute inset-0 bg-black opacity-75 z-0'></div>
                <div className='relative lg:max-w-screen-xl sm:max-w-screen-sm mx-auto z-10'>
                    <div className='py-20 grid grid-cols-2'>
                        <div className='flex flex-col'>
                            <p className='bg-gray-600/30 text-white p-2 w-fit text-xs rounded-md'>Why Choose Us</p>
                            <h2 className='text-4xl py-5 text-blue-700 font-medium'>We Bringing New IT Business Solutions And Ideas</h2>
                            <p className='pe-20 text-gray-200'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            </p>
                        </div>
                        <div className='grid grid-cols-2 grid-rows-2'>
                            <div className='flex items-center gap-5'>
                                <div className=''>
                                    <div className='w-20 h-20 rounded-full bg-gray-200 text-black flex items-center justify-center'><FaCode size={30} /></div>
                                    <h4 className='text-xl text-gray-200 w-full'>Web growths</h4>
                                </div>
                                <p className='text-sm text-gray-200'>Good knowledge becuase you something many times.</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <div className='w-20 h-20 rounded-full bg-gray-200 text-black flex items-center justify-center'><FaCode size={30} /></div>
                                <h4 className='text-xl text-gray-200'>Web growths</h4>
                            </div>
                            <div className='flex items-center gap-5'>
                                <div className='w-20 h-20 rounded-full bg-gray-200 text-black flex items-center justify-center'><FaCode size={30} /></div>
                                <h4 className='text-xl text-gray-200'>Web growths</h4>
                            </div>
                            <div className='flex items-center gap-5'>
                                <div className='w-20 h-20 rounded-full bg-gray-200 text-black flex items-center justify-center'><FaCode size={30} /></div>
                                <h4 className='text-xl text-gray-200'>Web growths</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About