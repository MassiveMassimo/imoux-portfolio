import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { RefObject, useEffect, useRef, useState } from "react";
import { Waypoint } from "react-waypoint";
import mediumZoom from "medium-zoom";
import header from "../../public/silicon/silicon-header.png";
import arcana from "../../public/silicon/arcana.png";
import atomicdesign from "../../public/silicon/atomic-design.png";

export default function Silicon() {
  let h2 =
    "text-xl font-bold tracking-tight text-slate-800 dark:text-slate-200 md:text-2xl lg:text-3xl";

  const [time, setTime] = useState(0);
  const main = useRef<HTMLDivElement>(null);

  const introductionLink = useRef<HTMLButtonElement>(null);
  const ideationLink = useRef<HTMLButtonElement>(null);
  const developmentLink = useRef<HTMLButtonElement>(null);
  const problemsLink = useRef<HTMLButtonElement>(null);
  const resultsLink = useRef<HTMLButtonElement>(null);
  const improvementsLink = useRef<HTMLButtonElement>(null);

  const introductionSection = useRef<HTMLDivElement>(null);
  const ideationSection = useRef<HTMLDivElement>(null);
  const developmentSection = useRef<HTMLDivElement>(null);
  const problemsSection = useRef<HTMLDivElement>(null);
  const resultsSection = useRef<HTMLDivElement>(null);
  const improvementsSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = main.current;
    if (!ref || !ref.textContent) return;
    const text = ref.textContent.split(" ").length;
    const time = text / 238;
    setTime(Math.round(time));

    mediumZoom(".zoom", {});
  }, []);

  const handleClick = (section: RefObject<HTMLDivElement>) => {
    section.current?.scrollIntoView();
  };

  function handleEnter(link: RefObject<HTMLButtonElement>) {
    link.current?.focus({ preventScroll: true });
  }

  function handleLeave(link: RefObject<HTMLButtonElement>) {
    link.current?.blur();
  }

  return (
    <>
      <Head>
        <title>Silicon Design System | Imo UX</title>
        <meta
          name="description"
          content="Welcome to my portfolio where I showcase my projects, interests, and overall taste in design!"
        />
      </Head>
      <div className="mx-auto -space-y-40 pb-40">
        <header className="relative h-[50vh] w-full">
          <Image
            alt="Silicon Design System Header"
            className="object-cover"
            src={header}
            quality={100}
            placeholder="blur"
            fill
          />
        </header>
        <article className="z-10 flex px-8 md:space-x-10 lg:px-16">
          <div className="mt-40 hidden w-1/5 flex-col md:flex">
            <aside className="mt-10 flex w-full flex-col space-y-2">
              <div className="flex flex-row items-center space-x-3">
                <svg
                  className="h-6 flex-shrink-0 fill-black dark:fill-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 3.9978C3.791 3.9978 2 5.7888 2 7.9978V15.9978C2 18.2068 3.791 19.9978 6 19.9978L9.00901 20.0078C9.43501 20.0078 9.881 20.2038 10.392 20.6748C10.591 20.8588 10.829 21.0888 10.991 21.3038C11.171 21.5438 11.406 22.0008 12 21.9978C12.594 21.9948 12.787 21.5908 13 21.3098C13.161 21.1118 13.354 20.9228 13.553 20.7388C14.065 20.2678 14.574 19.9978 15 19.9978H18C20.209 19.9978 22 18.2068 22 15.9978V7.9978C22 5.7888 20.209 3.9978 18 3.9978H15C13.789 3.9978 12.734 4.55381 12 5.40381C11.266 4.55381 10.211 3.9978 9 3.9978H6ZM6 5.9978H9C10.105 5.9978 11 6.8928 11 7.9978L11.006 18.6468C10.382 18.2418 9.71201 17.9978 9 17.9978H6C4.895 17.9978 4 17.1028 4 15.9978V7.9978C4 6.8928 4.895 5.9978 6 5.9978ZM15 5.9978H18C19.105 5.9978 20 6.8928 20 7.9978V15.9978C20 17.1028 19.105 17.9978 18 17.9978H15C14.288 17.9978 13.62 18.2548 12.996 18.6598L13 7.9978C13 6.8928 13.895 5.9978 15 5.9978Z"
                    fillOpacity="0.4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 9C9 8.44772 8.55228 8 8 8H7C6.44772 8 6 8.44772 6 9V9C6 9.55228 6.44772 10 7 10H8C8.55228 10 9 9.55228 9 9V9ZM9 12C9 11.4477 8.55228 11 8 11H7C6.44772 11 6 11.4477 6 12V12C6 12.5523 6.44772 13 7 13H8C8.55228 13 9 12.5523 9 12V12ZM6 15C6 14.4477 6.44772 14 7 14H8C8.55228 14 9 14.4477 9 15V15C9 15.5523 8.55228 16 8 16H7C6.44772 16 6 15.5523 6 15V15ZM18 9C18 8.44772 17.5523 8 17 8H16C15.4477 8 15 8.44772 15 9V9C15 9.55228 15.4477 10 16 10H17C17.5523 10 18 9.55228 18 9V9ZM15 12C15 11.4477 15.4477 11 16 11H17C17.5523 11 18 11.4477 18 12V12C18 12.5523 17.5523 13 17 13H16C15.4477 13 15 12.5523 15 12V12ZM18 15C18 14.4477 17.5523 14 17 14H16C15.4477 14 15 14.4477 15 15V15C15 15.5523 15.4477 16 16 16H17C17.5523 16 18 15.5523 18 15V15Z"
                  />
                </svg>
                <p className="grow truncate font-serif text-base font-bold italic lg:text-lg">
                  {time} minute read
                </p>
              </div>
              <div className="flex flex-row items-center space-x-3">
                <svg
                  className="h-6 flex-shrink-0 fill-black dark:fill-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.02407 3C4.81688 3 3 4.793 3 7V9L3.03095 17C3.03095 19.206 4.81887 21 7.02407 21H17.0069C19.2121 21 21 19.209 21 17L20.969 9V7C20.969 4.789 19.2101 3 17.0069 3C15.9718 3 8.00405 3.00002 7.02407 3ZM7.02407 5C7.98555 5 15.9718 4.98582 17.0069 5C18.102 5 18.9725 5.888 18.9725 7V8C17.0518 8 6.91725 8 4.99656 8V7C4.99656 5.903 5.91399 5 7.02407 5ZM4.99656 10C6.91725 10 17.0518 10 18.9725 10L19.0034 17C19.0034 18.101 18.11 19 17.0069 19H7.02407C5.92197 19 5.02751 18.105 5.02751 17L4.99656 10Z"
                    fillOpacity="0.4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3V5C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5V3ZM17 3C17 2.44772 16.5523 2 16 2C15.4477 2 15 2.44772 15 3V5C15 5.55228 15.4477 6 16 6C16.5523 6 17 5.55228 17 5V3ZM7 16C7 15.4477 7.44772 15 8 15H11C11.5523 15 12 15.4477 12 16C12 16.5523 11.5523 17 11 17H8C7.44772 17 7 16.5523 7 16ZM13 12C12.4477 12 12 12.4477 12 13C12 13.5523 12.4477 14 13 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H13Z"
                  />
                </svg>
                <p className="grow truncate font-serif text-base font-bold italic lg:text-lg">
                  17 January, 2023
                </p>
              </div>
              <div
                className="group z-10 flex cursor-pointer flex-row items-center space-x-3 rounded-lg backdrop-blur-xl transition-all hover:w-fit hover:bg-cyan-500/10 hover:py-2 hover:px-4"
                onClick={() => {
                  window.open(
                    "https://www.figma.com/community/file/1082210150893947691",
                    "_blank"
                  );
                }}
              >
                <svg
                  className="h-6 flex-shrink-0 fill-black dark:fill-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M7.58456 21.9986C8.87616 21.9655 10.1226 21.3681 11.2147 20.2736L12.748 18.7374C13.1391 18.3458 13.1391 17.7182 12.748 17.3267C12.3569 16.9351 11.699 16.9351 11.3079 17.3267L9.80676 18.8629C8.35371 20.3188 6.74222 20.4644 5.14476 18.8629C3.5463 17.2624 3.69171 15.6478 5.14476 14.1919L8.17922 11.1505C9.63228 9.69462 11.2438 9.55004 12.8412 11.1505L13.2794 11.5893C14.2231 12.5352 15.632 11.1244 14.6874 10.1786L14.2491 9.73981C11.8063 7.29186 8.95538 7.55191 6.77129 9.73981L3.73683 12.7812C1.55274 14.9691 1.29302 17.8257 3.73683 20.2736C4.95823 21.4976 6.29396 22.0308 7.58456 21.9986Z"
                  />
                  <path d="M13.7749 15.9905C14.981 15.9122 16.1551 15.3342 17.2216 14.2674L20.2606 11.2276C22.708 8.78087 22.4479 5.9257 20.2606 3.73892C18.0742 1.55214 15.2181 1.29221 12.7716 3.73892L11.236 5.27438C10.8444 5.66578 10.8444 6.29301 11.236 6.6844C11.6277 7.07579 12.2865 7.07579 12.6782 6.6844L14.1816 5.14894C15.7825 3.54824 17.3953 3.69376 18.8506 5.14894C20.3058 6.60412 20.4514 8.21686 18.8506 9.81756L15.8116 12.8574C15.0734 13.595 14.3443 13.9402 13.6493 13.9854C12.8088 14.0406 11.927 13.6422 11.1426 12.8574L10.7038 12.4188C10.3121 12.0274 9.68543 12.0274 9.29376 12.4188C8.90208 12.8102 8.90208 13.4374 9.29376 13.8288L9.73263 14.2674C10.8946 15.4295 12.2946 16.0879 13.7749 15.9905Z" />
                </svg>
                <p className="grow truncate font-serif text-base font-bold italic underline decoration-cyan-500 lg:text-lg">
                  figma.com/community/file/1082210150893947691
                </p>
              </div>
            </aside>
            <div className="my-10 h-1 w-full rounded-full bg-black/5 dark:bg-white/5" />
            <aside className="flex flex-col space-y-2">
              <div className="group z-10 flex w-fit flex-row items-center space-x-3 rounded-lg backdrop-blur-xl transition-all hover:bg-white/70 hover:py-2 hover:px-4 dark:hover:bg-white/5">
                <svg
                  className="h-6 flex-shrink-0 fill-black dark:fill-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.028 1.9989C6.49002 1.9989 2 6.47489 2 11.9969C2 17.5189 6.49002 21.9959 12.028 21.9959C14.731 21.9959 17.273 20.9299 19.142 19.0589C19.533 18.6669 19.535 18.0419 19.142 17.6529C18.75 17.2629 18.123 17.2609 17.732 17.6529C16.236 19.1509 14.192 19.9959 12.028 19.9959C7.59802 19.9959 4.00601 16.4149 4.00601 11.9969C4.00601 7.57989 7.59802 3.9989 12.028 3.9989C12.582 3.9989 13.031 3.5509 13.031 2.9989C13.031 2.4469 12.582 1.9989 12.028 1.9989ZM15.695 2.90491C15.452 2.98491 15.253 3.15691 15.131 3.40491C14.887 3.90091 15.073 4.5049 15.57 4.7489C15.837 4.8789 16.072 5.02591 16.322 5.18591C16.788 5.48291 17.434 5.3389 17.732 4.8739C18.03 4.4079 17.885 3.7959 17.419 3.4989C17.105 3.2989 16.781 3.1309 16.447 2.9679C16.199 2.8459 15.939 2.82591 15.695 2.90491ZM19.236 5.37292C18.982 5.34292 18.702 5.42192 18.484 5.59192C18.049 5.93292 17.985 6.56392 18.328 6.99792C18.511 7.23092 18.703 7.46492 18.86 7.71692C19.152 8.18592 19.769 8.31993 20.239 8.02893C20.71 7.73793 20.844 7.15491 20.553 6.68591C20.357 6.37091 20.124 6.03992 19.894 5.74792C19.723 5.53092 19.491 5.40392 19.236 5.37292ZM20.615 9.02893C20.074 9.14793 19.743 9.67688 19.863 10.2159C19.927 10.5049 19.989 10.7959 20.02 11.0909C20.078 11.6399 20.566 12.0239 21.117 11.9659C21.667 11.9079 22.053 11.4219 21.994 10.8729C21.955 10.5029 21.918 10.1399 21.837 9.77893C21.718 9.23993 21.156 8.90993 20.615 9.02893ZM21.054 13.0909C20.516 12.9609 19.962 13.3039 19.832 13.8409C19.762 14.1299 19.651 14.4069 19.55 14.6839C19.36 15.2029 19.656 15.7449 20.177 15.9339C20.697 16.1229 21.241 15.8909 21.43 15.3719C21.557 15.0239 21.687 14.6709 21.775 14.3089C21.905 13.7729 21.592 13.2209 21.054 13.0909Z"
                    fillOpacity="0.4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 6C12.5523 6 13 6.44772 13 7V11.5858L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V7C11 6.44772 11.4477 6 12 6Z"
                  />
                </svg>
                <p className="grow whitespace-nowrap font-serif text-base font-bold italic lg:text-lg">
                  Ongoing{" "}
                  <span className="hidden group-hover:inline-flex">
                    [October 2021 - present]
                  </span>
                </p>
              </div>
              <div className="flex flex-row items-center space-x-3">
                <svg
                  className="h-6 flex-shrink-0 fill-black dark:fill-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.5 3C10.9853 3 13 5.015 13 7.5C13 9.985 10.9853 12 8.5 12C6.0147 12 4 9.985 4 7.5C4 5.015 6.0147 3 8.5 3ZM11.9375 13.344C13.7716 14.101 15 15.956 15 18V20C15 20.552 14.5523 21 14 21H3C2.4477 21 2 20.552 2 20V18C2 16.004 3.2352 14.194 5.0625 13.406C5.3197 13.295 5.6194 13.292 5.875 13.406C6.7598 13.803 7.6218 14 8.5 14C9.3752 14 10.2402 13.792 11.1562 13.375C11.4081 13.26 11.6817 13.238 11.9375 13.344Z" />
                  <path
                    opacity="0.4"
                    d="M16 4C18.2091 4 20 5.791 20 8C20 10.209 18.2091 12 16 12C15.1706 12 14.4135 11.772 13.7472 11.306C15.456 8.76603 15.2138 6.334 14.2825 4.375C14.8144 4.123 15.3986 4 16 4ZM18.9375 13.344C20.7716 14.101 22 15.956 22 18V20C22 20.552 21.5523 21 21 21L16.8472 21.002C17.0812 20.242 17.0124 19.01 16.997 18.013C16.9645 15.896 16.089 14.386 15.7461 13.988C16.3763 13.983 17.1326 13.83 17.6875 13.594C17.8215 13.537 17.8993 13.492 18.1562 13.375C18.4081 13.26 18.6817 13.238 18.9375 13.344Z"
                  />
                </svg>
                <p className="grow truncate font-serif text-base font-bold italic lg:text-lg">
                  Team
                </p>
              </div>
              <div className="flex flex-wrap pt-4">
                <div className="flex flex-row items-center space-x-1 rounded-lg py-1 px-3 transition-all hover:bg-slate-300 hover:dark:bg-slate-700">
                  #figma
                </div>
                <div className="flex flex-row items-center space-x-1 rounded-lg py-1 px-3 transition-all hover:bg-slate-300 hover:dark:bg-slate-700">
                  #compfest
                </div>
              </div>
            </aside>
            <div className="mt-10 h-1 w-full rounded-full bg-black/5 dark:bg-white/5" />
            <aside className="w-full grow">
              <nav className="sticky top-0 flex w-full flex-col space-y-2 pt-20">
                <h4 className="mb-3 text-xl font-semibold text-slate-700 dark:text-slate-200">
                  Chapters
                </h4>
                <button
                  // href="#introduction"
                  ref={introductionLink}
                  onClick={() => {
                    handleClick(introductionSection);
                  }}
                  className="group flex cursor-pointer items-center text-left text-slate-500 outline-none transition-all hover:text-black focus:pl-2 focus:text-black dark:hover:text-white dark:focus:text-white"
                >
                  Introduction
                  <svg
                    className="h-4 flex-shrink-0 origin-left scale-0 fill-black pl-1 transition-transform group-hover:scale-100 dark:fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.1662 5.02188C9.91618 4.97088 9.64718 4.99288 9.41818 5.14688C8.96119 5.45288 8.83319 6.09288 9.13819 6.55288L12.7502 11.9899L9.13819 17.4279C8.83319 17.8869 8.96119 18.5279 9.41818 18.8339C9.87618 19.1399 10.5142 19.0118 10.8192 18.5528L14.8052 12.5529C15.0282 12.2169 15.0282 11.7639 14.8052 11.4279L10.8192 5.42788C10.6672 5.19789 10.4162 5.07188 10.1662 5.02188Z" />
                  </svg>
                </button>
                <button
                  // href="#ideation"
                  ref={ideationLink}
                  onClick={() => {
                    handleClick(ideationSection);
                  }}
                  className="group flex cursor-pointer items-center text-left text-slate-500 outline-none transition-all hover:text-black focus:pl-2 focus:text-black dark:hover:text-white dark:focus:text-white"
                >
                  Ideation
                  <svg
                    className="h-4 flex-shrink-0 origin-left scale-0 fill-black pl-1 transition-transform group-hover:scale-100 dark:fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.1662 5.02188C9.91618 4.97088 9.64718 4.99288 9.41818 5.14688C8.96119 5.45288 8.83319 6.09288 9.13819 6.55288L12.7502 11.9899L9.13819 17.4279C8.83319 17.8869 8.96119 18.5279 9.41818 18.8339C9.87618 19.1399 10.5142 19.0118 10.8192 18.5528L14.8052 12.5529C15.0282 12.2169 15.0282 11.7639 14.8052 11.4279L10.8192 5.42788C10.6672 5.19789 10.4162 5.07188 10.1662 5.02188Z" />
                  </svg>
                </button>
                <button
                  // href="#development"
                  ref={developmentLink}
                  onClick={() => {
                    handleClick(developmentSection);
                  }}
                  className="group flex cursor-pointer items-center text-left text-slate-500 outline-none transition-all hover:text-black focus:pl-2 focus:text-black dark:hover:text-white dark:focus:text-white"
                >
                  Development
                  <svg
                    className="h-4 flex-shrink-0 origin-left scale-0 fill-black pl-1 transition-transform group-hover:scale-100 dark:fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.1662 5.02188C9.91618 4.97088 9.64718 4.99288 9.41818 5.14688C8.96119 5.45288 8.83319 6.09288 9.13819 6.55288L12.7502 11.9899L9.13819 17.4279C8.83319 17.8869 8.96119 18.5279 9.41818 18.8339C9.87618 19.1399 10.5142 19.0118 10.8192 18.5528L14.8052 12.5529C15.0282 12.2169 15.0282 11.7639 14.8052 11.4279L10.8192 5.42788C10.6672 5.19789 10.4162 5.07188 10.1662 5.02188Z" />
                  </svg>
                </button>
                <button
                  // href="#problems"
                  ref={problemsLink}
                  onClick={() => {
                    handleClick(problemsSection);
                  }}
                  className="group flex cursor-pointer items-center text-left text-slate-500 outline-none transition-all hover:text-black focus:pl-2 focus:text-black dark:hover:text-white dark:focus:text-white"
                >
                  Problems
                  <svg
                    className="h-4 flex-shrink-0 origin-left scale-0 fill-black pl-1 transition-transform group-hover:scale-100 dark:fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.1662 5.02188C9.91618 4.97088 9.64718 4.99288 9.41818 5.14688C8.96119 5.45288 8.83319 6.09288 9.13819 6.55288L12.7502 11.9899L9.13819 17.4279C8.83319 17.8869 8.96119 18.5279 9.41818 18.8339C9.87618 19.1399 10.5142 19.0118 10.8192 18.5528L14.8052 12.5529C15.0282 12.2169 15.0282 11.7639 14.8052 11.4279L10.8192 5.42788C10.6672 5.19789 10.4162 5.07188 10.1662 5.02188Z" />
                  </svg>
                </button>
                <button
                  // href="#results"
                  ref={resultsLink}
                  onClick={() => {
                    handleClick(resultsSection);
                  }}
                  className="group flex cursor-pointer items-center text-left text-slate-500 outline-none transition-all hover:text-black focus:pl-2 focus:text-black dark:hover:text-white dark:focus:text-white"
                >
                  Results
                  <svg
                    className="h-4 flex-shrink-0 origin-left scale-0 fill-black pl-1 transition-transform group-hover:scale-100 dark:fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.1662 5.02188C9.91618 4.97088 9.64718 4.99288 9.41818 5.14688C8.96119 5.45288 8.83319 6.09288 9.13819 6.55288L12.7502 11.9899L9.13819 17.4279C8.83319 17.8869 8.96119 18.5279 9.41818 18.8339C9.87618 19.1399 10.5142 19.0118 10.8192 18.5528L14.8052 12.5529C15.0282 12.2169 15.0282 11.7639 14.8052 11.4279L10.8192 5.42788C10.6672 5.19789 10.4162 5.07188 10.1662 5.02188Z" />
                  </svg>
                </button>
                <button
                  // href="#improvements"
                  ref={improvementsLink}
                  onClick={() => {
                    handleClick(improvementsSection);
                  }}
                  className="group flex cursor-pointer items-center text-left text-slate-500 outline-none transition-all hover:text-black focus:pl-2 focus:text-black dark:hover:text-white dark:focus:text-white"
                >
                  Areas of Improvement
                  <svg
                    className="h-4 flex-shrink-0 origin-left scale-0 fill-black pl-1 transition-transform group-hover:scale-100 dark:fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.1662 5.02188C9.91618 4.97088 9.64718 4.99288 9.41818 5.14688C8.96119 5.45288 8.83319 6.09288 9.13819 6.55288L12.7502 11.9899L9.13819 17.4279C8.83319 17.8869 8.96119 18.5279 9.41818 18.8339C9.87618 19.1399 10.5142 19.0118 10.8192 18.5528L14.8052 12.5529C15.0282 12.2169 15.0282 11.7639 14.8052 11.4279L10.8192 5.42788C10.6672 5.19789 10.4162 5.07188 10.1662 5.02188Z" />
                  </svg>
                </button>
              </nav>
            </aside>
            <div className="my-10 h-1 w-full rounded-full bg-black/5 dark:bg-white/5" />
            <div>
              <h4 className="mb-5 text-xl font-semibold text-slate-700 dark:text-slate-200">
                More by me
              </h4>
              <Link href="/projects/vishwakarma" className="group">
                <div className="mb-2 aspect-[18/9] w-full origin-bottom rounded-lg bg-cyan-400 transition-transform duration-500 group-hover:scale-105"></div>
                <h5>Vishwakarma Branding</h5>
              </Link>
            </div>
          </div>
          <div
            ref={main}
            className="highlight w-full rounded-3xl bg-white/70 px-8 py-12 backdrop-blur-3xl dark:bg-slate-800/20 md:w-4/5 md:py-16 md:px-14 lg:px-16"
          >
            <h1 className="font-heading text-3xl font-extrabold leading-normal text-slate-900 dark:text-white md:text-4xl md:leading-snug lg:text-5xl lg:leading-tight">
              Crafting a Scalable and Cohesive Design System for COMPFEST
            </h1>
            <aside className="highlight mt-10 flex flex-row space-x-6 overflow-scroll rounded-xl px-6 py-4 scrollbar-hide dark:bg-slate-800/30 md:hidden">
              <p className="whitespace-nowrap font-serif text-sm font-bold italic lg:text-base">
                {time} minute read
              </p>
              <p className="whitespace-nowrap font-serif text-sm font-bold italic lg:text-base">
                17 January 2023
              </p>
              <p
                className="cursor-pointer whitespace-nowrap font-serif text-sm font-bold italic underline decoration-cyan-500 lg:text-base"
                onClick={() => {
                  window.open(
                    "https://www.figma.com/community/file/1082210150893947691",
                    "_blank"
                  );
                }}
              >
                figma.com/community/file/1082210150893947691
              </p>
            </aside>
            <div className="my-8 h-1 w-full rounded-full bg-black/5 dark:bg-white/5 md:my-10" />
            <Waypoint
              onEnter={() => {
                handleEnter(introductionLink);
              }}
              onLeave={() => {
                handleLeave(introductionLink);
              }}
            >
              <section className="mt-12 md:mt-16" ref={introductionSection}>
                <h2 className={h2}>Introduction</h2>
                <p className="p my-5 max-w-none">
                  The growing rise of web app services has reached the design
                  sphere; Figma has taken the design community by storm through
                  its robust features, team collaboration capabilities, and
                  generous student education plans. The wake of its popularity
                  has left a universe of possibilities where designers can
                  explore new workflows, engage in teamwork, and integrate new
                  tools. Figma combines the best features of its competitors
                  through extensive plugin support and a vast community library
                  without the bloat of Adobe XD or the ecosystem restrictions of
                  Sketch.
                </p>
                <p className="p my-5 max-w-none">
                  For all designers alike, Figma offers many valuable tools to
                  streamline the product design development process. Features
                  such as components and variants enable designers to create
                  consistent, effective interfaces by implementing common UI
                  elements and corresponding states across team projects. Among
                  other notable Figma features, these have empowered aspiring
                  product designers like me to develop better and more readily
                  understandable design systems, such as Silicon Design System.
                </p>
                <p className="p my-5 max-w-none">
                  In late 2021, I became the managing UI/UX lead for COMPFEST, a
                  year-long event organized by computer science students such as
                  myself. This annual computer science event, the largest of its
                  kind in Indonesia, provides everything from competitions to
                  seminars for the general public. Alongside a physical event,
                  COMPFEST also possesses a substantial digital presence whose
                  design was under my responsibility. Considering the scope of
                  this event and how its appearance and usability could very
                  well impact its success, a functional and practical design
                  system representative of the project scope was in order.
                </p>
              </section>
            </Waypoint>
            <Waypoint
              onEnter={() => {
                handleEnter(ideationLink);
              }}
              onLeave={() => {
                handleLeave(ideationLink);
              }}
            >
              <section className="mt-12 md:mt-16" ref={ideationSection}>
                <h2 className={h2}>Ideation</h2>
                <p className="p my-5 max-w-none">
                  In 2020, COMPFEST formed its first UI/UX team for COMPFEST 12
                  in response to the Covid-19 pandemic, which required
                  transforming all of COMPFEST&apos;s offline experiences
                  online. This abrupt change in our event&apos;s core operations
                  resulted in significant changes to the management and
                  departmental structure, bringing forth COMPFEST&apos;s first
                  IT Development department. The digitalization of offline
                  events necessitated the talents of this new department&apos;s
                  Software Engineering and UI/UX divisions to work together to
                  create novel online experiences for COMPFEST.
                </p>
                <p className="p my-5 max-w-none">
                  When I became a junior UI/UX designer for COMPFEST 13, I was
                  introduced to this year&apos;s design system created by our
                  division, Arcana. This was the first time I was familiarized
                  with a design system meant to be used cohesively among design
                  files and their respective designers. During this time, Arcana
                  consisted of essential core components such as buttons,
                  inputs, and even navbars and modals, all the needed elements
                  to facilitate our team&apos;s designs.
                </p>
                <figure className="space-y-4 py-8">
                  <Image
                    alt="COMPFEST 12 Arcana Design System"
                    className="zoom rounded-lg"
                    src={arcana}
                    placeholder="blur"
                  />
                  <figcaption className="text-center font-serif font-bold text-slate-400 dark:text-slate-500">
                    COMPFEST 13 Arcana design system
                  </figcaption>
                </figure>
                <p className="p my-5 max-w-none">
                  This challenge prompted the need for a cohesive design system
                  that could be used by the team, and I was tasked with leading
                  the effort. Through my expertise in design system development
                  and collaboration with fellow designers and software
                  engineers, we successfully implemented a design system that
                  transformed the way we work. The design system allowed us to
                  work remotely and effectively, ensuring consistency and
                  scalability in all our digital products. I am proud of the
                  result we achieved, and I look forward to sharing the details
                  of our process and successes in my blog.
                </p>
                <figure className="space-y-4 py-8">
                  <Image
                    alt="An example of atomic design in Silicon"
                    className="zoom rounded-lg"
                    src={atomicdesign}
                    placeholder="blur"
                  />
                  <figcaption className="text-center font-serif font-bold text-slate-400 dark:text-slate-500">
                    An example of atomic design in Silicon
                  </figcaption>
                </figure>
              </section>
            </Waypoint>
            <Waypoint
              onEnter={() => {
                handleEnter(developmentLink);
              }}
              onLeave={() => {
                handleLeave(developmentLink);
              }}
            >
              <section className="mt-12 md:mt-16" ref={developmentSection}>
                <h2 className={h2}>Development</h2>
                <p className="p my-5 max-w-none">
                  Once the ideation phase is complete, the next step is to begin
                  developing the design system in Figma. This includes creating
                  a master file, which serves as the foundation for the system,
                  and creating individual components such as buttons, forms, and
                  typography. It&apos;s important to maintain consistency
                  throughout the development process by using a naming
                  convention, style guide and a design library.
                </p>
              </section>
            </Waypoint>
            <Waypoint
              onEnter={() => {
                handleEnter(problemsLink);
              }}
              onLeave={() => {
                handleLeave(problemsLink);
              }}
            >
              <section className="mt-12 md:mt-16" ref={problemsSection}>
                <h2 className={h2}>Problems</h2>
                <p className="p my-5 max-w-none">
                  As with any design project, there will be challenges and
                  problems to overcome. One common issue that can arise during
                  the development of a design system using Figma is maintaining
                  consistency. This can be difficult when multiple designers are
                  working on the system, and it can be easy to lose track of
                  changes. Additionally, maintaining the system can also be
                  challenging as design trends change over time.
                </p>
              </section>
            </Waypoint>
            <Waypoint
              onEnter={() => {
                handleEnter(resultsLink);
              }}
              onLeave={() => {
                handleLeave(resultsLink);
              }}
            >
              <section className="mt-12 md:mt-16" ref={resultsSection}>
                <h2 className={h2}>Results</h2>
                <p className="p my-5 max-w-none">
                  Despite these challenges, the end result of a design system
                  created using Figma can be extremely beneficial. It can help
                  to improve the user experience by providing a consistent look
                  and feel across all products, and it can also save time and
                  resources by streamlining the design and development process.
                  Additionally, a design system can also be used as a way to
                  create a common language between designers and developers,
                  improving communication and collaboration.
                </p>
              </section>
            </Waypoint>
            <Waypoint
              onEnter={() => {
                handleEnter(improvementsLink);
              }}
              onLeave={() => {
                handleLeave(improvementsLink);
              }}
            >
              <section className="mt-12 md:mt-16" ref={improvementsSection}>
                <h2 className={h2}>Areas of Improvement</h2>
                <p className="p my-5 max-w-none">
                  As the design system is being used, it&apos;s important to
                  continue to evaluate and improve it. This includes gathering
                  feedback from users and stakeholders, as well as monitoring
                  the performance of the system in terms of usability,
                  accessibility and performance. Additionally, it&apos;s also
                  important to keep the design system up to date with current
                  design trends and best practices.
                </p>
              </section>
            </Waypoint>
          </div>
        </article>
      </div>
    </>
  );
}
