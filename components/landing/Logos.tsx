import LogoRow1 from "./LogoRow1";
import LogoRow2 from "./LogoRow2";
import LogoRow3 from "./LogoRow3";

export default function Logos() {
  return (
    <section className="relative flex w-full flex-col overflow-hidden px-8">
      <h2 className="mx-auto text-center text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        Here&apos;s a cool logo section
      </h2>
      <p className="my-5 mx-auto max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400">
        The organizations and products I helped to create the branding of.
      </p>
      <div className="relative mt-14 overflow-x-hidden px-20">
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent dark:from-slate-900 dark:to-transparent lg:w-40"></div>
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent dark:from-slate-900 dark:to-transparent lg:w-40"></div>
        <LogoRow1 />
        <LogoRow2 />
        <LogoRow3 />
      </div>
    </section>
  );
}
