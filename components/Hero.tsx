export default function Hero() {
  return (
    <section className="mx-auto grid h-screen max-w-7xl grid-flow-col grid-cols-6 pb-4 pt-20">
      <div className="highlight z-10 col-span-4 col-start-2 row-span-2 row-start-1 flex flex-col justify-center gap-2 rounded-3xl bg-slate-100/40 px-10 drop-shadow-xl backdrop-blur-2xl dark:bg-slate-800/60 lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:row-start-2">
        <h3 className="text-center text-lg lg:text-right md:text-xl lg:text-2xl font-medium text-slate-600 dark:text-slate-500">
          Hi I&apos;m Imo!
        </h3>
        <h1 className="text-center lg:text-right text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white sm:text-5xl lg:text-6xl">
          Your Next
        </h1>
      </div>
      <div className="col-span-6 col-start-1 row-span-6 row-start-2 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-500 shadow-xl lg:col-span-4 lg:col-start-3 lg:row-span-4 lg:row-start-1"></div>
    </section>
  );
}
