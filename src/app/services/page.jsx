"use client";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { ServicesCard } from "../components/servicescard";
import { servicesData } from "../dummyData";
import GetStartedModal from "../components/getStartedModal";

const Services = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <section className="relative h-full z-0 lg:py-28 sm:py-20 bg-[url('/images/services_bg.webp')] bg-cover bg-center bg-fixed bg-no-repeat">
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
        <div className="text-white lg:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md mx-auto text-center">
          <p className="bg-gray-600/40 p-2 w-fit mx-auto text-sm">Services</p>
          <h1 className="lg:text-4xl sm:text-2xl font-semibold my-4">
            What can GoSolutions do for you?
          </h1>
          <p className="text-base text-gray-100 leading-6 lg:px-44">
            GoSolutions guarantees the highest standards in coding and design
            practices. Seamlessly integrating stunning styles and elements,
            UpTech empowers you to effortlessly create a professional website
            that truly shines.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="lg:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md mx-auto">
          <Typography
            variant="h2"
            className="capitalize text-center mb-7 lg:text-4xl sm:text-2xl"
          >
            get our best services
          </Typography>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10">
            {servicesData.map((data) => (
              <ServicesCard key={data.id} data={data} handleOpen={handleOpen} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-900 py-20">
        <div className="lg:max-w-screen-xl sm:max-w-screen-sm mx-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="relative w-full">
            <img
              src="/images/service_page_img1.webp"
              alt="image 1"
              className="lg:w-[90%] sm:w-full relative z-20 rounded-xl"
            />
            <img
              src="/images/service_page_img2.webp"
              alt="image 1"
              className="w-[30%] absolute sm:-left-6 sm:-top-8 lg:-left-20 lg:-top-10 z-30 rounded-xl"
            />
            <div className="absolute w-20 h-20 rounded-xl bg-blue-700 -bottom-5 lg:right-5 sm:-right-5 z-10"></div>
          </div>
          <div className="text-gray-200">
            <p className="bg-gray-600/30 text-white p-2 w-fit text-sm">
              Trusted IT Solutions
            </p>
            <h1 className="lg:text-4xl sm:text-2xl font-semibold my-4">
              Delivering outstanding IT services since 2020
            </h1>
            <p className="text-sm text-gray-300 leading-6">
              We are a dynamic and forward-thinking IT company dedicated to
              transforming your digital world. With a passion for cutting-edge
              solutions and a commitment to exceptional service, we are your
              trusted partner in navigating the ever-evolving landscape of IT.
              Our team of skilled professionals is here to harness the power of
              technology, providing tailor-made solutions that drive your
              success.
            </p>
            <hr className="h-[1px] my-5" />
            <Button
              variant="outlined"
              className="text-white border border-gray-100 hover:bg-blue-700 hover:border-blue-700"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <GetStartedModal open={open} handleOpen={handleOpen} />
    </>
  );
};

export default Services;
