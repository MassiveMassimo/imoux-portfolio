"use client";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { Github, Linkedin, LucideIcon, Mail } from "lucide-react";
import Link from "next/link";

import { useGSAP } from "@gsap/react";

interface LinkData {
  href: string;
  Icon: LucideIcon;
  position: {
    topLeft: string;
    topRight: string;
    bottomLeft: string;
    bottomRight: string;
  };
  className: string;
}

const links: LinkData[] = [
  {
    href: "https://www.linkedin.com/in/imomadjid/",
    Icon: Linkedin,
    position: {
      topLeft: "15svh",
      topRight: "0",
      bottomLeft: "0",
      bottomRight: "12px",
    },
    className: "pl-7 pt-7",
  },
  {
    href: "https://github.com/MassiveMassimo/imoux-portfolio",
    Icon: Github,
    position: {
      topLeft: "0",
      topRight: "15svh",
      bottomLeft: "12px",
      bottomRight: "0",
    },
    className: "pr-7 pt-7",
  },
  {
    href: "https://github.com/MassiveMassimo/imoux-portfolio",
    Icon: Mail,
    position: {
      topLeft: "0",
      topRight: "12px",
      bottomLeft: "15svh",
      bottomRight: "0",
    },
    className: "pb-7 pl-7",
  },
  {
    href: "https://github.com/MassiveMassimo/imoux-portfolio",
    Icon: Github,
    position: {
      topLeft: "12px",
      topRight: "0",
      bottomLeft: "0",
      bottomRight: "15svh",
    },
    className: "pb-7 pr-7",
  },
];

export default function FooterLinks() {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(() => {
    if (!highlightRef.current || hoveredLink === null) return;

    const targetLink = linkRefs.current[hoveredLink];
    if (!targetLink) return;

    const linkRect = targetLink.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (!containerRect) return;

    const x = linkRect.left - containerRect.left;
    const y = linkRect.top - containerRect.top;

    const targetPosition = links[hoveredLink].position;

    gsap.to(highlightRef.current, {
      x,
      y,
      width: linkRect.width,
      height: linkRect.height,
      duration: 0.3,
      ease: "power2.out",
      autoAlpha: 1,
      borderTopLeftRadius: targetPosition.topLeft,
      borderTopRightRadius: targetPosition.topRight,
      borderBottomLeftRadius: targetPosition.bottomLeft,
      borderBottomRightRadius: targetPosition.bottomRight,
    });
  }, [hoveredLink]);

  useEffect(() => {
    if (hoveredLink === null && highlightRef.current) {
      gsap.to(highlightRef.current, {
        autoAlpha: 0,
        duration: 0.2,
        borderRadius: "0.75rem", // Default border radius when not hovered
      });
    }
  }, [hoveredLink]);

  return (
    <div
      ref={containerRef}
      className="relative grid h-full grid-cols-2 place-items-stretch *:flex *:size-full *:items-center *:justify-center"
    >
      <div
        ref={highlightRef}
        className="pointer-events-none absolute rounded-xl border border-indigo-700 bg-gradient-to-b from-indigo-500 to-indigo-600 opacity-0 shadow"
      />

      {links.map(({ href, Icon, className }, index) => (
        <Link
          key={index}
          ref={(el) => {
            linkRefs.current[index] = el;
          }}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${className} transition-colors hover:text-white`}
          onMouseEnter={() => setHoveredLink(index)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <Icon className="z-10 size-4" />
        </Link>
      ))}
    </div>
  );
}
