"use client";

import classNames from "@/util/classNames";
import {useState} from "react";
import {Transition} from "@headlessui/react";
import {HiX} from "react-icons/hi";
import {GiHamburgerMenu} from "react-icons/gi";
import LinkButton from "@/components/_core/link-button";

const OPTIONS = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Services",
    href: "/"
  },
  {
    title: "About",
    href: "/"
  }
];

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Transition
        show={open}
        className="fixed w-screen h-[100svh] bg-black z-20 overflow-hidden"
        enter="transition-all duration-200"
        enterFrom="bg-opacity-0 backdrop-blur-none"
        enterTo="bg-opacity-80 backdrop-blur"
        leave="transition-all duration-200"
        leaveFrom="bg-opacity-80 backdrop-blur"
        leaveTo="bg-opacity-0 backdrop-blur-none"
      >
        <Transition.Child
          enter="transition-all duration-200"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition-all duration-200"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
          className={classNames(
            "fixed top-0 right-0 w-screen lg:w-[25vw] h-[100svh] bg-black/[0.8]",
            "z-30 flex flex-col items-center justify-center py-5",
          )}
        >
          <div className="flex flex-col items-center gap-2 mt-5 w-full px-5 h-full justify-center">
            {OPTIONS.map(({title, href}, i) => (
              <LinkButton flow text={title} href={href} key={i} onClick={() => setOpen(false)} className="p-5" />
            ))}
          </div>

        </Transition.Child>
      </Transition>

      <div
        className="fixed top-0 right-0 z-40 p-5 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <HiX className="text-3xl lg:text-6xl" />
        ) : (
          <GiHamburgerMenu className="text-3xl lg:text-6xl" />
        )}
      </div>
    </>
  );
};

export default Menu;