"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const cardData = [
  {
    icon: "/zoomerr.svg",
    title: "Zoomerr",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    avatar: "https://i.hizliresim.com/7gcw51a.png",
    nameSurname: "Hellen Jummy",
    role: "Team Lead",
  },
  {
    icon: "/shells.svg",
    title: "SHELLS",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    avatar: "https://i.hizliresim.com/b63ciq6.png",
    nameSurname: "Hellena John",
    role: "Co-founder",
  },
  {
    icon: "/artvenue.svg",
    title: "ArtVenue",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    avatar: "https://i.hizliresim.com/b2brlvb.png",
    nameSurname: "David Oshodi",
    role: "Manager",
  },
  {
    icon: "/waves.svg",
    title: "WAVES",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    avatar: "https://i.hizliresim.com/7a41hcq.png",
    nameSurname: "jane Doe",
    role: "Senior Designer",
  },
  {
    icon: "/check.svg",
    title: "Checked",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    avatar: "https://i.hizliresim.com/b2brlvb.png",
    nameSurname: "Hellen Jummy",
    role: "Security",
  },
];

export default function Comments() {
  const swiperRef: any = useRef();
  return (
    <div className="py-20 bg-[#fefcf4]">
      <div className="flex justify-between px-20 my-14">
        <h1 className="text-slate-900 text-6xl font-extrabold font-roboto">
          Because they love us
        </h1>
        <div className="flex gap-6 me-3">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="flex justify-center items-center p-2 rounded-full border-2 border-[#78350F] w-12 h-12"
          >
            <i>
              <Image
                src="/arrow-left.svg"
                alt="Prev Button Arrow"
                width={35}
                height={35}
              ></Image>
            </i>
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="flex justify-center items-center p-2 rounded-full border-2 border-[#78350F] w-12 h-12"
          >
            <i>
              <Image
                src="/arrow-right.svg"
                alt="Next Button Arrow"
                width={35}
                height={35}
              ></Image>
            </i>
          </button>
        </div>
      </div>
      <div className="relative md:mx-10">
        <div className="bg-amber-200 absolute md:left-10 -top-10 md:w-[95%] w-full h-96 mt-5"></div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 4,
            },
          }}
          navigation={false}
          loop={true}
          scrollbar={{ draggable: true }}
          modules={[Navigation]}
          className="h-[600px] md:h-[500px] 2xl:h-96 w-full"
        >
          {cardData.map((item, key) => (
            <SwiperSlide key={key}>
              <div className="w-full h-[400px]  bg-white rounded-2xl shadow-xl border-2 border-slate-200 absolute">
                <div className=" p-6 flex-col justify-start items-start gap-4 flex">
                  <div className="py-4 justify-start items-center inline-flex">
                    <div className="justify-start items-center gap-2 flex">
                      <div className="w-8 h-8 flex items-center">
                        <i>
                          <Image
                            src={item.icon}
                            alt="Next Button Arrow"
                            width={35}
                            height={35}
                          ></Image>
                        </i>
                      </div>
                      <div className="text-slate-600 text-2xl font-bold  font-roboto leading-relaxed">
                        {item.title}
                      </div>
                    </div>
                  </div>
                  <div className="  text-black text-2xl font-normal  font-roboto ">
                    {item.description}
                  </div>
                  <div className="  pt-4 justify-start items-center gap-4 inline-flex">
                    <Image
                      src={item.avatar}
                      alt="user photos"
                      className="w-16 h-16 rounded-full"
                      height={100}
                      width={100}
                      quality={100}
                    ></Image>
                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                      <div className="  text-black text-lg font-normal  font-roboto ">
                        {item.nameSurname}
                      </div>
                      <div className="  text-slate-600 text-base font-normal  font-roboto leading-snug">
                        {item.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
