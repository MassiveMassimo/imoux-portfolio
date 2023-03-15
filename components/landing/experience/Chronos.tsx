import Image from "next/image";
import mediumZoom from "medium-zoom";
import chronosCertificate from "/public/chronos/chronos-certificate.png";
import chronosMobile from "/public/chronos/chronos-mobile.png";
import chronosPost from "/public/chronos/chronos-post.png";
import chronosShirtBlack from "/public/chronos/chronos-shirt-black.png";
import chronosShirtWhite from "/public/chronos/chronos-shirt-white.png";
import chronosWeb from "/public/chronos/chronos-web.png";
import { useEffect } from "react";

export default function Chronos() {
  useEffect(() => {
    mediumZoom(".zoom", {});
  }, []);

  return (
    <div className="flex h-full basis-3/4 flex-col overflow-hidden">
      <h1 className="bg-gradient-to-b from-slate-900 to-slate-900/60 bg-clip-text pb-4 text-3xl font-extrabold tracking-tight text-transparent dark:from-white dark:to-white/40 md:text-4xl lg:text-5xl">
        Chief Creative Officer
      </h1>
      <h3 className="text-base font-medium text-slate-600 dark:text-slate-400 lg:text-lg">
        at Chronos <span className="italic">(10/2020 - 01/2021)</span>
      </h3>
      <div className="my-4 h-1 w-full rounded-full bg-black/5 dark:bg-white/5" />
      <div className="flex grow flex-col gap-5">
        <ul className="flex max-h-[20vh] list-disc flex-col overflow-y-scroll pl-5">
          <li className="text-base text-slate-600 dark:text-slate-400">
            Conducted extensive research and developed a vibrant color palette
            and recognizable logo for the class of 2020 branding which was used
            across multiple platforms to increase awareness of our class in
            various online platforms.
          </li>
          <li className="text-base text-slate-600 dark:text-slate-400">
            Collaborated with developers to produce a digital catalogue/yearbook
            for the class of 2020, featuring hundreds of students and
            facilitating easier online socialization during online learning.
          </li>
          <li className="text-base text-slate-600 dark:text-slate-400">
            Managed a team of aspiring student designers, overseeing the
            creation of social media posts and other creative projects.
          </li>
        </ul>
        <div className="relative flex grow snap-x snap-mandatory flex-row space-x-10 overflow-y-clip overflow-x-scroll">
        <figure className="relative aspect-[13/9] snap-start">
            <Image
              alt="Chronos Karya Angkatan Website"
              className="zoom rounded-lg object-contain"
              fill
              src={chronosWeb}
              placeholder="blur"
            />
          </figure>
          <figure className="relative aspect-square snap-start">
            <Image
              alt="Chronos Karya Angkatan Mobile"
              className="zoom rounded-lg object-contain"
              fill
              src={chronosMobile}
              placeholder="blur"
            />
          </figure>
          <figure className="relative aspect-square snap-start">
            <Image
              alt="Chronos Instagram Post"
              className="zoom rounded-lg object-contain"
              fill
              src={chronosPost}
              placeholder="blur"
            />
          </figure>
          <figure className="relative aspect-[5306/3964] snap-start">
            <Image
              alt="Chronos Black Shirt"
              className="zoom rounded-lg object-contain"
              fill
              src={chronosShirtBlack}
              placeholder="blur"
            />
          </figure>
          <figure className="relative aspect-[5306/3964] snap-start">
            <Image
              alt="Chronos White Shirt"
              className="zoom rounded-lg object-contain"
              fill
              src={chronosShirtWhite}
              placeholder="blur"
            />
          </figure>
          <figure className="relative aspect-video snap-start">
            <Image
              alt="Chronos Tutoring Certificate"
              className="zoom rounded-lg object-contain"
              fill
              src={chronosCertificate}
              placeholder="blur"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
