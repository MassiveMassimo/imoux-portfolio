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
    <section className="relative w-full rounded-md bg-slate-200 dark:bg-slate-800/40">
      <motion.div
        className="highlight z-10 w-full cursor-grab rounded-md bg-white p-8 dark:bg-slate-900"
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
          console.log("x: " + stateX + " y: " + stateY);
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
        <div className="h-24">
          <Image
            className="pointer-events-none"
            src="/illustration-pixelperfect.png"
            width={400}
            height={0}
            alt=""
          />
        </div>
        <div className="z-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            A True Pixel Perfectionist
          </h2>
          <span>{stateX < 0 ? `${Math.abs(stateX)} pixels to the right` : `${stateX} pixels to the left`}</span>
          <span>{stateY < 0 ? `${Math.abs(stateY)} pixels up` : `${stateY} pixels down`}</span>
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
