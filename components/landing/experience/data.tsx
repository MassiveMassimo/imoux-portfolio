import Image from "next/image";
import Lightbulb from "../../../public/icons/Lightbulb";
import TextInput from "../../../public/icons/TextInput";
import Figma from "../../../public/icons/Figma";
import People from "../../../public/icons/People";
import Mortarboard from "../../../public/icons/Mortarboard";
import Handshake from "../../../public/icons/Handshake";
import Palette from "../../../public/icons/Palette";
import PersonLines from "../../../public/icons/PersonLines";
import PlusSquare from "../../../public/icons/PlusSquare";

type Experiences = {
  [key: string]: {
    title: string;
    organization: string;
    duration: string;
    icons: JSX.Element[];
    descriptions: string[];
    images: JSX.Element[];
  };
};

export const experiences: Experiences = {
  ristek: {
    title: "Vice Director of Digital Product Design",
    organization: "at RISTEK Fasilkom UI",
    duration: "(1/2023 - Present)",
    icons: [
      <Lightbulb key="lightbulb-icon" />,
      <TextInput key="text-input-icon" />,
    ],
    descriptions: [
      `Revamped the recruitment page for new RISTEK members by improving
    the user experience and increasing the number of applications
    received by implementing a new form layout and more engaging 3D hero
    section.`,
      `Increased the number of new registrations by 25% by implementing a
    new form design that streamlined the selection process and improved
    legibility.`,
    ],
    images: [
      <figure key="3d-hero" className="aspect-video h-full snap-start">
        <div className="h-full w-full overflow-hidden rounded-lg">
          <iframe
            src="https://my.spline.design/untitled-eee72585edaa0cdd3c65313be3403e0e/"
            className="pointer-events-none h-[125%] w-full border-none"
          ></iframe>
        </div>
      </figure>,
      <figure key="ristek-form" className="relative aspect-[3/2] snap-start">
        <Image
          alt="RISTEK 2023 Open Recruitment Form"
          className="zoom rounded-lg object-contain"
          fill
          src={"/ristek/ristek-form.png"}
        />
      </figure>,
      <figure key="ristek-mug" className="relative aspect-[4/3] snap-start">
        <Image
          alt="RISTEK Official Mug Merchandise"
          className="zoom rounded-lg object-contain"
          fill
          src={"/ristek/ristek-mug.png"}
        />
      </figure>,
    ],
  },
  compfest: {
    title: "UI/UX Design Manager",
    organization: "at COMPFEST 14",
    duration: "(12/2021 - 11/2022)",
    icons: [
      <Figma key="figma-icon" />,
      <People key="people-icon" />,
      <Mortarboard key="mortarboard-icon" />,
      <Handshake key="handshake-icon" />,
    ],
    descriptions: [
      `Designed and developed an extensive design system with over 100
      components and styles complete with states and interactions that was
      used by over 6000 people on Figma.`,
      `Led a team of designers in collaborating with software engineers to
      research, design, and test more than 20 web pages for compfest.id,
      resulting in successful deplopment to real users.`,
      `Curated and presented engaging internal workshops for members,
      providing comprehensive onboarding and introducing essential design
      principles to improve collaboration and streamline project
      workflows.`,
      `Collaborated with project owners and developers to ensure adherence
      to required specifications and measure feasibility, ensuring
      high-quality product delivery.`,
    ],
    images: [
      <figure
        key="compfest-silicon"
        className="relative aspect-[2/1] snap-start"
      >
        <Image
          alt="Silicon Design System"
          className="zoom rounded-lg object-contain"
          fill
          src={"/compfest/silicon-cover.png"}
        />
      </figure>,
      <figure
        key="compfest-uiux"
        className="relative aspect-[1160/839] snap-start"
      >
        <Image
          alt="COMPFEST UI/UX Meet"
          className="zoom rounded-lg object-contain"
          fill
          src={"/compfest/uiux-meet.jpg"}
        />
      </figure>,
      <figure
        key="compfest-techmeet"
        className="relative aspect-[1479/1109] snap-start"
      >
        <Image
          alt="COMPFEST UI/UX Technical Meeting"
          className="zoom rounded-lg object-contain"
          fill
          src={"/compfest/techmeet.jpg"}
        />
      </figure>,
      <figure
        key="compfest-itdev"
        className="relative aspect-[1109/1479] snap-start"
      >
        <Image
          alt="COMPFEST IT Dev Main Event"
          className="zoom rounded-lg object-contain"
          fill
          src={"/compfest/itdev.jpg"}
        />
      </figure>,
    ],
  },
  chronos: {
    title: "Chief Creative Officer",
    organization: "at Chronos",
    duration: "(10/2020 - 01/2021)",
    icons: [
      <Palette key="palette-icon" />,
      <PersonLines key="person-lines-icon" />,
      <PlusSquare key="plus-square-icon" />,
    ],
    descriptions: [
      `Conducted extensive research and developed a vibrant color palette and recognizable logo for the class of 2020 branding which was used across multiple platforms to increase awareness of our class in various online platforms.`,
      `Collaborated with developers to produce a digital catalogue/yearbook for the class of 2020, featuring hundreds of students and facilitating easier online socialization during online learning.`,
      `Managed a team of aspiring student designers, overseeing the creation of social media posts and other creative projects.`,
    ],
    images: [
      <figure key="chronos-web" className="relative aspect-[13/9] snap-start">
        <Image
          alt="Chronos Karya Angkatan Website"
          className="zoom rounded-lg object-contain"
          fill
          src={"/chronos/chronos-web.png"}
        />
      </figure>,
      <figure
        key="chronos-mobile"
        className="relative aspect-square snap-start"
      >
        <Image
          alt="Chronos Karya Angkatan Mobile"
          className="zoom rounded-lg object-contain"
          fill
          src={"/chronos/chronos-mobile.png"}
        />
      </figure>,
      <figure key="chronos-post" className="relative aspect-square snap-start">
        <Image
          alt="Chronos Instagram Post"
          className="zoom rounded-lg object-contain"
          fill
          src={"/chronos/chronos-post.png"}
        />
      </figure>,
      <figure
        key="chronos-bshirt"
        className="relative aspect-[5306/3964] snap-start"
      >
        <Image
          alt="Chronos Black Shirt"
          className="zoom rounded-lg object-contain"
          fill
          src={"/chronos/chronos-shirt-black.png"}
        />
      </figure>,
      <figure
        key="chronos-wshirt"
        className="relative aspect-[5306/3964] snap-start"
      >
        <Image
          alt="Chronos White Shirt"
          className="zoom rounded-lg object-contain"
          fill
          src={"/chronos/chronos-shirt-white.png"}
        />
      </figure>,
      <figure
        key="chronos-certificate"
        className="relative aspect-video snap-start"
      >
        <Image
          alt="Chronos Tutoring Certificate"
          className="zoom rounded-lg object-contain"
          fill
          src={"/chronos/chronos-certificate.png"}
        />
      </figure>,
    ],
  },
};
