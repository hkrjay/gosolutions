'use client'

import { Button, Input, Textarea, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { BsPinMap } from "react-icons/bs";
import { AccordionComponent } from '../components/accordionComponent';
import { PostApi } from '../lib/postapi';
import { ToastPopup } from '../components/toastPopup';

const ContactUs = () => {

  const nameRegex = /^[a-zA-Z\s]{3,30}$/
  const telRegex = /^\d{10}$/
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [values, setValues] = useState({
    username: '',
    useremail: '',
    usernumber: '',
    usermessage: ''
  })
  const [showToast, setShowToast] = useState(false)

  const clearValues = () => {
    setValues({
      username: '',
      useremail: '',
      usernumber: '',
      usermessage: ''
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = 'http://localhost:4004/contact'
    const payload = {
      name: values.username,
      email: values.useremail,
      tel: values.usernumber,
      message: values.usermessage
    }
    const response = await PostApi(url, payload)
    if (response.ok) {
      clearValues()
      setShowToast(true)
      setTimeout(() => {
        setShowToast(false)
      }, 3000)
    }
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
          <form className='' onSubmit={handleSubmit}>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-x-10 sm:gap-y-5'>
              <div>
                <Input
                  type='text'
                  name='username'
                  color="blue"
                  size='lg'
                  label="Full Name"
                  minLength={3}
                  maxLength={30}
                  error={values.username.length > 0 ? !nameRegex.test(values.username) : false}
                  value={values.username}
                  onChange={handleChange}
                  required
                />
                <div className='mt-5'>
                  <Input
                    type='email'
                    name='useremail'
                    color="blue"
                    size='lg'
                    label="Email"
                    error={values.useremail.length > 0 ? !emailRegex.test(values.useremail) : false}
                    value={values.useremail}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='mt-5'>
                  <Input
                    type='tel'
                    name='usernumber'
                    inputMode="numeric"
                    color="blue"
                    size='lg'
                    maxLength={10}
                    error={values.usernumber.length > 0 ? !telRegex.test(values.usernumber) : false}
                    label="Contact Number"
                    value={values.usernumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <Textarea
                label="Message"
                name='usermessage'
                value={values.usermessage}
                onChange={handleChange}
                color='blue'
                size='lg'
              />
            </div>
            <Button
              type="submit"
              variant="gradient"
              className='mt-5'
              disabled={!nameRegex.test(values.username) || !emailRegex.test(values.useremail) || !telRegex.test(values.usernumber)}
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <section className='lg:max-w-screen-xl sm:max-w-screen-sm mx-auto py-10'>
        <h2 className='mb-4 text-center lg:text-4xl sm:text-2xl font-medium'>Frequently Ask Questions</h2>
        <AccordionComponent />
      </section>

      {showToast && <div className='fixed top-20 right-5 z-50'><ToastPopup message={"Your Response has submitted. We will contact you soon."} /></div>}
    </>
  )
}

export default ContactUs