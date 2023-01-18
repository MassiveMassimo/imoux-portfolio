import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Silicon() {
  let h2 =
    "mt-10 text-xl font-bold tracking-tight text-slate-800 dark:text-slate-200 md:text-2xl lg:text-3xl";

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
        <header className="relative -z-10 h-[40vh] w-full">
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
                  className="h-6 flex-shrink-0 fill-black group-hover:fill-cyan-600 dark:fill-white dark:group-hover:fill-cyan-400"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M7.58456 21.9986C8.87616 21.9655 10.1226 21.3681 11.2147 20.2736L12.748 18.7374C13.1391 18.3458 13.1391 17.7182 12.748 17.3267C12.3569 16.9351 11.699 16.9351 11.3079 17.3267L9.80676 18.8629C8.35371 20.3188 6.74222 20.4644 5.14476 18.8629C3.5463 17.2624 3.69171 15.6478 5.14476 14.1919L8.17922 11.1505C9.63228 9.69462 11.2438 9.55004 12.8412 11.1505L13.2794 11.5893C14.2231 12.5352 15.632 11.1244 14.6874 10.1786L14.2491 9.73981C11.8063 7.29186 8.95538 7.55191 6.77129 9.73981L3.73683 12.7812C1.55274 14.9691 1.29302 17.8257 3.73683 20.2736C4.95823 21.4976 6.29396 22.0308 7.58456 21.9986Z"
                  />
                  <path d="M13.7749 15.9905C14.981 15.9122 16.1551 15.3342 17.2216 14.2674L20.2606 11.2276C22.708 8.78087 22.4479 5.9257 20.2606 3.73892C18.0742 1.55214 15.2181 1.29221 12.7716 3.73892L11.236 5.27438C10.8444 5.66578 10.8444 6.29301 11.236 6.6844C11.6277 7.07579 12.2865 7.07579 12.6782 6.6844L14.1816 5.14894C15.7825 3.54824 17.3953 3.69376 18.8506 5.14894C20.3058 6.60412 20.4514 8.21686 18.8506 9.81756L15.8116 12.8574C15.0734 13.595 14.3443 13.9402 13.6493 13.9854C12.8088 14.0406 11.927 13.6422 11.1426 12.8574L10.7038 12.4188C10.3121 12.0274 9.68543 12.0274 9.29376 12.4188C8.90208 12.8102 8.90208 13.4374 9.29376 13.8288L9.73263 14.2674C10.8946 15.4295 12.2946 16.0879 13.7749 15.9905Z" />
                </svg>
                <p className="grow truncate font-serif text-base font-bold italic text-cyan-600 group-hover:underline dark:text-cyan-400 lg:text-lg">
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
              <div className="flex flex-wrap gap-1 pt-4">
                <div className="flex w-fit flex-row items-center space-x-1 rounded-lg bg-gradient-to-r from-red-400 via-green-400 to-purple-500 py-1 px-4">
                  <svg
                    className="h-5 flex-shrink-0 fill-black/40"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.3336 0C7.09656 0.00096643 5.90973 0.493059 5.03535 1.36812C4.16096 2.24319 3.6698 3.42962 3.6698 4.66667C3.6698 5.90434 4.16146 7.09133 5.03663 7.9665C5.16763 8.09749 5.30561 8.21989 5.4497 8.33334C5.30561 8.44679 5.16763 8.56919 5.03663 8.70018C4.16147 9.57535 3.6698 10.7623 3.6698 12C3.6698 13.2377 4.16146 14.4247 5.03663 15.2998C5.16762 15.4308 5.3056 15.5532 5.44968 15.6667C5.3056 15.7801 5.16762 15.9025 5.03663 16.0335C4.16146 16.9087 3.6698 18.0956 3.6698 19.3333C3.6698 20.571 4.16147 21.758 5.03663 22.6332C5.9118 23.5083 7.09879 24 8.33647 24C9.57414 24 10.7611 23.5083 11.6363 22.6332C12.5115 21.758 13.0031 20.571 13.0031 19.3333V15.8297C13.7803 16.3709 14.7098 16.6667 15.6698 16.6667C16.9075 16.6667 18.0945 16.175 18.9696 15.2998C19.8448 14.4247 20.3365 13.2377 20.3365 12C20.3365 10.7623 19.8448 9.57535 18.9696 8.70018C18.8386 8.56919 18.7007 8.44679 18.5566 8.33334C18.7007 8.21989 18.8386 8.09749 18.9696 7.9665C19.8448 7.09133 20.3365 5.90434 20.3365 4.66667C20.3365 3.42899 19.8448 2.242 18.9696 1.36683C18.0945 0.491665 16.9075 0 15.6698 0H8.3336ZM13.0031 12.0051V11.995C13.0045 11.2895 13.2853 10.6133 13.7842 10.1144C14.2843 9.6143 14.9626 9.33334 15.6698 9.33334C16.377 9.33334 17.0553 9.6143 17.5554 10.1144C18.0555 10.6145 18.3365 11.2928 18.3365 12C18.3365 12.7073 18.0555 13.3855 17.5554 13.8856C17.0553 14.3857 16.377 14.6667 15.6698 14.6667C14.9626 14.6667 14.2843 14.3857 13.7842 13.8856C13.2853 13.3867 13.0045 12.7105 13.0031 12.0051ZM11.0031 11.9933V9.33334H8.33647C7.62922 9.33334 6.95095 9.6143 6.45085 10.1144C5.95075 10.6145 5.6698 11.2928 5.6698 12C5.6698 12.7073 5.95075 13.3855 6.45085 13.8856C6.949 14.3838 7.62395 14.6645 8.32822 14.6667L11.0031 14.6667V12.0067C11.0031 12.0045 11.0031 12.0022 11.0031 12C11.0031 11.9978 11.0031 11.9956 11.0031 11.9933ZM8.33403 2H11.0003V7.33333H8.33647C7.62922 7.33333 6.95095 7.05238 6.45085 6.55229C5.95075 6.05219 5.6698 5.37391 5.6698 4.66667C5.6698 3.95978 5.95047 3.28182 6.45011 2.78178C6.94968 2.28183 7.62728 2.00065 8.33403 2ZM6.45085 17.4477C6.94905 16.9495 7.62408 16.6688 8.32841 16.6667L11.0031 16.6667V19.3333C11.0031 20.0406 10.7222 20.7188 10.2221 21.2189C9.72199 21.719 9.04371 22 8.33647 22C7.62922 22 6.95095 21.719 6.45085 21.2189C5.95075 20.7188 5.6698 20.0406 5.6698 19.3333C5.6698 18.6261 5.95075 17.9478 6.45085 17.4477ZM13.0031 7.33333H15.6698C16.377 7.33333 17.0553 7.05238 17.5554 6.55228C18.0555 6.05219 18.3365 5.37391 18.3365 4.66667C18.3365 3.95942 18.0555 3.28115 17.5554 2.78105C17.0553 2.28095 16.377 2 15.6698 2H13.0031V7.33333Z"
                    />
                  </svg>
                  <p className="grow truncate text-base font-semibold tracking-tight text-black/40 lg:text-lg">
                    Figma
                  </p>
                </div>
                <div className="flex w-fit flex-row items-center space-x-1 rounded-lg bg-slate-400 dark:bg-slate-700 py-1 px-4">
                  <svg
                    className="h-5 flex-shrink-0 fill-slate-100 dark:fill-slate-400"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.76447 23.0689C3.53414 23.0723 3.3042 23.0486 3.07933 22.9982C2.71944 22.899 2.38402 22.7252 2.09443 22.488C1.70399 22.1806 1.38842 21.7873 1.17182 21.3381C1.00604 20.9692 0.931248 20.5652 0.953817 20.1608C0.95901 20.0285 0.977267 19.897 1.00832 19.7683C1.01669 19.7336 1.01608 19.6974 1.00654 19.663C0.996991 19.6287 0.978836 19.5973 0.953817 19.5721C0.616822 19.0838 0.307493 18.5768 0.0273129 18.0533C0.00954514 18.0281 0 17.9979 0 17.9669C0 17.936 0.00954514 17.9058 0.0273129 17.8806C0.184918 17.6259 0.359186 17.382 0.548958 17.1506C0.716352 16.9466 0.891531 16.7582 1.0745 16.5619L1.13289 16.5031C1.20296 16.4364 1.24968 16.4128 1.32364 16.5031C1.68957 17.0525 2.10221 17.5706 2.4915 18.0729C2.82629 18.485 3.18054 18.8853 3.53869 19.2817C3.89683 19.6781 4.23162 20.0234 4.59365 20.3727C5.07248 20.8397 5.56687 21.2871 6.08852 21.7031C6.50895 22.0406 6.93327 22.3625 7.37706 22.6607C7.43156 22.6961 7.41599 22.7157 7.37706 22.751C6.95205 23.217 6.47379 23.6307 5.95227 23.9833C5.93758 23.9942 5.91986 24 5.90166 24C5.88346 24 5.86573 23.9942 5.85105 23.9833C5.36781 23.7078 4.90115 23.4038 4.45351 23.0728C4.40357 23.0224 4.34096 22.9866 4.27237 22.9693C4.20379 22.952 4.13183 22.9539 4.06422 22.9747C3.99276 22.9924 3.91974 23.0029 3.84622 23.0061C3.85012 23.0689 3.8034 23.0493 3.76447 23.0689Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.7894 8.70883C23.3918 6.45002 22.2623 4.38795 20.5778 2.84552C18.6502 1.00303 16.0906 -0.0165206 13.4344 0.000202517C12.8958 -0.00288743 12.3579 0.0404406 11.8266 0.129713C10.6878 0.310084 9.58667 0.680116 8.56828 1.22467C8.00175 1.52561 7.46586 1.88183 6.96831 2.28823C6.66668 2.53283 6.37942 2.79491 6.10798 3.07314C5.90166 3.28899 5.68366 3.49307 5.48901 3.7207C5.29437 3.94832 5.1698 4.09353 5.01797 4.28583C4.71977 4.6696 4.44793 5.07346 4.20436 5.4946C3.87459 6.05982 3.59828 6.65505 3.37907 7.27243C3.24436 7.64752 3.13128 8.03015 3.04039 8.41841C2.94696 8.83441 2.873 9.25434 2.81461 9.67427C2.77568 9.92937 2.77179 10.1923 2.75621 10.4592C2.75082 10.5056 2.74171 10.5516 2.72896 10.5965V11.3815C2.75232 11.4364 2.72896 11.4992 2.72896 11.5581C2.73405 11.8775 2.76137 12.1962 2.81071 12.5117C2.85327 12.8488 2.91567 13.1829 2.99757 13.5125C2.99757 13.5792 3.05207 13.642 2.99757 13.7127C2.85743 13.8814 2.71339 14.0423 2.57714 14.215C2.36966 14.4798 2.17731 14.7563 2.001 15.0431C1.98679 15.0616 1.97909 15.0844 1.97909 15.1078C1.97909 15.1313 1.98679 15.154 2.001 15.1726C2.15671 15.4277 2.30464 15.6906 2.46425 15.9575C2.91295 16.6684 3.40573 17.35 3.93965 17.9983C4.25497 18.3907 4.58197 18.744 4.91287 19.1129C5.07247 19.2855 5.24376 19.4504 5.41505 19.6113C5.58633 19.7722 5.80434 19.9841 6.00287 20.1646C6.27537 20.4119 6.55566 20.6434 6.83984 20.8789C7.20577 21.1772 7.57949 21.4598 7.96877 21.7266C8.35806 21.9935 8.74735 22.2486 9.13664 22.4841C9.16917 22.5105 9.20969 22.5249 9.25148 22.5249C9.29326 22.5249 9.33379 22.5105 9.36632 22.4841C9.78653 22.2082 10.1778 21.89 10.5342 21.5343C10.5653 21.5069 10.5926 21.4715 10.6354 21.4912C10.7082 21.5131 10.7823 21.5302 10.8573 21.5422C11.2301 21.6359 11.6085 21.7054 11.9901 21.7502C12.2704 21.7855 12.5585 21.7894 12.8466 21.809C12.9361 21.809 13.0256 21.809 13.1113 21.809C13.1902 21.8001 13.2698 21.8001 13.3487 21.809C13.4383 21.7855 13.5278 21.809 13.6134 21.809C13.8548 21.809 14.0923 21.7855 14.3297 21.758C14.9085 21.6921 15.4812 21.5806 16.0426 21.4244C16.9383 21.1717 17.796 20.7981 18.5924 20.3138C19.5176 19.7542 20.3525 19.0554 21.0683 18.2416C22.2474 16.9894 23.1102 15.4695 23.5838 13.8103C24.0575 12.1511 24.128 10.4013 23.7894 8.70883ZM19.6902 17.3429C18.5431 18.5399 17.0734 19.3721 15.4626 19.7369C14.7105 19.924 13.9359 20.0033 13.1619 19.9723C10.9965 19.9124 8.9311 19.0406 7.36927 17.5273C5.97729 16.2303 5.04022 14.513 4.69876 12.6334C4.41313 11.2685 4.44516 9.85549 4.79234 8.5052C5.13951 7.15491 5.79238 5.90411 6.6997 4.85097C7.93609 3.37942 9.63342 2.37709 11.5113 2.00958C12.191 1.85949 12.887 1.7975 13.5823 1.82513C15.5128 1.87951 17.3703 2.58104 18.861 3.81881C20.417 5.07431 21.5129 6.81727 21.9753 8.77162C22.1487 9.49752 22.2311 10.2424 22.2206 10.989C22.2371 13.362 21.3284 15.6466 19.6902 17.3507V17.3429Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2397 3.59895C14.9229 3.59877 16.5557 4.17732 17.8687 5.23907C19.1816 6.30081 20.0961 7.78225 20.461 9.43871C20.893 11.2665 20.632 13.1911 19.7292 14.835C19.6373 15.0329 19.5237 15.2199 19.3905 15.3923C19.1989 15.6142 18.9529 15.7816 18.677 15.8775C18.4011 15.9735 18.1051 15.9947 17.8185 15.9391C17.5319 15.8834 17.2649 15.7529 17.0441 15.5605C16.8233 15.3681 16.6565 15.1206 16.5604 14.8428C16.3405 14.192 15.8766 13.6538 15.2679 13.3437C14.8349 13.11 14.3472 12.9987 13.8566 13.0215C13.3659 13.0443 12.8905 13.2003 12.4806 13.4732C11.9359 13.7969 11.3249 13.9907 10.6945 14.0398C10.064 14.0888 9.43079 13.9919 8.84322 13.7563C8.25566 13.5207 7.72933 13.1528 7.3045 12.6806C6.87967 12.2084 6.5676 11.6445 6.39217 11.0321C6.22193 10.4754 6.16521 9.88974 6.22542 9.31037C6.28563 8.731 6.46153 8.1699 6.74253 7.66088C7.24915 6.65019 7.97961 5.77055 8.87741 5.09002C9.77521 4.40949 10.8163 3.94631 11.9201 3.73631C12.0758 3.70099 12.2354 3.68137 12.395 3.66174C12.6748 3.62097 12.957 3.59998 13.2397 3.59895ZM16.2567 17.8177C16.4994 17.7665 16.7231 17.6483 16.9029 17.4762C16.9988 17.3723 17.067 17.2455 17.1011 17.1078C17.1352 16.9701 17.1341 16.8259 17.0979 16.6887C17.0618 16.5515 16.9917 16.4258 16.8943 16.3233C16.7969 16.2208 16.6753 16.1449 16.5409 16.1026C16.3462 16.052 16.1695 15.9473 16.0309 15.8004C15.8768 15.6308 15.76 15.4302 15.6884 15.2118C15.572 14.9238 15.3626 14.6838 15.0942 14.5307C14.8257 14.3776 14.5139 14.3202 14.2091 14.368C14.0006 14.4062 13.8036 14.4918 13.6329 14.6184C13.4622 14.7449 13.3224 14.909 13.2241 15.0982C13.1257 15.2874 13.0715 15.4966 13.0654 15.7101C13.0594 15.9236 13.1017 16.1357 13.1891 16.3303C13.3842 16.8107 13.7186 17.2206 14.1485 17.5063C14.5785 17.7919 15.084 17.9402 15.5988 17.9315C15.8238 17.93 16.0471 17.8929 16.2606 17.8216L16.2567 17.8177Z"
                    />
                  </svg>
                  <p className="grow truncate text-base font-semibold tracking-tight text-slate-100 dark:text-slate-400 lg:text-lg">
                    Compfest
                  </p>
                </div>
              </div>
            </aside>
            <div className="mt-10 h-1 w-full rounded-full bg-black/5 dark:bg-white/5" />
            <div className="w-full grow">
              <nav className="sticky top-0 w-full pt-20">
                <p>nav</p>
              </nav>
            </div>
            <div>
              <h4 className="mb-5 text-lg font-semibold text-slate-600 dark:text-slate-400">
                More by me
              </h4>
              <Link href="/" className="group">
                <div className="mb-2 aspect-[18/9] w-full origin-bottom rounded-lg bg-cyan-400 transition-transform duration-500 group-hover:scale-105"></div>
                <h5>Something</h5>
              </Link>
            </div>
          </div>
          <div
            ref={main}
            className="highlight w-4/5 rounded-3xl bg-white/50 px-12 py-16 backdrop-blur-3xl dark:bg-slate-800/20 md:px-14 lg:px-16"
          >
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
              An Extensive and Feature-Rich Design System for Figma
            </h1>
            <div className="my-10 h-1 w-full rounded-full bg-black/5 dark:bg-white/5" />
            <h2 className={h2}>Introduction</h2>
            <p className="p mt-2 max-w-none">
              Design systems are becoming increasingly important in the design
              industry, as they provide a consistent way to design and develop
              products. One popular tool for creating and maintaining design
              systems is Figma. In this article, we will take a look at the
              process of creating a design system using Figma, including the
              ideation, development, and results.
            </p>
            <h2 className={h2}>Ideation</h2>
            <p className="p mt-2 max-w-none">
              The first step in creating a design system using Figma is to
              gather ideas and determine the overall goals of the system. This
              includes researching the needs of the users and stakeholders, as
              well as identifying the key components that will make up the
              system. This phase is crucial for ensuring that the design system
              is user-centered and meets the needs of the business.
            </p>
            <h2 className={h2}>Development</h2>
            <p className="p mt-2 max-w-none">
              Once the ideation phase is complete, the next step is to begin
              developing the design system in Figma. This includes creating a
              master file, which serves as the foundation for the system, and
              creating individual components such as buttons, forms, and
              typography. It&apos;s important to maintain consistency throughout
              the development process by using a naming convention, style guide
              and a design library.
            </p>
            <h2 className={h2}>Problems</h2>
            <p className="p mt-2 max-w-none">
              As with any design project, there will be challenges and problems
              to overcome. One common issue that can arise during the
              development of a design system using Figma is maintaining
              consistency. This can be difficult when multiple designers are
              working on the system, and it can be easy to lose track of
              changes. Additionally, maintaining the system can also be
              challenging as design trends change over time.
            </p>
            <h2 className={h2}>Results</h2>
            <p className="p mt-2 max-w-none">
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
            <p className="p mt-2 max-w-none">
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
