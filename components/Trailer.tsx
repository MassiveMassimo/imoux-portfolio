import { memo, useRef, useEffect, useState } from "react";
import ExternalLink from "../public/icons/ExternalLink";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

const iconVariants = {
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

export default memo(function Trailer() {
  const trailer = useRef<HTMLDivElement>(null);
  const [interacting, setInteracting] = useState(false);
  const [icon, setIcon] = useState(
    <svg
      className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 stroke-slate-900 dark:stroke-white"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L18 6M18 6V14M18 6H10"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const [isScaled, setIsScaled] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!trailer.current) return;

      const { clientX, clientY } = event;
      const offsetX = trailer.current.offsetWidth / 2;
      const offsetY = trailer.current.offsetHeight / 2;

      trailer.current.style.top = `${clientY - offsetY}px`;
      trailer.current.style.left = `${clientX - offsetX}px`;
    };

    const handleMouseOver = (event: MouseEvent) => {
      if (!trailer.current) return;

      const target = event.target as HTMLElement;
      if (target.matches("a, button")) {
        setIcon(<ExternalLink />);
        setInteracting(true);
        setIsScaled(true);
      }
      if (target.classList.contains("zoom")) {
        setIcon(<ZoomIcon />);
        setInteracting(true);
        setIsScaled(true);
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      if (!trailer.current) return;

      const target = event.target as HTMLElement;
      if (target.matches("a, button")) {
        setInteracting(false);
        setIsScaled(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={trailer}
        className={`highlight pointer-events-none fixed top-0 left-0 z-50 h-5 w-5 overflow-hidden rounded-full bg-slate-900/5 p-4 backdrop-blur transition-transform duration-500 dark:bg-slate-100/5 ${
          isScaled ? "scale-[3.0]" : ""
        }`}
      >
        <AnimatePresence>
          {interacting && (
            <motion.div
              key="icon"
              className="relative"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {icon}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
});
