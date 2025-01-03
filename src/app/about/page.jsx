import Image from 'next/image'
import React from 'react'
import { TfiLayers } from "react-icons/tfi";
import { SlBadge, SlGraph, SlLayers } from "react-icons/sl";
import { BsClipboard2Check } from 'react-icons/bs';
import Link from 'next/link';

const About = () => {
    return (
        <>
            <section className="relative h-full z-0 lg:py-36 sm:pt-20 sm:pb-16 bg-[url('/images/bg.webp')] bg-cover bg-center bg-fixed bg-no-repeat">
                <div className="text-white lg:max-w-screen-lg sm:max-w-screen-sm mx-auto text-center">
                    <p className='bg-gray-600/30 text-white p-2 w-fit mx-auto lg:text-sm sm:text-xs rounded-md'>About Us</p>
                    <h1 className="lg:text-4xl sm:text-2xl font-medium my-4">Providing Best IT Solutions</h1>
                    <p className="lg:text-sm sm:text-sm text-gray-400 leading-6 lg:px-72 sm:px-0">
                        Seamlessly combining captivating designs and innovative elements, GoSolutions enables you to effortlessly build a professional website that stands out and makes an impact.
                    </p>
                </div>
            </section>

            <section className='lg:max-w-screen-lg sm:max-w-screen-sm mx-auto py-20'>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-x-20 gap-y-10'>
                    <div className='relative'>
                        <Image src="/images/thumb1.webp" alt="about image" width={500} height={500} className="" />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='lg:text-4xl sm:text-2xl text-gray-900 font-medium'>Exclusive Technology for IT Solutions</h1>
                        <p className='text-base'>
                            At GoSolutions, we harness cutting-edge technology to deliver innovative IT solutions tailored to your business needs. With our expertise, you can create unique, high-performing websites with ease. Each solution is highly customizable, allowing you to refine every aspect of your website&apos;s appearance with just a few clicks.
                        </p>
                        <ul className="list-none text-base flex flex-col gap-7">
                            <li className="flex items-center lg:gap-3 sm:gap-5">
                                <div className="w-14 aspect-square bg-blue-900 text-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <TfiLayers size={30} />
                                </div>
                                <div>
                                    <h2 className="lg:text-xl sm:text-lg font-medium text-gray-900">Scalable IT Infrastructure</h2>
                                    <p>Build custom reports and dashboards effortlessly, ensuring your IT setup grows with your business.</p>
                                </div>
                            </li>
                            <li className="flex items-center lg:gap-3 sm:gap-5">
                                <div className="w-14 aspect-square bg-blue-900 text-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <SlBadge size={30} />
                                </div>
                                <div>
                                    <h2 className="lg:text-xl sm:text-lg font-medium text-gray-900">Industry Expertise</h2>
                                    <p>Benefit from solutions backed by years of experience and a deep understanding of IT challenges across industries</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='py-20 bg-gray-100'>
                <div className='lg:max-w-screen-lg sm:max-w-screen-sm mx-auto'>
                    <div className='text-center'>
                        <p className='text-blue-900 font-medium uppercase text-md pb-3'>Our Process</p>
                        <h2 className='lg:text-3xl sm:text-xl font-medium'>Comprehensive IT solutions, <br /> customized to drive your business forward</h2>
                        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-x-10 gap-y-10 mt-14'>
                            <div className='relative border-2 pb-14 pt-7 px-5 border-gray-500 rounded-xl flex flex-col items-center justify-center gap-5 hover:bg-gray-900 hover:text-gray-100 transition delay-75 ease-in-out group'>
                                <div className='border border-blue-900 text-blue-900 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-blue-900 group-hover:text-gray-100 transition delay-75 ease-in-out'><BsClipboard2Check size={30} /></div>
                                <h4 className='text-xl font-medium'>Assessment</h4>
                                <p>Gain insights into your unique requirements with our detailed analysis and consultation process.</p>
                                <div className='absolute -bottom-5 w-14 h-14 rounded-full bg-gray-900 text-gray-100 flex items-center justify-center text-xl'>01</div>
                            </div>
                            <div className='relative border-2 pb-14 pt-7 px-5 border-gray-500 rounded-xl flex flex-col items-center justify-center gap-5 hover:bg-gray-900 hover:text-gray-100 transition delay-75 ease-in-out group'>
                                <div className='border border-blue-900 text-blue-900 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-blue-900 group-hover:text-gray-100 transition delay-75 ease-in-out'><SlLayers size={30} /></div>
                                <h4 className='text-xl font-medium'>Implementation</h4>
                                <p>Experience a seamless setup of tailored solutions that align with your business goals.</p>
                                <div className='absolute -bottom-5 w-14 h-14 rounded-full bg-gray-900 text-gray-100 flex items-center justify-center text-xl'>02</div>
                            </div>
                            <div className='relative border-2 pb-14 pt-7 px-5 border-gray-500 rounded-xl flex flex-col items-center justify-center gap-5 hover:bg-gray-900 hover:text-gray-100 transition delay-75 ease-in-out group'>
                                <div className='border border-blue-900 text-blue-900 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-blue-900 group-hover:text-gray-100 transition delay-75 ease-in-out'><SlGraph size={30} /></div>
                                <h4 className='text-xl font-medium'>Optimization</h4>
                                <p>Maximize efficiency with ongoing improvements and support, ensuring your IT infrastructure performs at its best.</p>
                                <div className='absolute -bottom-5 w-14 h-14 rounded-full bg-gray-900 text-gray-100 flex items-center justify-center text-xl'>03</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-20 bg-[url('/images/services_bg.webp')] bg-cover bg-center bg-fixed">
                <div className='lg:max-w-screen-lg sm:max-w-screen-sm mx-auto'>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                        <div className='bg-black/60 py-10 px-5 flex flex-col gap-5 rounded-lg'>
                            <h2 className='lg:text-3xl sm:text-2xl text-gray-100'>Partner with Us for Seamless IT Solutions</h2>
                            <p className='text-gray-300 text-sm'>Take your business to the next level with GoSolutions as your trusted IT partner. Our dedicated team ensures your IT systems are robust, efficient, and scalable, helping you focus on what truly matters—growing your business</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-20 bg-gray-50'>
                <div className='lg:max-w-screen-lg sm:max-w-screen-sm mx-auto'>
                    <div className='text-center text-gray-900'>
                        <h2 className='lg:text-3xl sm:text-2xl font-medium pb-3'>Ready to elevate your business?</h2>
                        <p>Contact us today and let us help you achieve success with seamless IT solutions.</p>
                    </div>
                    <div className='text-center pt-10'>
                        <Link href={"/contact-us"}>
                            <button className='px-5 py-2 mb-5 hover:shadow-xl bg-blue-900 text-gray-100 rounded-3xl w-fit mx-auto text-base font-medium flex items-center gap-2'>
                                Contact Us Now
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
                            </button>
                        </Link>
                        <span>to discuss your IT needs and discover how we can help your business shine!</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About