import Image from "next/image";
import mediumZoom from "medium-zoom";
import ristekForm from "/public/ristek/ristek-form.png";
import ristekMug from "/public/ristek/ristek-mug.png";
import { useEffect, useRef } from "react";

export default function Ristek() {
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
        Vice Director of Digital Product Design
      </h1>

      {/* <div className="my-4 h-1 w-full rounded-full bg-black/5 dark:bg-white/5" /> */}

      <div className="relative m-1 flex grow flex-col gap-5 rounded-xl px-4 pt-6 pb-2 outline dark:outline-slate-800/50 outline-slate-200">
        <h3 className="absolute bg-slate-100 dark:bg-slate-900 -top-4 px-5 text-base font-medium text-slate-600 dark:text-slate-400 lg:text-lg">
          at RISTEK Fasilkom UI{" "}
          <span className="italic">(1/2023 - Present)</span>
        </h3>
        <ul className="flex max-h-[30%] list-disc flex-col overflow-y-scroll pl-5">
          <li className="text-base text-slate-600 dark:text-slate-400">
            Revamped the recruitment page for new RISTEK members by improving
            the user experience and increasing the number of applications
            received by implementing a new form layout and more engaging 3D hero
            section.
          </li>
          <li className="text-base text-slate-600 dark:text-slate-400">
            Increased the number of new registrations by 25% by implementing a
            new form design that streamlined the selection process and improved
            legibility.
          </li>
        </ul>
        <div
          ref={carousel}
          className="relative flex grow snap-x snap-mandatory flex-row space-x-10 overflow-y-clip overflow-x-scroll rounded-lg"
        >
          <figure className="aspect-video h-full snap-start">
            <div className="h-full w-full overflow-hidden rounded-lg">
              <iframe
                src="https://my.spline.design/untitled-eee72585edaa0cdd3c65313be3403e0e/"
                className="pointer-events-none h-[125%] w-full border-none"
              ></iframe>
            </div>
          </figure>
          <figure className="relative aspect-[3/2] snap-start">
            <Image
              alt="RISTEK 2023 Open Recruitment Form"
              className="zoom rounded-lg object-contain"
              fill
              src={ristekForm}
              placeholder="blur"
            />
          </figure>
          <figure className="relative aspect-[4/3] snap-start">
            <Image
              alt="RISTEK Official Mug Merchandise"
              className="zoom rounded-lg object-contain"
              fill
              src={ristekMug}
              placeholder="blur"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
