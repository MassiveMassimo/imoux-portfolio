import mediumZoom from "medium-zoom";
import { RefObject, useEffect, useRef } from "react";
import { experiences } from "./data";

export default function Experience({ experienceId }: { experienceId: string }) {
  const experience = experiences[experienceId];

  const carouselTop = useRef<HTMLDivElement>(null);
  const carouselBottom = useRef<HTMLDivElement>(null);

  const horizontalScrolling = (carouselRef: RefObject<HTMLDivElement>) => {
    let scrolling = false;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (!scrolling) {
        scrolling = true;

        carouselRef.current?.scrollBy({
          left: event.deltaY < 0 || event.deltaX < 0 ? -100 : 100,
          behavior: "smooth",
        });

        setTimeout(() => {
          scrolling = false;
        }, 150);
      }
    };

    carouselRef.current?.addEventListener("wheel", handleWheel);
    return () => {
      carouselRef.current?.removeEventListener("wheel", handleWheel);
    };
  };

  useEffect(() => {
    mediumZoom(".zoom", {});

    const unsubscribeTop = horizontalScrolling(carouselTop);
    const unsubscribeBottom = horizontalScrolling(carouselBottom);
    return () => {
      unsubscribeTop();
      unsubscribeBottom();
    };
  }, []);

  return (
    <div className="flex h-full basis-3/4 flex-col gap-3">
      <h1 className="bg-gradient-to-b from-slate-900 to-slate-900/60 bg-clip-text pb-4 text-3xl font-extrabold tracking-tight text-transparent dark:from-white dark:to-white/40 md:text-4xl lg:text-5xl">
        {experience.title}
      </h1>
      <div className="relative m-1 flex grow flex-col gap-5 rounded-xl px-4 pt-6 pb-2 outline outline-slate-200 dark:outline-slate-800/60">
        <h3 className="absolute -top-4 bg-slate-100 px-5 text-base font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-400 lg:text-lg">
          {experience.organization}{" "}
          <span className="italic">{experience.duration}</span>
        </h3>
        <div
          ref={carouselTop}
          className="mx-5 mt-3 flex snap-x snap-mandatory flex-row gap-5 overflow-x-scroll pb-2"
        >
          {experience.descriptions.map((description, index) => (
            <div
              key={description}
              className="shrink-0 basis-2/5 snap-start text-base text-slate-600 dark:text-slate-400"
            >
              {experience.icons[index]}
              {description}
            </div>
          ))}
        </div>
        <div
          ref={carouselBottom}
          className="relative flex grow snap-x snap-mandatory flex-row space-x-10 overflow-y-clip overflow-x-scroll"
        >
          {experience.images.map((image) => image)}
        </div>
      </div>
    </div>
  );
}
