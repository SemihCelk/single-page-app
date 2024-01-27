"use client";
import React, { useState } from "react";
import Button from "../buttons/button";

const items = [
  { value: "Products" },
  { value: "Solutions" },
  { value: "Pricing" },
  { value: "Resources" },
  { value: "Log In" },
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
    <div className=" w-full px-20 py-6 justify-between items-center hidden lg:flex md:bg-[#fefbeb]">
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
        <Button children={"Sign up now"} />
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
    <div className="w-full px-4 py-2 lg:hidden flex bg-[#fefbeb] justify-between items-center">
      <div className="text-amber-900 text-4xl font-extrabold font-roboto ">
        Collers
      </div>
      {isOpen && (
        <div className="absolute w-full text-center top-10 z-20 shadow-md bg-[#fefbeb] left-0">
          <div className="  bg-white/30 p-4 rounded-md border ">
            {items.map((item, index) => (
              <div
                className="w-full px-4 py-2 cursor-pointer focus:outline-none focus:bg-gray-200"
                key={index}
              >
                <div className="text-amber-900 font-semibold font-roboto ">
                  {item.value}
                </div>
              </div>
            ))}
        <Button children={"Sign up now"}  className={"py-1 mt-2"}/>

          </div>
        </div>
      )}

      {isOpen ? (
        <span onClick={toggleMenu} className="text-3xl">x</span>
      ) : (
        <MenuIcon className="h-6 w-6" onClick={toggleMenu} />
      )}
    </div>
  );
}

function MenuIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#78350F"
      />
    </svg>
  );
}

export default Header;
