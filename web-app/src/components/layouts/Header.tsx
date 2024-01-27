"use client";
import React, { useState } from "react";
import Button from "../buttons/button";
import Link from "next/link";
import Image from "next/image";

const items = [
  { value: "Products", link: "#" },
  { value: "Solutions", link: "#" },
  { value: "Pricing", link: "#" },
  { value: "Resources", link: "#" },
  { value: "Log In", link: "#" },
];
function Header() {
  return (
    <>
      <Desktop />
      <Phone />
    </>
  );
}
function Desktop() {
  return (
    <div className=" w-full px-20 py-6 justify-between items-center hidden lg:flex bg-[#fefbeb]">
      <div className="text-amber-900 text-4xl font-extrabold font-roboto leading-9">
        Collers
      </div>
      <div className="justify-start items-center gap-4 flex">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-20 self-stretch px-2 py-3  justify-start items-center gap-2 flex cursor-pointer"
          >
            <div className="text-amber-900 text-base font-semibold font-roboto leading-normal tracking-wide">
              {item.value}
            </div>
          </div>
        ))}
        <Button children={"Sign up now"}
         className={" px-5 text-md font-semibold"} />
      </div>
    </div>
  );
}
function Phone() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full ps-4 py-2 lg:hidden flex bg-white md:bg-[#fefbeb] justify-between items-center">
      <div className="text-amber-900 text-4xl font-extrabold font-roboto ">
        Collers
      </div>
      {isOpen && (
        <div className="absolute w-full text-center top-10 z-20 shadow-md bg-[#fefbeb] left-0">
          <div className="  bg-white/30 p-4 rounded-md border ">
            {items.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="w-full px-4 py-2 cursor-pointer focus:outline-none focus:bg-gray-200"
              >
                <div className="text-amber-900 font-semibold font-roboto ">
                  {item.value}
                </div>
              </Link>
            ))}
            <Button
              children={"Sign up now"}
              className={"py-1 mt-2 px-2 text-md font-semibold"}
            />
          </div>
        </div>
      )}

      {isOpen ? (
        <span onClick={toggleMenu} className="text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#78350F"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
      ) : (
        <button onClick={toggleMenu}>
          <MenuIcon  />
        </button>
      )}
    </div>
  );
}

function MenuIcon() {
  return (
    <div>
      <Image
        src="/menu-scale.svg"
        alt="menu icon"
        height={20}
        width={20}
        className="me-2"
      />
    </div>
  );
}

export default Header;
