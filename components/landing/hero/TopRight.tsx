import left from "../../../public/left-pattern.webp";
import right from "../../../public/right-pattern.webp";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: "40",
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    y: "10vh",
    scale: 0.975,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

export default function TopRight({ collapse }: { collapse: boolean }) {
  return (
    <div className="relative m-5 flex grow flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-50 shadow-xl transition-spacing @md:m-10 @3xl:mx-20 @3xl:my-10">
      <figure className="absolute top-0 left-0 min-h-full w-2/5">
        <Image
          alt="left pattern"
          className="object-cover"
          fill
          src={left}
          placeholder="blur"
        />
      </figure>
      <figure className="absolute top-0 right-0 min-h-full w-2/5">
        <Image
          alt="right pattern"
          className="object-cover"
          fill
          src={right}
          placeholder="blur"
        />
      </figure>
      <div className="absolute h-full w-full bg-gradient-to-r from-gray-50/0 via-gray-50 to-gray-50/0" />
      <div className="z-10 flex h-full w-full flex-col items-center space-y-2 px-5 py-5 @md:px-10 @3xl:px-20">
        <h2 className="text-center font-black text-violet-600 transition-text @md:text-xl">
          CONTACT FORM
        </h2>
        <AnimatePresence mode="wait">
          {collapse ? (
            <motion.div
              className="z-40 flex w-full grow items-center justify-center"
              key="cta"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                className="w-fit rounded-lg bg-violet-600 py-2 px-5 text-violet-100"
                onClick={() => {
                  window.open(
                    "https://mail.google.com/mail/u/0/?source=mailto&to=mhmmadjid@gmail.com&fs=1&tf=cm",
                    "_blank"
                  );
                }}
              >
                Get in touch!
              </button>
            </motion.div>
          ) : (
            <motion.div
              className="flex w-full max-w-lg grow flex-col space-y-5 rounded-xl bg-gray-100 px-5 py-5 shadow-2xl transition-spacing @3xl:px-10"
              key="form"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex w-full grow flex-col">
                <label className="mb-1 block text-xs font-bold text-gray-700 transition-text @md:text-sm">
                  Subject:
                </label>
                <input
                  className="w-full appearance-none rounded-lg border-2 border-gray-200 bg-gray-200 py-2 px-3 text-xs leading-tight text-gray-700 transition-text focus:border-violet-500 focus:bg-white focus:outline-none @md:text-sm"
                  type="text"
                  placeholder=""
                />
                <label className="mb-1 mt-4 block text-xs font-bold text-gray-700 transition-text @md:text-sm">
                  Message:
                </label>
                <textarea
                  className="w-full grow resize-none appearance-none rounded-lg border-2 border-gray-200 bg-gray-200 py-2 px-3 text-xs leading-tight text-gray-700 transition-text focus:border-violet-500 focus:bg-white focus:outline-none @md:text-sm"
                  placeholder=""
                />
              </div>
              <div className="flex w-full justify-end">
                <button className="w-fit rounded-lg bg-violet-600 py-2 px-5 text-xs text-violet-100 @md:text-sm">
                  Get in touch!
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
