import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Silicon() {
  let h2 =
    "text-xl font-bold tracking-tight text-slate-800 dark:text-slate-200 md:text-2xl lg:text-3xl";

  const main = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const ref = main.current;
    if (!ref || !ref.textContent) return;
    const text = ref.textContent.split(" ").length;
    const time = text / 238;
    setTime(Math.round(time));
  }, []);

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
            <aside className="flex flex-row space-x-1 center items-center h-8 mt-10">
              <svg
                className="h-full fill-black dark:fill-white p-1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M6.01416 3.9978C3.80516 3.9978 2.01416 5.7888 2.01416 7.9978V15.9978C2.01416 18.2068 3.80516 19.9978 6.01416 19.9978L9.02317 20.0078C9.44917 20.0078 9.89516 20.2038 10.4062 20.6748C10.6052 20.8588 10.8432 21.0888 11.0052 21.3038C11.1852 21.5438 11.4202 22.0008 12.0142 21.9978C12.6082 21.9948 12.8012 21.5908 13.0142 21.3098C13.1752 21.1118 13.3682 20.9228 13.5672 20.7388C14.0792 20.2678 14.5882 19.9978 15.0142 19.9978H18.0142C20.2232 19.9978 22.0142 18.2068 22.0142 15.9978V7.9978C22.0142 5.7888 20.2232 3.9978 18.0142 3.9978H15.0142C13.8032 3.9978 12.7482 4.55381 12.0142 5.40381C11.2802 4.55381 10.2252 3.9978 9.01416 3.9978H6.01416ZM6.01416 5.9978H9.01416C10.1192 5.9978 11.0142 6.8928 11.0142 7.9978L11.0202 18.6468C10.3962 18.2418 9.72617 17.9978 9.01416 17.9978H6.01416C4.90916 17.9978 4.01416 17.1028 4.01416 15.9978V7.9978C4.01416 6.8928 4.90916 5.9978 6.01416 5.9978ZM15.0142 5.9978H18.0142C19.1192 5.9978 20.0142 6.8928 20.0142 7.9978V15.9978C20.0142 17.1028 19.1192 17.9978 18.0142 17.9978H15.0142C14.3022 17.9978 13.6342 18.2548 13.0102 18.6598L13.0142 7.9978C13.0142 6.8928 13.9092 5.9978 15.0142 5.9978Z"
                />
                <path
                  d="M4 8C4 6.89543 4.89543 6 6 6H9C10.1046 6 11 6.89543 11 8V18.6406C11 18.6406 10.1596 18 9 18C8.40869 18 7.12035 18 5.99958 18C4.89501 18 4 17.1046 4 16V8Z"
                />
              </svg>
              <p className="font-serif text-xl font-semibold italic">
                {time} minute read
              </p>
            </aside>
            <div className="my-10 h-1 w-full rounded-full bg-black/10 dark:bg-white/5" />
            <div className="grow">
              <nav className="sticky top-0 pt-20">
                <p>nav</p>
              </nav>
            </div>
            <div>
              <h4 className="mb-5 text-lg font-semibold text-slate-600 dark:text-slate-400">
                More by me
              </h4>
              <Link href="/" className="group">
                <div className="mb-2 aspect-[18/9] w-full origin-bottom rounded-lg bg-cyan-400 transition-transform duration-300 group-hover:scale-105"></div>
                <h5>Something</h5>
              </Link>
            </div>
          </div>
          <div
            ref={main}
            className="highlight w-4/5 rounded-3xl bg-white/30 px-12 pt-16 backdrop-blur-3xl dark:bg-slate-900/20 md:px-14 lg:px-16"
          >
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
              An Extensive and Feature-Rich Design System for Figma
            </h1>
            <div className="mt-4 mb-10 h-1 w-full rounded-full bg-black/10 dark:bg-white/5" />
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
              typography. It&apos;s important to maintain consistency throughout
              the development process by using a naming convention, style guide
              and a design library.
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
              As the design system is being used, it&apos;s important to
              continue to evaluate and improve it. This includes gathering
              feedback from users and stakeholders, as well as monitoring the
              performance of the system in terms of usability, accessibility and
              performance. Additionally, it&apos;s also important to keep the
              design system up to date with current design trends and best
              practices.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
