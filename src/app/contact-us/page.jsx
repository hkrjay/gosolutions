'use client'

import { Button, Input, Textarea, Typography } from '@material-tailwind/react';
import React from 'react'
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { BsPinMap } from "react-icons/bs";
import { AccordionComponent } from '../components/accordionComponent';

const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="relative h-full z-0 bg-[url('/images/contact_bg.webp')] bg-cover bg-center bg-fixed bg-no-repeat">
        <div className="absolute inset-0 bg-black/30 -z-10"></div>
        <div className="text-white lg:max-w-screen-xl sm:max-w-screen-sm mx-auto text-center z-10 lg:py-36 sm:pt-20 sm:pb-16">
          <p className='bg-gray-600/30 p-2 w-fit mx-auto text-sm'>Contact Us</p>
          <h1 className="lg:text-4xl sm:text-2xl font-semibold my-4">We&rsquo;re here to help you</h1>
          {/* <p className="text-base mb-6 text-gray-400 leading-6 px-44">
            UpTech guarantees the highest standards in coding and design practices. Seamlessly integrating stunning styles and elements, UpTech empowers you to effortlessly create a professional website that truly shines.
          </p> */}
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 w-full bottom-0'>
          <div className='flex items-center gap-5 bg-[#1D1D1F] text-gray-200 px-5 py-3'>
            <MdOutlineLocalPhone size={30} className='text-blue-700' />
            <div>
              <Typography variant='h6'>Phone</Typography>
              <Typography variant='paragraph' className='text-xs font-normal'>+918439202910</Typography>
            </div>
          </div>
          <div className='flex items-center gap-5 bg-[#232627] text-gray-200 px-5 py-3'>
            <MdOutlineMailOutline size={30} className='text-blue-700' />
            <div>
              <Typography variant='h6'>Email</Typography>
              <Typography variant='paragraph' className='text-xs font-normal'>jaigupta1042@gmail.com</Typography>
            </div>
          </div>
          <div className='flex items-center gap-5 bg-[#303030] text-gray-200 px-5 py-3'>
            <BsPinMap size={30} className='text-blue-700' />
            <div>
              <Typography variant='h6'>Address</Typography>
              <Typography variant='paragraph' className='text-xs font-normal'>100 S Main St, Los Angeles, CA</Typography>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-50 py-20">
        <div className='lg:max-w-screen-lg sm:max-w-screen-sm mx-auto shadow-lg lg:p-10 sm:p-7'>
          <h2 className='text-center font-medium mb-10 lg:text-4xl sm:text-2xl'>Send us a message</h2>
          <form className='' name="contact" netlify>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-x-10 sm:gap-y-5'>
              <div>
                <div className=''><Input type='text' color="blue" size='lg' label="Name" shrink={true} /></div>
                <div className='mt-5'><Input type='email' color="blue" size='lg' label="Email" shrink={true} /></div>
                <div className='mt-5'><Input type='tel' color="blue" size='lg' label="Number" shrink={true} /></div>
              </div>
              <Textarea label="Message" color='blue' size='lg' shrink={true} />
            </div>
            <Button type="submit" variant="gradient" className='mt-5'>Send Message</Button>
          </form>
        </div>
      </section>

      <section className='lg:max-w-screen-xl sm:max-w-screen-sm mx-auto py-10'>
        <h2 className='mb-4 text-center lg:text-4xl sm:text-2xl font-medium'>Frequently Ask Questions</h2>
        <AccordionComponent />
      </section>
    </>
  )
}

export default ContactUs