import Image from "next/image";
import Button from "../buttons/button";

export default function JoinUs() {
  return (
    <div className="w-full md:px-20 px-5 md:pt-48 pt-5 pb-32 flex-col justify-start items-start inline-flex md:bg-[#fefcf4] bg-white">
      <div className="w-full  bg-white shadow-xl rounded-3xl">
        <div className="md:flex justify-evenly pt-10 md:px-10 2xl:px-20 px-5">
          <div className=" lg:p-5">
            <h1 className=" text-slate-900 md-text-5xl lg:text-6xl text-center md:text-start text-3xl my-5 font-extrabold">
              Why join us
            </h1>

            <div className="text-slate-900 text-xl font-normal font-roboto flex gap-2">
              <Image
                src={"/check.svg"}
                alt="check-icon"
                width={20}
                height={15}
              />
              <p className="2xl:text-xl md:text-lg text-md my-2">
                {" "}
                Est et in pharetra magna adipiscing ornare aliquam.
              </p>
            </div>
            <div className="text-slate-900 text-xl font-normal font-roboto flex gap-2">
              <Image
                src={"/check.svg"}
                alt="check-icon"
                width={20}
                height={15}
              />
              <p className="2xl:text-xl md:text-lg text-md my-2">
                {" "}
                Ullamcorper ornare in et egestas dolor orci.
              </p>
            </div>
            <div className="text-slate-900 text-xl font-normal font-roboto flex gap-2">
              <Image
                src={"/check.svg"}
                alt="check-icon"
                width={20}
                height={15}
              />
              <p className="2xl:text-xl md:text-lg text-md my-2">
                {" "}
                Tellus arcu sed consequat ac velit ut eu blandit.
              </p>
            </div>

            <Button
              children={"Sign up now"}
              className={
                "md:block hidden rounded-lg border-2 text-amber-900 border-amber-900  text-xl  font-medium my-5 p-4 "
              }
            />
            <div className="md:hidden flex justify-center relative z-50">
              <Button
                children={"Sign up now"}
                className={
                  " rounded-lg border-2 text-amber-900 border-amber-900 text-xl font-medium my-5 p-4 "
                }
              />
            </div>
          </div>
          <div className="md:w-1/2  w-full  flex  items-center relative">
            <div className="relative z-20">
              <Image src="/Desktop.svg" alt={""} width={800} height={300} />
            </div>
            <div className="md:w-[110%] w-[100%] md:h-60 h-40 top-[82%] -left-[3%]  absolute origin-top-left -rotate-45 bg-amber-200 shadow-xl" />
            <div className="w-20 h-20 left-[70%] top-[80%] absolute opacity-75 bg-fuchsia-700 md:rounded-3xl rounded-full" />
            <div className="w-24 h-24 md:left-[2%] left-0 top-[8%] absolute opacity-75 bg-amber-700 md:rounded-3xl rounded-full" />
            <div className="md:w-14 md:h-14 w-10 h-10 md:left-[85%] left-[70%] md:-top-[13%] -top-[12%]  absolute opacity-75 bg-sky-700 rounded-full" />
            <div className="lg:w-56 md:w-48 sm:w-40 w-32  md:h-56 sm:h-44 h-32 lg:left-[72%] sm:left-[75%] md:left-[60%] left-[55%] top-[58%] absolute opacity-75 bg-pink-700 md:rounded-3xl rounded-[35%]" />
            <div className="w-20 h-20 left-[23%] top-[75%]  absolute opacity-75 bg-green-700 rounded-full z-30" />
          </div>
        </div>
      </div>
    </div>
  );
}
