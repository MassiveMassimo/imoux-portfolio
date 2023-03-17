import Image from "next/image";
import mediumZoom from "medium-zoom";
import siliconCover from "/public/compfest/silicon-cover.png";
import uiuxMeet from "/public/compfest/uiux-meet.jpg";
import techmeet from "/public/compfest/techmeet.jpg";
import itdev from "/public/compfest/itdev.jpg";
import { useEffect, useRef } from "react";

export default function Compfest() {
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mediumZoom(".zoom", {});

    carousel.current?.addEventListener("wheel", (event) => {
      event.preventDefault();

      carousel.current?.scrollBy({
        left: event.deltaY < 0 ? -50 : 50,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <div className="flex h-full basis-3/4 flex-col gap-3">
      <h1 className="bg-gradient-to-b from-slate-900 to-slate-900/60 bg-clip-text pb-4 text-3xl font-extrabold tracking-tight text-transparent dark:from-white dark:to-white/40 md:text-4xl lg:text-5xl">
        UI/UX Design Manager
      </h1>

      {/* <div className="my-4 h-1 w-full rounded-full bg-black/5 dark:bg-white/5" /> */}

      <div className="relative m-1 flex grow flex-col gap-5 rounded-xl px-4 pt-6 pb-2 outline outline-slate-200 dark:outline-slate-800/50">
        <h3 className="absolute -top-4 bg-slate-100 px-5 text-base font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-400 lg:text-lg">
          at COMPFEST <span className="italic">(12/2021 - 11/2022)</span>
        </h3>
        <ul className="flex max-h-[30%] list-disc flex-col overflow-y-scroll pl-5">
          <li className="text-base text-slate-600 dark:text-slate-400">
            Designed and developed an extensive design system with over 100+
            components and styles complete with states and interactions that was
            used by over 6000 people on Figma.
          </li>
          <li className="text-base text-slate-600 dark:text-slate-400">
            Led a team of designers in collaborating with software engineers to
            research, design, and test more than 20 web pages for compfest.id,
            resulting in successful deplopment to real users.
          </li>
          <li className="text-base text-slate-600 dark:text-slate-400">
            Curated and presented engaging internal workshops for members,
            providing comprehensive onboarding and introducing essential design
            principles to improve collaboration and streamline project
            workflows.
          </li>
          <li className="text-base text-slate-600 dark:text-slate-400">
            Collaborated with project owners and developers to ensure adherence
            to required specifications and measure feasibility, ensuring
            high-quality product delivery.
          </li>
        </ul>
        <div
          ref={carousel}
          className="relative flex grow snap-x snap-mandatory flex-row space-x-10 overflow-y-clip overflow-x-scroll"
        >
          <figure className="relative aspect-[2/1] snap-start">
            <Image
              alt="Silicon Design System"
              className="zoom rounded-lg object-contain"
              fill
              src={siliconCover}
              placeholder="blur"
            />
          </figure>
          <figure className="relative aspect-[1160/839] snap-start">
            <Image
              alt="COMPFEST UI/UX Meet"
              className="zoom rounded-lg object-contain"
              fill
              src={uiuxMeet}
              placeholder="blur"
            />
          </figure>
          <figure className="relative aspect-[1479/1109] snap-start">
            <Image
              alt="COMPFEST UI/UX Technical Meeting"
              className="zoom rounded-lg object-contain"
              fill
              src={techmeet}
              placeholder="blur"
            />
          </figure>
          <figure className="relative aspect-[1109/1479] snap-start">
            <Image
              alt="COMPFEST IT Dev Main Event"
              className="zoom rounded-lg object-contain"
              fill
              src={itdev}
              placeholder="blur"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
