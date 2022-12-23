export default function Hero() {
  return (
    <section className="grid h-screen grid-flow-col grid-cols-6 pb-4 pt-20">
      <div className="pointer-events-none highlight drop-shadow-3xl z-10 col-span-4 col-start-2 row-span-2 row-start-1 flex flex-col justify-center gap-2 rounded-3xl bg-slate-200/30 px-10 backdrop-blur-2xl dark:bg-slate-800/60 lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:row-start-2">
        <h3 className="text-center text-lg font-medium text-slate-600 dark:text-slate-400 md:text-xl lg:text-right lg:text-2xl">
          Hi I&apos;m Imo!
        </h3>
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-black dark:text-white sm:text-5xl lg:text-right lg:text-6xl">
          Your Next
        </h1>
      </div>
      <div className="overflow-hidden col-span-6 col-start-1 row-span-6 row-start-2 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-500 shadow-xl lg:col-span-4 lg:col-start-3 lg:row-span-4 lg:row-start-1">
        <iframe
          src="https://my.spline.design/imouxhero-54a7f0c990e8c35b53953d0ec38e9f23/"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </section>
  );
}
