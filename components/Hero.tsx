export default function Hero() {
  return (
    <section className="max-w-8xl mx-auto grid h-screen grid-flow-col grid-cols-6 pb-4 pt-20">
      <div className="z-10 backdrop-blur-2xl col-span-3 col-start-1 row-start-2 row-span-2 flex flex-col justify-center gap-2 rounded-3xl bg-slate-500/10 px-10">
        <h3 className="text-right text-2xl font-medium text-slate-600 dark:text-slate-300">
          Hi I&apos;m Imo!
        </h3>
        <h1 className="text-right text-7xl font-extrabold tracking-tight text-slate-800 dark:text-white sm:text-5xl lg:text-6xl">
          Your Next
        </h1>
      </div>
      <div className="col-span-4 col-start-3 row-start-1 row-end-5 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-500"></div>
    </section>
  );
}
