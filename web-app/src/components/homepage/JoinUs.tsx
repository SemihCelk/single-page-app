import Image from "next/image";
import Button from "../buttons/button";

export default function JoinUs() {
  return (
    <div className="w-full px-20 pt-48 pb-32 flex-col justify-start items-start inline-flex bg-[#fefcf4]">
      <div className="w-full  bg-white shadow-xl rounded-3xl">
        <div className="md:flex justify-between pt-10 px-10">
          <div className="md:w-1/2  w-full lg:p-5">
            <h4 className="text-slate-900 text-6xl font-bold font-roboto my-5">
              Why join us
            </h4>

            <div className="text-slate-900 text-xl font-normal font-roboto flex gap-2">
              <Image
                src={"/check.svg"}
                alt="check-icon"
                width={20}
                height={15}
              />
              <p> Est et in pharetra magna adipiscing ornare aliquam.</p>
            </div>
            <div className="text-slate-900 text-xl font-normal font-roboto flex gap-2">
              <Image
                src={"/check.svg"}
                alt="check-icon"
                width={20}
                height={15}
              />
              <p> Ullamcorper ornare in et egestas dolor orci.</p>
            </div>
            <div className="text-slate-900 text-xl font-normal font-roboto flex gap-2">
              <Image
                src={"/check.svg"}
                alt="check-icon"
                width={20}
                height={15}
              />
              <p> Tellus arcu sed consequat ac velit ut eu blandit. .</p>
            </div>

            <Button
              children={"Sign up now"}
              className={
                "p-4 rounded-lg border-2 text-amber-900 border-amber-900 text-xl font-medium my-5"
              }
            />
          </div>
          <div className="md:w-1/2  w-full  flex  items-center relative">
            <div className="relative z-20">
              <Image src="/Desktop.svg" alt={""} width={800} height={300} />
            </div>
            <div className="w-[110%] h-60 top-[82%] -left-[3%]  absolute origin-top-left -rotate-45 bg-amber-200 shadow-xl" />
            <div className="w-20 h-20 left-[70%] top-[80%]    absolute opacity-75 bg-fuchsia-700 rounded-3xl" />
            <div className="w-24 h-24 left-[2%] top-[8%]   absolute opacity-75 bg-amber-700 rounded-3xl" />
            <div className="w-14 h-14 left-[85%] -top-[13%]  absolute opacity-75 bg-sky-700 rounded-full" />
            <div className="w-56 h-56 lg:left-[75%] left-[60%] top-[58%]   absolute opacity-75 bg-pink-700 rounded-3xl" />
            <div className="w-20 h-20 left-[23%] top-[75%]  absolute opacity-75 bg-green-700 rounded-full z-30" />
          </div>
        </div>
      </div>
    </div>
  );
}
