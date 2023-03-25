import left from "../../../public/left-pattern.webp";
import right from "../../../public/right-pattern.webp";
import Image from "next/image";

export default function TopRight() {
  return (
    <div className="relative m-5 flex grow flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-50 shadow-xl transition-spacing @md:m-10 @3xl:mx-20 @3xl:my-10">
      <figure className="absolute top-0 left-0  min-h-full w-2/5">
        <Image
          alt="left pattern"
          className="object-cover"
          fill
          src={left}
          placeholder="blur"
        />
      </figure>
      <figure className="absolute top-0 right-0  min-h-full w-2/5">
        <Image
          alt="right pattern"
          className="object-cover"
          fill
          src={right}
          placeholder="blur"
        />
      </figure>
      <div className="absolute h-full w-full bg-gradient-to-r from-gray-50/0 via-gray-50 to-gray-50/0" />
      <div className="z-10 flex h-4/5 w-full flex-col items-center space-y-2 px-5 py-5 @md:px-10 @3xl:px-20">
        <h2 className="collapsible text-center font-black text-violet-600 transition-text @lg:text-lg @2xl:text-xl">
          WELCOME TO MY PORTFOLIO!
        </h2>
        <div className="flex w-full grow flex-col rounded-xl bg-gray-100 shadow-2xl transition-spacing px-5 @3xl:px-10 py-5">
          <div className="w-full">
            <label className="block mb-1 text-sm font-bold text-gray-700">
              Full name
            </label>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Muhammad Hannan Massimo Madjid" />
          </div>
        </div>
      </div>
    </div>
  );
}
