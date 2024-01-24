import React from "react";
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
    <div className="w-full px-20 py-6 justify-between items-center inline-flex md:bg-[#fefbeb]">
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

export default Header;
