import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-stretch pb-40">
      <Hero />
      <div className="flex flex-col items-center ~px-5/96">
        <p className="text-balance text-slate-500 dark:text-slate-400">
          I started as a product designer, but my{" "}
          <i className="font-serif text-indigo-500 dark:text-indigo-400">
            passion for building
          </i>{" "}
          the experiences I envisioned led me to become a design engineer. While
          I still{" "}
          <i className="font-serif text-indigo-500 dark:text-indigo-400">
            love creating user-centered designs
          </i>
          , bringing them to life as working solutions has become just as
          fulfilling.{" "}
          <span className="font-500 text-slate-900 dark:text-slate-200">
            It’s about turning ideas into real, impactful products.
          </span>
        </p>
      </div>
    </main>
  );
}
