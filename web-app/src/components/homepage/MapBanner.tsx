import Image from "next/image";
import styles from "./styles.module.css";

export default function MapBanner() {
  return (
    <div className="flex justify-center items-center bg-amber-900 lg:p-20 ps-3 -mt-5">
      <div className={`${styles.map} flex flex-col justify-center mt-20 `}>
        <div className="sm:w-64 w-52 h-54 flex-col justify-center items-center inline-flex -mt-[20%] ms-8 ">
          <div className="sm:w-[316px] w-64 sm:h-56 h-44 z-10">
            <Image
              src="/shoes-front-back.png"
              alt="shoes image"
              width={600}
              height={100}
              quality={85}
            />
          </div>
          <div className="h-16 bg-slate-200 rounded shadow flex-col justify-start items-center flex relative">
            <div className="text-slate-900 text-sm font-roboto leading-tight px-3 pt-2">
              Emma Simpson collected one pair of{" "}
              <span className="font-semibold">Cool Shoes.</span>
            </div>
            <div className={`${styles.bottomArrow}`}></div>
          </div>

          <div className="w-6 h-6 bg-lime-200 rounded-full border-4 border-lime-400" />
        </div>

        <h1 className="text-center text-amber-50 md:text-8xl text-5xl font-extrabold font-roboto mb-5">
          11,658,467
        </h1>
        <h2 className="text-center text-amber-50 md:text-6xl text-4xl font-extrabold font-roboto">
          Shoes Collected
        </h2>
      </div>
    </div>
  );
}
