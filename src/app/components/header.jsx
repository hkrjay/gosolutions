"use client";

import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { headerMenu } from "../dummyData";
import Link from "next/link";
import GetStartedModal from "./getStartedModal";

export function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  const getScrollTop = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", getScrollTop);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", getScrollTop);
    };
  }, []);

  function NavList() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {headerMenu.map((menu) => (
          <Typography
            key={menu.id}
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-light text-md"
            onClick={() => setOpenNav(false)}
          >
            <Link
              href={menu.link}
              className="flex items-center text-gray-200 justify-end hover:text-blue-500 capitalize"
            >
              {menu.item}
            </Link>
          </Typography>
        ))}
        <Button
          variant="outlined"
          className="border-blue-700 hover:bg-blue-700 text-gray-200 focus:ring-0 w-fit ml-auto"
          onClick={handleOpen}
        >
          Get Started
        </Button>
      </ul>
    );
  }

  return (
    <>
      <Navbar
        className={`fixed w-full z-50 ${
          scrollY > 25 || openNav ? "bg-gray-900/95" : "bg-transparent"
        } transition ease-linear delay-100 border-none rounded-none px-6 py-3 shadow-none max-w-full backdrop-saturate-0 backdrop-opacity-0`}
      >
        <div className="flex items-center justify-between text-blue-gray-900 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3">
            <p className="bg-gray-200 rounded-full h-10 w-10 text-lg font-bold text-blue-800 flex items-center justify-center ">
              GS
            </p>
            <Link
              href="/"
              className="mr-4 cursor-pointer py-1.5 text-gray-200 text-xl font-medium"
            >
              GoSolutions
            </Link>
          </div>
          {/* <Image src='/images/logo.png' width={40} height={40} alt="logo" className="cursor-pointer py-1.5" /> */}
          <div className="hidden lg:block text-gray-200">
            <NavList setOpenNav={setOpenNav} />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit text-gray-200 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <IoCloseOutline className="h-6 w-6" strokeWidth={2} />
            ) : (
              <IoIosMenu className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList setOpenNav={setOpenNav} />
        </Collapse>
      </Navbar>

      <GetStartedModal open={open} handleOpen={handleOpen} />
    </>
  );
}
