import Image from "next/image";
import mediumZoom from "medium-zoom";
import siliconCover from "/public/compfest/silicon-cover.png";
import uiuxMeet from "/public/compfest/uiux-meet.jpg";
import techmeet from "/public/compfest/techmeet.jpg";
import itdev from "/public/compfest/itdev.jpg";
import { RefObject, useEffect, useRef } from "react";

export default function Compfest() {
  const carouselTop = useRef<HTMLDivElement>(null);
  const carouselBottom = useRef<HTMLDivElement>(null);

  const horizontalScrolling = (
    carouselRef: RefObject<HTMLDivElement>
  ) => {
    let scrolling = false;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (!scrolling) {
        scrolling = true;

        carouselRef.current?.scrollBy({
          left: event.deltaY < 0 ? -10 : 10,
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
        UI/UX Design Manager
      </h1>

      {/* <div className="my-4 h-1 w-full rounded-full bg-black/5 dark:bg-white/5" /> */}

      <div className="relative m-1 flex grow flex-col gap-5 rounded-xl px-4 pt-6 pb-2 outline outline-slate-200 dark:outline-slate-800/60">
        <h3 className="absolute -top-4 bg-slate-100 px-5 text-base font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-400 lg:text-lg">
          at COMPFEST <span className="italic">(12/2021 - 11/2022)</span>
        </h3>
        <div
          ref={carouselTop}
          className="mx-5 mt-3 flex snap-x snap-mandatory flex-row gap-5 overflow-x-scroll pb-2"
        >
          <div className="shrink-0 basis-2/5 snap-start text-base text-slate-600 dark:text-slate-400">
            <svg
              className="mr-1 inline-flex h-5 flex-shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5.74189C5 3.6753 6.6753 2 8.74191 2H15.1625C17.2291 2 18.9045 3.6753 18.9045 5.74189C18.9045 7.05047 18.2327 8.20219 17.2153 8.87098C18.2327 9.5398 18.9045 10.6915 18.9045 12.0001C18.9045 14.0667 17.2291 15.742 15.1625 15.742H15.0813C14.1125 15.742 13.2296 15.3738 12.5651 14.7697V18.2175C12.5651 20.3116 10.846 22 8.76207 22C6.70063 22 5 20.3298 5 18.2581C5 16.9496 5.67166 15.7979 6.68903 15.1291C5.67166 14.4603 5 13.3086 5 12.0001C5 10.6915 5.67172 9.5398 6.68916 8.87098C5.67172 8.20219 5 7.05047 5 5.74189ZM11.3394 9.48387H8.74191C7.35223 9.48387 6.2257 10.6104 6.2257 12.0001C6.2257 13.3844 7.34355 14.5076 8.72582 14.5162C8.73117 14.5162 8.73652 14.5162 8.74191 14.5162H11.3394V9.48387ZM12.5651 12.0001C12.5651 13.3897 13.6916 14.5163 15.0813 14.5163H15.1625C16.5522 14.5163 17.6788 13.3897 17.6788 12.0001C17.6788 10.6104 16.5522 9.48387 15.1625 9.48387H15.0813C13.6916 9.48387 12.5651 10.6104 12.5651 12.0001ZM8.74191 15.742C8.73652 15.742 8.73117 15.742 8.72582 15.742C7.34355 15.7506 6.2257 16.8738 6.2257 18.2581C6.2257 19.6427 7.36729 20.7743 8.76207 20.7743C10.1793 20.7743 11.3394 19.6245 11.3394 18.2175V15.742H8.74191ZM8.74191 3.2257C7.35223 3.2257 6.2257 4.35224 6.2257 5.74189C6.2257 7.13156 7.35223 8.25809 8.74191 8.25809H11.3394V3.2257H8.74191ZM12.5651 8.25809H15.1625C16.5522 8.25809 17.6788 7.13156 17.6788 5.74189C17.6788 4.35224 16.5522 3.2257 15.1625 3.2257H12.5651V8.25809Z"
                className="fill-slate-900 dark:fill-slate-100"
              />
            </svg>
            Designed and developed an extensive design system with over 100
            components and styles complete with states and interactions that was
            used by over 6000 people on Figma.
          </div>
          <div className="shrink-0 basis-2/5 snap-start text-base text-slate-600 dark:text-slate-400">
            <svg
              className="mr-1 inline-flex h-5 flex-shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 3C13.0147 3 11 5.015 11 7.5C11 9.985 13.0147 12 15.5 12C17.9853 12 20 9.985 20 7.5C20 5.015 17.9853 3 15.5 3ZM12.0625 13.344C10.2284 14.101 9 15.956 9 18V20C9 20.552 9.4477 21 10 21H21C21.5523 21 22 20.552 22 20V18C22 16.004 20.7648 14.194 18.9375 13.406C18.6803 13.295 18.3806 13.292 18.125 13.406C17.2402 13.803 16.3782 14 15.5 14C14.6248 14 13.7598 13.792 12.8438 13.375C12.5919 13.26 12.3183 13.238 12.0625 13.344Z"
                className="fill-slate-900 dark:fill-slate-100"
              />
              <path
                d="M8 4C5.7909 4 4 5.791 4 8C4 10.209 5.7909 12 8 12C8.8294 12 9.5865 11.772 10.2528 11.306C8.544 8.76603 8.7862 6.334 9.7175 4.375C9.1856 4.123 8.6014 4 8 4ZM5.0625 13.344C3.2284 14.101 2 15.956 2 18V20C2 20.552 2.4477 21 3 21L7.1528 21.002C6.9188 20.242 6.9876 19.01 7.003 18.013C7.0355 15.896 7.911 14.386 8.2539 13.988C7.6237 13.983 6.8674 13.83 6.3125 13.594C6.1785 13.537 6.1007 13.492 5.8438 13.375C5.5919 13.26 5.3183 13.238 5.0625 13.344Z"
                className="fill-slate-900/40 dark:fill-slate-100/40"
              />
            </svg>
            Led a team of designers in collaborating with software engineers to
            research, design, and test more than 20 web pages for compfest.id,
            resulting in successful deplopment to real users.
          </div>
          <div className="shrink-0 basis-2/5 snap-start text-base text-slate-600 dark:text-slate-400">
            <svg
              className="mr-1 inline-flex h-5 flex-shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.97469 6.77699C9.42198 5.35637 11.5079 4.16471 11.61 4.12892C11.8583 4.04178 12.4311 4.04178 12.6877 4.12892C12.8458 4.18258 21.249 9.02697 21.725 9.33887C21.8594 9.42689 21.9352 9.58944 21.9352 9.78952C21.9352 9.9033 21.897 9.98371 21.7904 10.0945C21.6091 10.2827 13.0085 15.2787 12.6647 15.3955C12.2765 15.5274 11.7755 15.4851 11.3855 15.2876C10.6313 14.9057 2.64589 10.2311 2.51392 10.0942C2.34509 9.91921 2.31982 9.6879 2.44729 9.48421C2.50349 9.3944 3.75849 8.64394 6.97469 6.77699Z"
                className="fill-slate-900 dark:fill-slate-100"
              />
              <path
                d="M20.6002 11.9185L21.213 11.558C21.5501 11.3596 21.8409 11.1962 21.8593 11.1947C21.8777 11.1933 21.8927 12.4133 21.8927 13.9058V16.6194L21.994 16.6858C22.0497 16.7223 22.1549 16.86 22.2277 16.9918C22.3997 17.3029 22.4138 17.7498 22.2608 18.0396C21.7088 19.0858 20.2042 18.7826 20.1201 17.6082C20.1009 17.3392 20.1131 17.2705 20.2177 17.0565C20.2835 16.922 20.3965 16.7623 20.4688 16.7014L20.6002 16.5909V14.2547V11.9185Z"
                className="fill-slate-900/40 dark:fill-slate-100/40"
              />
              <path
                d="M5.64701 16.0747L5.63369 14.5183L5.62036 12.9618L5.72283 13.0282C6.04712 13.238 10.9006 16.0385 11.0919 16.1262C11.7733 16.4383 12.6612 16.4288 13.3537 16.1022C13.5708 15.9998 18.2853 13.2823 18.6747 13.0351L18.7772 12.97L18.7638 14.5224L18.7506 16.0747L18.6081 16.3633C18.5298 16.5221 18.3793 16.736 18.2738 16.8387C18.0737 17.0335 14.7836 18.9646 14.0261 19.3318C13.5127 19.5807 13.0326 19.7031 12.4406 19.7359C11.6618 19.7792 10.9675 19.639 10.3046 19.3048C9.50694 18.9026 6.30509 17.0132 6.12373 16.8376C6.01824 16.7355 5.86781 16.5221 5.78946 16.3633L5.64701 16.0747Z"
                className="fill-slate-900/40 dark:fill-slate-100/40"
              />
            </svg>
            Curated and presented engaging internal workshops for members,
            providing comprehensive onboarding and introducing essential design
            principles to improve collaboration and streamline project
            workflows.
          </div>
          <div className="shrink-0 basis-2/5 snap-start text-base text-slate-600 dark:text-slate-400">
            <svg
              className="mr-1 inline-flex h-5 flex-shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.0526 3.64827C11.0527 2.3427 11.0645 2.27892 11.3403 2.09469C11.4375 2.02974 11.5437 2 11.6782 2C11.9177 2 12.1262 2.12614 12.2308 2.33453C12.2951 2.46237 12.3038 2.61896 12.3038 3.64827C12.3039 4.70599 12.2966 4.8305 12.2267 4.9608C12.1024 5.19251 11.9592 5.27435 11.6782 5.27435C11.3972 5.27435 11.254 5.19251 11.1298 4.9608C11.0599 4.8305 11.0526 4.70599 11.0526 3.64827ZM6.48377 4.20057C6.43264 3.92211 6.53583 3.68364 6.76896 3.54149C6.927 3.44514 7.2131 3.43467 7.3736 3.51934C7.43555 3.55204 7.90188 3.99781 8.40988 4.50999C9.38739 5.49542 9.42426 5.54764 9.3652 5.86248C9.32774 6.06211 9.1196 6.28564 8.92147 6.33903C8.59254 6.42759 8.53089 6.38433 7.47901 5.3277C6.65375 4.4986 6.50826 4.33388 6.48377 4.20057ZM14.9245 4.52934C15.4217 4.0278 15.8848 3.58207 15.9537 3.53882C16.1046 3.44397 16.3909 3.43583 16.5568 3.52163C16.8046 3.64977 16.9315 3.93086 16.871 4.21788C16.8273 4.42519 14.9773 6.28076 14.7544 6.34079C14.3141 6.45941 13.9068 6.0604 13.9925 5.59436C14.0161 5.46555 14.1644 5.29608 14.9245 4.52934ZM18.9499 11.823C18.9464 11.2953 18.8162 10.8419 18.5393 10.3931L18.4292 10.2145L20.1947 10.2263C21.945 10.2379 21.9612 10.2388 22.0905 10.331C22.132 10.3606 22.167 10.3816 22.1966 10.4086C22.3658 10.5632 22.3564 10.9132 22.3564 14.1804V17.6513L22.2653 17.8134C22.2072 17.9167 22.1116 18.0057 22.0018 18.0589C21.8401 18.1372 21.7441 18.1423 20.4349 18.1425L19.0403 18.1426L18.7066 18.4221C18.5231 18.5758 17.5564 19.3871 16.5585 20.225C15.5605 21.0629 14.6408 21.8052 14.5146 21.8745C14.3043 21.9901 14.2521 22.0006 13.8889 22C13.5531 21.9994 13.4609 21.9837 13.2841 21.8967C13.0044 21.759 12.7383 21.4846 12.6041 21.1954C12.4062 20.7686 12.4756 20.1051 12.7499 19.8019C12.8922 19.6447 12.7543 19.7408 12.339 20.0883C11.7748 20.5605 11.5549 20.6637 11.1151 20.663C10.5638 20.662 10.1437 20.412 9.88188 19.929C9.74882 19.6836 9.73864 19.6381 9.73885 19.2894C9.73906 18.8885 9.8282 18.6067 10.0191 18.4035C10.1308 18.2846 10.0946 18.2844 9.87254 18.4027C9.6231 18.5356 9.03455 18.5372 8.74937 18.4058C8.45493 18.2701 8.16228 17.9742 8.02923 17.6778C7.83518 17.2453 7.88812 16.6723 8.15444 16.3231C8.21134 16.2485 8.25789 16.1792 8.25789 16.169C8.25789 16.1589 8.17813 16.1905 8.08061 16.2392C7.81716 16.3707 7.31079 16.384 7.00041 16.2675C6.34596 16.0219 5.95258 15.2525 6.1447 14.5939C6.26145 14.1936 6.39364 14.0514 7.55884 13.0728L8.6745 12.1359H10.7503H12.826L13.6808 12.9956C14.6356 13.956 14.9546 14.199 15.4894 14.3731C15.9161 14.512 16.5494 14.5291 16.9756 14.4132C17.6942 14.2178 18.3659 13.6641 18.6757 13.0118C18.891 12.5585 18.953 12.2895 18.9499 11.823Z"
                className="fill-slate-900 dark:fill-slate-100"
              />
              <path
                d="M8.68493 7.71906C8.01096 7.83135 7.32192 8.1964 6.75577 8.74116L6.56761 8.92222L3.98196 8.93361L1.39635 8.94496L1.26592 9.03797C0.987122 9.23685 1.00009 9.0492 1.00009 12.8873V16.3583L1.09119 16.5203C1.14925 16.6236 1.24482 16.7127 1.35464 16.7659C1.51782 16.8449 1.61221 16.8493 3.12871 16.8493H4.73047L5.50397 17.6189C5.9862 18.0987 6.3357 18.4128 6.43214 18.4531C6.56403 18.5082 7.2151 18.5501 7.2151 18.5036C7.2151 18.4958 7.15875 18.3766 7.08988 18.2388C7.02102 18.1009 6.93426 17.865 6.89709 17.7144C6.83227 17.4518 6.82247 17.438 6.65458 17.3739C6.21448 17.2058 5.66006 16.734 5.4004 16.3066C5.20644 15.9873 5.04786 15.4887 5.01887 15.1068C4.9689 14.449 5.22254 13.6763 5.64604 13.196C5.7489 13.0793 6.39685 12.5115 7.08588 11.9342L8.33868 10.8845H10.7566C12.359 10.8845 13.214 10.8995 13.2918 10.9288C13.3564 10.9531 13.8597 11.4201 14.4103 11.9665C15.5757 13.1231 15.6634 13.1833 16.2248 13.2109C16.5143 13.2252 16.6225 13.2121 16.8149 13.1396C17.2755 12.9659 17.5914 12.5721 17.687 12.0521C17.7292 11.8225 17.7263 11.7406 17.6681 11.5136C17.6303 11.3664 17.5589 11.1787 17.5094 11.0965C17.398 10.9118 15.0972 8.58532 14.7184 8.2744C14.3971 8.0107 13.9305 7.78296 13.5789 7.71831C13.2797 7.66325 9.01591 7.66396 8.68493 7.71906Z"
                className="fill-slate-900/40 dark:fill-slate-100/40"
              />
            </svg>
            Collaborated with project owners and developers to ensure adherence
            to required specifications and measure feasibility, ensuring
            high-quality product delivery.
          </div>
        </div>
        <div
          ref={carouselBottom}
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
