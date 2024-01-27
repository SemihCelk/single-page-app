import Image from "next/image";
import Button from "../buttons/button";
import styles from "./styles.module.css";

interface ISaleCard {
  image: string;
  title: string;
  description: string;
}
interface SaleCardProps {
  data: ISaleCard;
}

const saleCard = [
  {
    image: "https://i.hizliresim.com/saktx4o.png",
    title: "Title",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    image: "https://i.hizliresim.com/fmfcn18.png",
    title: "Title",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    image: "https://i.hizliresim.com/mnb0vcy.png",
    title: "Title",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
];
const SaleCardBanner = () => {
  return (
    <div className=" lg:px-20 py-20 px-10 bg-slate-900 border-t border-b border-slate-200 flex-col justify-center items-start md:gap-20 gap-10 flex w-full ">
      <div className="md:flex md:justify-between text-center md:text-start items-center w-full">
        <div className="text-white md:text-5xl text-3xl font-semibold  ">
          The best of the best
        </div>
        <Button
          children="Sign up now"
          className={"text-white text-2xl font-bold font-roboto border-white px-10 rounded-lg border-2 md:mb-0 my-8"}
        />
      </div>
      <div className="relative w-full hidden  md:block">
        <div className="lg:w-56 w-44 h-56 lg:left-[82%] left-[80%] top-9 absolute opacity-75 bg-green-700 rounded-3xl" />
        <div className="w-52 h-44 lg:left-[75%] left-[70%] top-72 absolute opacity-75 bg-fuchsia-700 rounded-3xl" />
        <div className="w-32 h-32 left-[56%] top-64 absolute opacity-75 bg-amber-700 rounded-3xl" />
        <div className="w-40 h-40 left-[37%] -top-5 absolute opacity-75 bg-sky-700 rounded-3xl" />
        <div className="w-64 h-64 md:-left-5 2xl:left-[10%] top-40 absolute opacity-75 bg-pink-700 rounded-3xl" />
      </div>
      <div className="relative w-full  block md:hidden">
        <div className="w-40 h-28 sm:left-[15%] -left-[5%] top-[67rem] absolute opacity-75 bg-fuchsia-700 rounded-3xl" />
        <div className="sm:w-40 w-24 sm:h-40 h-32 sm:left-[60%] left-[70%] top-[650px] absolute opacity-75 bg-sky-700 rounded-full " />
        <div className="w-44 h-36 left-[25%] top-[23rem] absolute opacity-75 bg-pink-700 rounded-[25%]" />
      </div>
      <div className="flex justify-between lg:justify-center md:flex-row flex-col md:items-start items-center lg:gap-12 gap-4 w-full -mt-20 md:space-y-0 space-y-4">
        {saleCard.map((item, i) => (
          <SaleCard data={item} key={i} />
        ))}
      </div>
    </div>
  );
};

const SaleCard = ({ data }: SaleCardProps) => {
  return (
    <div className={styles.box}>
      <div className="relative w-full h-48">
        <Image
          src={data.image}
          alt="Product"
          width={1000}
          height={1000}
          quality={100}
          className="rounded-t-lg h-48 aspect-square"
        />
      </div>
      <div className="h-40 px-8 pt-8 flex-col justify-start items-start gap-4">
        <div className="h-6 flex-col gap-1">
          <div className="text-white text-2xl font-semibold ">
            {data.title}
          </div>
        </div>
        <div className="text-white text-md font-light my-5">
          {data.description}
        </div>
      </div>
      <div className="p-8 justify-start items-start gap-4">
        <Button
          children={"Buy Now"}
          className={
            "w-full text-white text-lg px-4 h-14 p-4  rounded-lg border-2 border-white justify-center items-center flex"
          }
          hasIcon={true}
        />
      </div>
    </div>
  );
};

export default SaleCardBanner;
