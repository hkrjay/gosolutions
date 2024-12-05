'use client'

import React, { useState } from "react";
import { Button, Dialog, DialogBody, DialogHeader, Input, Textarea } from "@material-tailwind/react";
import { PostApi } from "../lib/postapi";

export const GetStartedModal = ({ open, handleOpen, title = 'Get Started With Us.' }) => {

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = 'http://localhost:4004/service'
    const response = await PostApi(url, values)
    console.log({ response });
  }

  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleOpen}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader className="capitalize">{title}</DialogHeader>
      <DialogBody className="pt-0">
        <form name="contact" netlify className="flex flex-col gap-5">
          <Input type="text" autoComplete="off" color="blue" name="name" label="Your Name" value={values.name} onChange={handleChange} />
          <Input type="email" autoComplete="off" color="blue" name="email" label="Your Email" value={values.email} onChange={handleChange} />
          <Textarea color="blue" autoComplete="off" name="message" label="Message" value={values.message} onChange={handleChange} />
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
              variant="gradient"
              color="blue"
            >
              <span>Submit</span>
            </Button>
          </div>
        </form>
      </DialogBody>
    </Dialog>
  );
};

export default GetStartedModal;
