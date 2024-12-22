'use client'

import React, { useState } from "react";
import { Button, Dialog, DialogBody, DialogHeader, Input, Textarea } from "@material-tailwind/react";
import { PostApi } from "../lib/postapi";
import { ToastPopup } from "./toastPopup";

export const GetStartedModal = ({ open, handleOpen, title = 'Get Started With Us.' }) => {

  const nameRegex = /^[a-zA-Z\s]{3,30}$/
  const telRegex = /^\d{10}$/
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = 'http://localhost:4004/contact'
    const response = await PostApi(url, values)
    console.log({ response });
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
    handleOpen()
  }

  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="uppercase text-xl bg-gray-100">{title}</DialogHeader>
        <DialogBody className="pt-0 mt-5">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <Input
              type="text"
              autoComplete="off"
              color="blue"
              name="name"
              label="Name"
              error={values.name.length > 0 ? !nameRegex.test(values.name) : false}
              value={values.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              color="blue"
              name="email"
              label="Email"
              error={values.email.length > 0 ? !emailRegex.test(values.email) : false}
              value={values.email}
              onChange={handleChange}
              required
            />
            <Textarea
              color="blue"
              name="message"
              label="Message"
              value={values.message}
              onChange={handleChange}
            />
            <div className="flex items-center justify-end">
              <Button
                type="button"
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button
                type="submit"
                color="blue"
                className="bg-blue-900"
                disabled={!nameRegex.test(values.name) || !emailRegex.test(values.email)}
              >
                <span>Submit</span>
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>

      {showToast && <div className='fixed top-20 right-5 z-50'><ToastPopup message={"Your Response has submitted. We will contact you soon."} /></div>}
    </>
  );
};

export default GetStartedModal;
