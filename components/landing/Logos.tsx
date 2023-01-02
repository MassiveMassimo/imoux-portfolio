import Bersuara from "../../public/logos/bersuara";
import Chronos from "../../public/logos/chronos";
import DN35 from "../../public/logos/dn35";
import Silicon from "../../public/logos/silicon";
import Uluwatu from "../../public/logos/uluwatu";
import Vishwakarma2 from "../../public/logos/vishwakarma2";


export default function Logos() {
  return (
    <section className="relative flex w-full flex-col px-8">
      <h2 className="mx-auto text-center text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        Here&apos;s a cool logo section
      </h2>
      <p className="my-5 mx-auto max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400">
        The organizations and products I helped to create the branding of.
      </p>
      <div className="relative overflow-x-visible px-20">
        <div className="mt-14 flex flex-nowrap gap-40">
          <Chronos />
          <DN35 />
          <Vishwakarma2 />
          <Bersuara />
          <Uluwatu />
          <Silicon />
        </div>
      </div>
    </section>
  );
}
