"use client";

import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// Import all logos
import logo1 from "../../../../../public/logos/1.svg";
import logo2 from "../../../../../public/logos/2.svg";
import logo3 from "../../../../../public/logos/3.svg";
import logo4 from "../../../../../public/logos/4.svg";
import logo5 from "../../../../../public/logos/5.svg";
import logo6 from "../../../../../public/logos/6.svg";
import logo7 from "../../../../../public/logos/7.svg";
import logo8 from "../../../../../public/logos/8.svg";
import logo9 from "../../../../../public/logos/9.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

const logoGroups = [
  [logos[0], logos[1], logos[2]],
  [logos[3], logos[4], logos[5]],
  [logos[6], logos[7], logos[8]],
];

const companyGroups = [
  ["Apple", "Microsoft", "Google"],
  ["Lenovo", "OpenAI", "Nvidia"],
  ["GitHub", "Figma", "Reddit"],
];

export default function LogoCarousel() {
  const [currentIndices, setCurrentIndices] = useState(
    companyGroups.map(() => 0),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndices((prevIndices) =>
        prevIndices.map(
          (index, groupIndex) => (index + 1) % companyGroups[groupIndex].length,
        ),
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-32 items-center justify-around gap-20">
      {logoGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="relative h-24 w-48">
          <AnimatePresence>
            <motion.div
              key={companyGroups[groupIndex][currentIndices[groupIndex]]}
              className="absolute h-full w-full"
              initial={{ opacity: 0, y: "50%", filter: "blur(8px)" }}
              animate={{ opacity: 1, y: "0%", filter: "blur(0px)" }}
              exit={{ opacity: 0, y: "-50%", filter: "blur(8px)" }}
              transition={{
                ease: [0.5, 0, 0.2, 1],
                duration: 1,
                delay: groupIndex * 0.125,
              }}
            >
              <Image
                src={group[currentIndices[groupIndex]]}
                alt={companyGroups[groupIndex][currentIndices[groupIndex]]}
                className="h-full w-full object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
