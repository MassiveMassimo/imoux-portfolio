import Bersuara from "../../public/logos/bersuara";
import Chronos from "../../public/logos/chronos";
import DN35 from "../../public/logos/dn35";
import Silicon from "../../public/logos/silicon";
import Uluwatu from "../../public/logos/uluwatu";
import Vishwakarma from "../../public/logos/vishwakarma";
import Vishwakarma2 from "../../public/logos/vishwakarma2";

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
        <div className="absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent dark:from-slate-900 dark:to-transparent"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent dark:from-slate-900 dark:to-transparent"></div>
        <div className="scroll-infinite flex flex-nowrap items-center space-x-40">
          <Chronos />
          <DN35 />
          <Vishwakarma2 />
          <Bersuara />
          <Uluwatu />
          <Silicon />
          <Vishwakarma />
          <Chronos />
          <DN35 />
          <Vishwakarma2 />
          <Bersuara />
          <Uluwatu />
          <Silicon />
          <Vishwakarma />
        </div>
      </div>
    </section>
  );
}
