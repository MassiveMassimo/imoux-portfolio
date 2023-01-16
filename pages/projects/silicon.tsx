import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Silicon() {
  let h2 =
    "text-xl font-bold tracking-tight text-slate-900 dark:text-white md:text-2xl lg:text-3xl";

  return (
    <div>
      <Head>
        <title>Silicon Design System | Imo UX</title>
        <meta
          name="description"
          content="Welcome to my portfolio where I showcase my projects, interests, and overall taste in design!"
        />
      </Head>
      <div className="mx-auto -space-y-32 pb-40 pt-16">
        <header className="relative -z-10 h-[40vh] w-full overflow-hidden">
          <Image
            className="pointer-events-none object-cover"
            src="/silicon/siliconheader.webp"
            quality={100}
            fill
            alt=""
          />
        </header>
        <article className="flex space-x-10 px-8 lg:px-16">
          <div className="mt-32 flex w-1/5 flex-col">
            <aside className="pt-10">
              <p>aside</p>
            </aside>
            <div className="grow">
              <nav className="sticky top-0 pt-24">
                <p>nav</p>
              </nav>
            </div>
            <div>
              <h4 className="mb-5 text-lg font-semibold text-slate-600 dark:text-slate-400">
                More by me
              </h4>
              <Link href="/" className="group">
                <div className="aspect-[18/9] w-full rounded-lg mb-2 bg-cyan-400 origin-bottom group-hover:scale-105 transition-transform duration-300"></div>
                <h5>Something</h5>
              </Link>
            </div>
          </div>
          <div className="highlight w-4/5 rounded-3xl bg-white/30 px-12 pt-16 backdrop-blur-3xl dark:bg-slate-900/20 md:px-14 lg:px-16">
            <h1 className="bgb text-3xl font-extrabold tracking-[0.2em] text-slate-900/80 dark:text-white md:text-4xl lg:text-5xl">
              SILICON DESIGN SYSTEM
            </h1>
            <div className="mt-4 mb-10 h-1 w-full rounded-full bg-black/10" />
            <h2 className={h2}>Introduction</h2>
            <p className="p max-w-none">
              Design systems are becoming increasingly important in the design
              industry, as they provide a consistent way to design and develop
              products. One popular tool for creating and maintaining design
              systems is Figma. In this article, we will take a look at the
              process of creating a design system using Figma, including the
              ideation, development, and results.
            </p>
            <h2 className={h2}>Ideation</h2>
            <p className="p max-w-none">
              The first step in creating a design system using Figma is to
              gather ideas and determine the overall goals of the system. This
              includes researching the needs of the users and stakeholders, as
              well as identifying the key components that will make up the
              system. This phase is crucial for ensuring that the design system
              is user-centered and meets the needs of the business.
            </p>
            <h2 className={h2}>Development</h2>
            <p className="p max-w-none">
              Once the ideation phase is complete, the next step is to begin
              developing the design system in Figma. This includes creating a
              master file, which serves as the foundation for the system, and
              creating individual components such as buttons, forms, and
              typography. It&apos;s important to maintain consistency throughout the
              development process by using a naming convention, style guide and
              a design library.
            </p>
            <h2 className={h2}>Problems</h2>
            <p className="p max-w-none">
              As with any design project, there will be challenges and problems
              to overcome. One common issue that can arise during the
              development of a design system using Figma is maintaining
              consistency. This can be difficult when multiple designers are
              working on the system, and it can be easy to lose track of
              changes. Additionally, maintaining the system can also be
              challenging as design trends change over time.
            </p>
            <h2 className={h2}>Results</h2>
            <p className="p max-w-none">
              Despite these challenges, the end result of a design system
              created using Figma can be extremely beneficial. It can help to
              improve the user experience by providing a consistent look and
              feel across all products, and it can also save time and resources
              by streamlining the design and development process. Additionally,
              a design system can also be used as a way to create a common
              language between designers and developers, improving communication
              and collaboration.
            </p>
            <h2 className={h2}>Areas of Improvement</h2>
            <p className="p max-w-none">
              As the design system is being used, it&apos;s important to continue to
              evaluate and improve it. This includes gathering feedback from
              users and stakeholders, as well as monitoring the performance of
              the system in terms of usability, accessibility and performance.
              Additionally, it&apos;s also important to keep the design system up to
              date with current design trends and best practices.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
