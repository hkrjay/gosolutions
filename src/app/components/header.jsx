"use client";

import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  ListItem,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoChevronDown, IoChevronDownCircleOutline, IoCloseOutline } from "react-icons/io5";
import { headerMenu } from "../dummyData";
import Link from "next/link";
import GetStartedModal from "./getStartedModal";
import Image from "next/image";

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
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {headerMenu?.map((menu) => {

          if (menu.subMenu.length > 0) {
            return (
              <div key={menu.id}>
                <Menu
                  open={isSubMenuOpen}
                  handler={setIsSubMenuOpen}
                  placement="bottom"
                  allowHover={true}
                >
                  <MenuHandler>
                    <Typography
                      as="li"
                      variant="small"
                      color="blue-gray"
                      className="p-1 font-light text-md flex items-center justify-end gap-2 text-gray-200 hover:text-blue-500"
                      onClick={() => setOpenNav(false)}
                    >

                      <Link
                        href={menu.link}
                        className="capitalize"
                      >
                        {menu.item}
                      </Link>
                      <IoChevronDown
                        className={`hidden lg:block h-4 w-4 transition-transform delay-100 ${isSubMenuOpen ? "rotate-180" : ""
                          }`}
                      />
                      <IoChevronDown
                        onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        className={`block h-4 w-4 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                          }`}
                      />

                    </Typography>
                  </MenuHandler>
                  <MenuList>
                    {menu.subMenu.map((sub) => (
                      <Link key={sub.menu} href={`/${menu.item}/${sub.lnk}`}>
                        <MenuItem className="capitalize">
                          {sub.menu}
                        </MenuItem>
                      </Link>
                    ))}
                  </MenuList>
                </Menu>
                <div className="block lg:hidden">
                  <Collapse open={isMobileMenuOpen}>
                    {menu.subMenu.map((sub) => (
                      <Link key={sub.lnk} href={`/${menu.item}/${sub.lnk}`}>
                        <MenuItem className="text-right text-gray-400">
                          {sub.menu}
                        </MenuItem>
                      </Link>
                    ))}
                  </Collapse>
                </div>
              </div>
            );
          }
          else {
            return (
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
                  className="text-gray-200 justify-end hover:text-blue-500 capitalize flex items-end"
                >
                  {menu.item}
                </Link>
              </Typography>
            )
          }
        })}

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
        className={`fixed w-full z-50 ${scrollY > 25 || openNav ? "bg-gray-900/95" : "bg-transparent"
          } transition ease-linear delay-100 border-none rounded-none px-6 py-3 shadow-none max-w-full backdrop-saturate-0 backdrop-opacity-0`}
      >
        <div className="flex items-center justify-between text-blue-gray-900 lg:max-w-screen-lg sm:max-w-screen-sm mx-auto">
          <div className="flex items-center gap-3">
            <Image src={'/images/gs_logo.png'} alt="GoSolutions Logo" width={50} height={50} />
            <Link
              href="/"
              className="mr-4 cursor-pointer py-1.5 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 text-xl font-extrabold"
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
