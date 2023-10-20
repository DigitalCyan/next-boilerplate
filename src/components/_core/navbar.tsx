"use client";

import LinkButton from "@/components/_core/link-button";

const OPTIONS = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "Services",
    href: "/"
  },
  {
    text: "About",
    href: "/"
  }
];

const Navbar = () => {
  return (
    <div className="fixed top-0 z-40 w-full flex flex-row items-center justify-evenly p-5 backdrop-blur shadow-xl">
      {OPTIONS.map(({href, text}, i) => (
        <LinkButton size="sm" key={i} href={href} text={text} />
      ))}
    </div>
  );
};

export default Navbar;