import Image from "next/image";
import Button from "../buttons/button";
import styles from "./styles.module.css";

function CollectibleSneakers() {
  return (
    <div className="pt-24 ps-20 pe-10 bg-[#fefbeb]">
      <div className=" justify-between items-center flex  mb-10">
        <div className="w-6/12 z-10">
          <div className="flex  flex-col justify-start items-start gap-6">
            <div className="  flex flex-col justify-start items-start gap-2">
              <div className=" text-slate-900 text-7xl font-extrabold font-roboto">
                Collectible Sneakers
              </div>
            </div>
            <div className=" text-slate-900 text-xl font-normal font-roboto leading-7">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </div>
            <div className="flex justify-start items-center gap-4">
              <Button children={"Sign up now"} className={"text-lg py-2"} />
              <div className="px-2 py-2 rounded-lg flex justify-center items-center">
                <div className="w-6 h-6 relative" />
                <div className="px-2 flex justify-center items-center">
                  <div className="text-amber-900 text-base font-medium font-['Roboto'] leading-normal tracking-wide">
                    Watch Demo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.triangle}></div>
        <div className="w-4/12 relative">
          <div className=" 2xl:w-96 w-9/12 2xl:h-96 h-80 bg-amber-400 rounded-3xl ms-2">
            {" "}
          </div>
          <Image
            className="absolute -top-12 -left-10"
            src="/shoes.svg"
            alt="Shoes"
            height={100}
            width={500}
          />
        </div>
      </div>
      <div className="md:my-20 h-1"></div>
      <div className="relative md:flex gap-10">
        <div className="w-4/12">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="57"
              height="39"
              viewBox="0 0 57 39"
              fill="none"
              className="absolute -top-1 left-5"
            >
              <path
                opacity="0.5"
                d="M3.07107 17.4973C-3.22858 11.1977 1.23308 0.42627 10.1421 0.42627H46.7107C55.6197 0.42627 60.0814 11.1977 53.7817 17.4973L35.4975 35.7816C31.5922 39.6868 25.2606 39.6868 21.3553 35.7816L3.07107 17.4973Z"
                fill="#0369A1"
              />
            </svg>
            <div className="w-16 h-16 relative">
              <Image src="/trophy.svg" alt="trophy" height={53} width={53} />
            </div>
          </div>
          <h6 className=" text-slate-900 text-xl font-semibold font-roboto leading-5 my-2">
            Nibh viverra
          </h6>
          <p className="text-slate-900 text-lg font-roboto font-normal leading-7 max-w-sm">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>
        <div className="w-4/12">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              className="absolute -top-2 left-5"
            >
              <path
                opacity="0.5"
                d="M21.9283 3.07106C28.228 -3.22859 38.9994 1.23309 38.9994 10.1421L38.9994 29C38.9994 34.5229 34.5222 39 28.9994 39L10.1415 39C1.23244 39 -3.22922 28.2286 3.07043 21.9289L21.9283 3.07106Z"
                fill="#15803D"
              />
            </svg>
            <div className="w-16 h-16 relative">
              <Image src="/tunnel.svg" alt="trophy" height={53} width={53} />
            </div>
          </div>
          <h6 className=" text-slate-900 text-xl font-semibold font-roboto leading-5 my-2">
            Cursus amet
          </h6>
          <p className="text-slate-900 text-lg font-roboto font-normal leading-7 max-w-sm">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>
        <div className="w-4/12">
          <div className="relative">
            <div className="w-10 h-10 opacity-50 bg-fuchsia-700 rounded-[20px] absolute left-8" />
            <div className="w-16 h-16 relative">
              <Image src="/tv.svg" alt="trophy" height={53} width={53} />
            </div>
          </div>
          <h6 className=" text-slate-900 text-xl font-semibold font-roboto leading-5 my-2">
            Ipsum fermentum
          </h6>
          <p className="text-slate-900 text-lg font-roboto font-normal leading-7 max-w-sm">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CollectibleSneakers;
