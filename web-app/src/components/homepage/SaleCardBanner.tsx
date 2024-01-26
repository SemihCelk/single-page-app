import Image from "next/image";
import Button from "../buttons/button";
import styles from "./styles.module.css";

interface ISaleCard {
  image: string;
  title: string;
  description: string;
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
    <div className="md:mt-20 lg:px-20 py-20 px-10 bg-slate-900 border-t border-b border-slate-200 flex-col justify-center items-start gap-20 inline-flex w-full">
      <div className="md:flex justify-between items-center w-full">
        <div className="text-white text-6xl font-extrabold font-roboto">
          The best of the best
        </div>
        <Button
          children="Sign up now"
          className="text-white text-2xl font-bold font-roboto border-white px-12 py-5 rounded-lg border-2 md:my-0 my-5"
        />
      </div>
      <div className="relative w-full hidden  md:block">
        <div className="lg:w-56 w-44 h-56 lg:left-[82%] left-[80%] top-9 absolute opacity-75 bg-green-700 rounded-3xl" />
        <div className="w-52 h-44 lg:left-[75%] left-[70%] top-72 absolute opacity-75 bg-fuchsia-700 rounded-3xl" />
        <div className="w-32 h-32 left-[56%] top-64 absolute opacity-75 bg-amber-700 rounded-3xl" />
        <div className="w-40 h-40 left-[37%] -top-5 absolute opacity-75 bg-sky-700 rounded-3xl" />
        <div className="w-64 h-64 md:-left-5 2xl:left-[10%] top-40 absolute opacity-75 bg-pink-700 rounded-3xl" />
      </div>
      <div className="md:flex justify-between lg:justify-center items-start lg:gap-12 gap-4 w-full -mt-20">
        {saleCard.map((item, i) => (
          <SaleCard data={item} key={i} />
        ))}
      </div>
    </div>
  );
};

const SaleCard = ({ data }: any) => {
  return (
    <div className={styles.box}>
      <div className="relative w-full h-50 ">
        <Image
          src={data.image}
          alt="Product"
          width={1000}
          height={1000}
          quality={100}
          className="rounded-t-lg h-48 aspect-square"
        />
      </div>
      <div className="h-32 px-8 pt-8 flex-col justify-start items-start gap-4">
        <div className="h-6 flex-col gap-1">
          <div className="text-white text-2xl font-bold font-['Roboto'] leading-relaxed">
            {data.title}
          </div>
        </div>
        <div className="text-white text-lg font-normal font-['Roboto'] leading-7">
          {data.description}
        </div>
      </div>
      <div className="p-8 justify-start items-start gap-4">
        <Button
          children={"Buy Now"}
          className={
            "w-full text-white text-xl leading-5 font-roboto font-light px-4 h-14 p-4 rounded-lg border-2 border-white justify-center items-center flex"
          }
          hasIcon={true}
        />
      </div>
    </div>
  );
};

export default SaleCardBanner;
