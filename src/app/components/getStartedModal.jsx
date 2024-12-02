import React from "react";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Textarea } from "@material-tailwind/react";

export const GetStartedModal = ({open, handleOpen}) => {
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
      <DialogHeader>Get Started With Us.</DialogHeader>
      <DialogBody>
        <form className="flex flex-col gap-5">
          <Input type="text" color="blue" label="Your Name" />
          <Input type="email" color="blue" label="Your Email" />
          <Textarea color="blue" label="Message" />
        </form>
      </DialogBody>
      <DialogFooter className="bg-gray-100">
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="blue" onClick={handleOpen}>
          <span>Submit</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default GetStartedModal;
