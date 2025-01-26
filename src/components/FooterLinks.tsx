"use client";

import { useEffect, useRef, useState } from "react";

import { Github, Linkedin, LucideIcon, Mail } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { WhatsappLogo } from "@phosphor-icons/react";

interface LinkData {
  href: string;
  Icon: LucideIcon;
  className: string;
}

const links: LinkData[] = [
  {
    href: "https://www.linkedin.com/in/imomadjid/",
    Icon: Linkedin,
    className: "pl-7 pt-7",
  },
  {
    href: "https://github.com/MassiveMassimo/imoux-portfolio",
    Icon: Github,
    className: "pr-7 pt-7",
  },
  {
    href: "https://mail.google.com/mail/u/0/?source=mailto&to=mhmmadjid@gmail.com&fs=1&tf=cm",
    Icon: Mail,
    className: "pb-7 pl-7",
  },
  {
    href: "null",
    Icon: WhatsappLogo,
    className: "pb-7 pr-7",
  },
];

export default function FooterLinks() {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  useEffect(() => {
    console.log("hoveredLink", hoveredLink);
  }, [hoveredLink]);

  return (
    <div className="grid h-full grid-cols-2 place-items-stretch *:relative *:flex *:size-full *:items-center *:justify-center">
      {links.map(({ href, Icon, className }, index) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${className} transition-colors hover:text-white`}
          onMouseEnter={() => setHoveredLink(index)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <Icon className="z-10 size-5" />
          {hoveredLink === index && (
            <motion.div
              className="absolute inset-0 border border-indigo-700 bg-linear-to-b from-indigo-500 to-indigo-600 shadow-2xs"
              layoutId="link-highlight"
              animate={{
                borderTopLeftRadius: index === 0 ? "156px" : "12px",
                borderTopRightRadius: index === 1 ? "156px" : "12px",
                borderBottomLeftRadius: index === 2 ? "156px" : "12px",
                borderBottomRightRadius: index === 3 ? "156px" : "12px",
              }}
            />
          )}
        </Link>
      ))}
    </div>
  );
}
