"use client";

import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

export default function Tooltip({
  visible,
  text,
}: {
  visible: boolean;
  text: string;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Transition
      className="fixed z-20 hidden items-center rounded-full bg-base-200 px-5 py-1 text-center text-sm text-base-content-100 shadow-lg lg:flex"
      style={{
        // transform: `translate(${position.x}px, ${position.y}px)`,
        left: `calc(${position.x}px + 12px)`,
        top: `calc(${position.y}px + 12px)`,
      }}
      show={visible}
      enter="transition ease-out duration-300 transform"
      enterFrom="opacity-0 scale-90"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-300 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-90"
    >
      {text}
    </Transition>
  );
}
