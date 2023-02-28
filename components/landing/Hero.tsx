import { Suspense } from "react";
import Loading from "./loading";

export default function Hero() {
  return (
    <section className="grid h-screen grid-flow-col grid-cols-6 px-8 lg:px-16 pb-4 pt-20">
      <div className="highlight pointer-events-none z-10 col-span-4 col-start-2 row-span-2 row-start-1 flex flex-col justify-center space-y-2 rounded-3xl bg-slate-200/30 px-10 drop-shadow-2xl backdrop-blur-2xl transition delay-500 dark:bg-slate-800/60 lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:row-start-2">
        <h3 className="text-center text-lg font-medium text-slate-600 dark:text-slate-400 md:text-xl lg:text-right lg:text-2xl">
          Hi I&apos;m Imo!
        </h3>
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-right lg:text-6xl">
          Your Next
        </h1>
      </div>
      <div className="relative col-span-6 col-start-1 row-span-6 row-start-2 overflow-hidden rounded-3xl bg-[#7ABCDF] shadow-2xl transition delay-500 lg:col-span-4 lg:col-start-3 lg:row-span-4 lg:row-start-1">
        {/* <Loading /> */}
        <Suspense fallback={<Loading />}>
          <iframe
            className="h-full w-full"
            src="https://my.spline.design/imouxhero-54a7f0c990e8c35b53953d0ec38e9f23/"
          ></iframe>
          <div className="absolute bottom-0 right-0 h-14 w-40 bg-[#7ABCDF]" />
        </Suspense>
      </div>
    </section>
  );
}
