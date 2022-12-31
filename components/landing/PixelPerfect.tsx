import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PixelPerfect() {
  let x = Math.random() < 0.5 ? -40 : 40;
  let y = Math.random() < 0.5 ? -40 : 40;

  const [stateX, setX] = useState(x);
  const [stateY, setY] = useState(y);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative w-full rounded-md bg-slate-200 bg-pixelperfect bg-cover dark:bg-slate-800/40">
      <motion.div
        className="z-10 w-full cursor-grab rounded-md bg-white p-8 dark:bg-slate-900"
        whileTap={{ cursor: "grabbing" }}
        initial={{ x: x, y: y }}
        drag
        dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
        dragTransition={{
          power: 0,
          bounceStiffness: 600,
          bounceDamping: 20,
          modifyTarget: (target) => Math.round(target / 1) * 1,
        }}
        onDrag={(event, info) => {
          setX(stateX + info.delta.x);
          setY(stateY + info.delta.y);
        }}
        onDragEnd={(event, info) => {
          if (stateX > 40) {
            setX(40);
          } else if (stateX < -40) {
            setX(-40);
          }
          if (stateY > 40) {
            setY(40);
          } else if (stateY < -40) {
            setY(-40);
          }
        }}
      >
        <div className="h-20">
          <Image
            className="pointer-events-none"
            src="/illustration-pixelperfect.png"
            width={400}
            height={0}
            alt=""
          />
        </div>
        <div className="z-10">
          <div className="mb-4 inline-flex flex-row items-center gap-2">
            {stateX === 0 ? null : (
              <div className="highlight inline-flex flex-row items-center gap-2 rounded-full bg-rose-500 p-2 pr-4">
                <div className="inline-block rounded-full bg-rose-400 p-2">
                  <svg
                    className="h-6 w-6 fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.0001 1.99902C10.3395 2.00002 9.0897 2.86702 8.0939 4.62402L3.1251 13.718C2.3561 15.059 1.993 16.002 2.0001 16.999C2.0161 19.231 3.8105 20.991 6.0001 20.999H18.0001C20.1924 20.999 21.9918 19.265 22.0001 16.999C22.0037 16.005 21.6125 15.002 20.8439 13.718L15.9376 4.68701C15.0168 2.92801 13.6834 1.99802 12.0001 1.99902ZM12.0001 3.99902C12.8823 3.99902 13.5523 4.47002 14.1563 5.62402L19.1251 14.718C19.7428 15.751 20.0021 16.455 20.0001 16.999C19.9959 18.146 19.1071 18.999 18.0001 18.999H6.0001C4.9025 18.995 4.0082 18.127 4.0001 16.999C3.9961 16.443 4.2581 15.763 4.8751 14.687L9.8126 5.62402C10.4789 4.44802 11.1286 3.99902 12.0001 3.99902Z" />
                    <path d="M12 8C11.4477 8 11 8.448 11 9V13C11 13.552 11.4477 14 12 14C12.5523 14 13 13.552 13 13V9C13 8.448 12.5523 8 12 8ZM12 15C11.4477 15 11 15.448 11 16C11 16.552 11.4477 17 12 17C12.5523 17 13 16.552 13 16C13 15.448 12.5523 15 12 15Z" />
                  </svg>
                </div>
                <p className="text-white">
                  {stateX < 0
                    ? `${Math.abs(Math.round(stateX))} px too left`
                    : `${Math.round(stateX)} px too right`}
                </p>
              </div>
            )}
            {stateY === 0 ? null : (
              <div className="highlight inline-flex flex-row items-center gap-2 rounded-full bg-rose-500 p-2 pr-4">
                <div className="inline-block rounded-full bg-rose-400 p-2">
                  <svg
                    className="h-6 w-6 fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.0001 1.99902C10.3395 2.00002 9.0897 2.86702 8.0939 4.62402L3.1251 13.718C2.3561 15.059 1.993 16.002 2.0001 16.999C2.0161 19.231 3.8105 20.991 6.0001 20.999H18.0001C20.1924 20.999 21.9918 19.265 22.0001 16.999C22.0037 16.005 21.6125 15.002 20.8439 13.718L15.9376 4.68701C15.0168 2.92801 13.6834 1.99802 12.0001 1.99902ZM12.0001 3.99902C12.8823 3.99902 13.5523 4.47002 14.1563 5.62402L19.1251 14.718C19.7428 15.751 20.0021 16.455 20.0001 16.999C19.9959 18.146 19.1071 18.999 18.0001 18.999H6.0001C4.9025 18.995 4.0082 18.127 4.0001 16.999C3.9961 16.443 4.2581 15.763 4.8751 14.687L9.8126 5.62402C10.4789 4.44802 11.1286 3.99902 12.0001 3.99902Z" />
                    <path d="M12 8C11.4477 8 11 8.448 11 9V13C11 13.552 11.4477 14 12 14C12.5523 14 13 13.552 13 13V9C13 8.448 12.5523 8 12 8ZM12 15C11.4477 15 11 15.448 11 16C11 16.552 11.4477 17 12 17C12.5523 17 13 16.552 13 16C13 15.448 12.5523 15 12 15Z" />
                  </svg>
                </div>
                <p className="text-white">
                  {stateY < 0
                    ? `${Math.abs(Math.round(stateY))} px too high`
                    : `${Math.round(stateY)} px too low`}
                </p>
              </div>
            )}
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            A True Pixel Perfectionist
          </h2>
          <p className="my-5 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            A single pixel can be the difference between a great design and a
            perfect one. That&apos;s why high-quality products rely on people
            who care about the most minute of details and can ensure you with
            the highest possible standards of design.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
