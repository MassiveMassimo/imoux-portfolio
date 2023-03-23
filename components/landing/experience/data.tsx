import Image from "next/image";
import Cube from "../../../public/icons/Cube";
import TextInput from "../../../public/icons/TextInput";
import Figma from "../../../public/icons/Figma";
import People from "../../../public/icons/People";
import Mortarboard from "../../../public/icons/Mortarboard";
import Handshake from "../../../public/icons/Handshake";
import Palette from "../../../public/icons/Palette";
import PersonLines from "../../../public/icons/PersonLines";
import PlusSquare from "../../../public/icons/PlusSquare";
import Lightbulb from "../../../public/icons/Lightbulb";
import Pencil from "../../../public/icons/Pencil";
import Camera from "../../../public/icons/Camera";
import Megaphone from "../../../public/icons/Megaphone";
import Drone from "../../../public/icons/Drone";
import Journal from "../../../public/icons/Journal";
import Chat from "../../../public/icons/Chat";
import Hexagon from "../../../public/icons/Hexagon";

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
    icons: [<Cube key="cube-icon" />, <TextInput key="text-input-icon" />],
    descriptions: [
      "Revamped the recruitment page for new RISTEK members by improving the user experience and increasing the number of applications received by implementing a new form layout and more engaging 3D hero section.",
      "Increased the number of new registrations by 25% by implementing a new form design that streamlined the selection process and improved legibility.",
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
          src={"/ristek/ristek-mug.webp"}
        />
      </figure>,
      <figure key="ristek-dpd" className="relative aspect-[4/3] snap-start">
        <Image
          alt="DPD"
          className="zoom rounded-lg object-contain"
          fill
          src={"/ristek/dpd.jpg"}
        />
      </figure>,
      <figure key="ristek-kickoff" className="relative aspect-[4/3] snap-start">
        <Image
          alt="RISTEK kickoff"
          className="zoom rounded-lg object-contain"
          fill
          src={"/ristek/ristek.jpg"}
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
      "Designed and developed an extensive design system with over 100 components and styles complete with states and interactions that was used by over 6000 people on Figma.",
      "Led a team of designers in collaborating with software engineers to research, design, and test more than 20 web pages for compfest.id, resulting in successful deplopment to real users.",
      "Curated and presented engaging internal workshops for members, providing comprehensive onboarding and introducing essential design principles to improve collaboration and streamline project workflows.",
      "Collaborated with project owners and developers to ensure adherence to required specifications and measure feasibility, ensuring high-quality product delivery.",
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
          src={"/compfest/silicon-cover.webp"}
        />
      </figure>,
      <figure
        key="compfest-onboarding"
        className="relative aspect-[12/7] snap-start"
      >
        <Image
          alt="COMPFEST Onbaording"
          className="zoom rounded-lg object-contain"
          fill
          src={"/compfest/onboarding.webp"}
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
      <svg
        key="plus-square-icon"
        className="mr-1 inline-flex h-5 flex-shrink-0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 3C4.791 3 3 4.791 3 7V17C3 19.209 4.791 21 7 21H17C19.209 21 21 19.209 21 17V7C21 4.791 19.209 3 17 3H7Z"
          className="fill-slate-900/40 dark:fill-slate-100/40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H11V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H13V8Z"
          className="fill-slate-900 dark:fill-slate-100"
        />
      </svg>,
    ],
    descriptions: [
      "Conducted extensive research and developed a vibrant color palette and recognizable logo for the class of 2020 branding which was used across multiple platforms to increase awareness of our class in various online platforms.",
      "Collaborated with developers to produce a digital catalogue/yearbook for the class of 2020, featuring hundreds of students and facilitating easier online socialization during online learning.",
      "Managed a team of aspiring student designers, overseeing the creation of social media posts and other creative projects.",
    ],
    images: [
      <figure key="chronos-web" className="relative aspect-[13/9] snap-start">
        <Image
          alt="Chronos Karya Angkatan Website"
          className="zoom rounded-lg object-contain"
          fill
          src={"/chronos/chronos-web.webp"}
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
          src={"/chronos/chronos-mobile.webp"}
        />
      </figure>,
      <figure key="chronos-post" className="relative aspect-square snap-start">
        <Image
          alt="Chronos Instagram Post"
          className="zoom rounded-lg object-contain"
          fill
          src={"/chronos/chronos-post.webp"}
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
          src={"/chronos/chronos-shirt-black.webp"}
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
          src={"/chronos/chronos-shirt-white.webp"}
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
          src={"/chronos/chronos-certificate.webp"}
        />
      </figure>,
    ],
  },
  vishwakarma: {
    title: "Brand Designer",
    organization: "for AUAV Universitas Indonesia",
    duration: "(05/2021 - 06/2021)",
    icons: [
      <Drone key="drone-icon" />,
      <Journal key="journal-icon" />,
      <Chat key="chat-icon" />,
      <Hexagon key="hexagon-icon" />,
    ],
    descriptions: [
      "Worked alongside cients to develop a brand identity for AUAV Universitas Indonesia, a student-run drone racing team in need of a new, strong logo to represent their team for competitions and social media.",
      "Constructed a comprehensive branding guideline for the team in a 6 page guidebook complete with informative color palettes, use cases, and logo variations.",
      "Communicated closely with the team to ensure maximum adherence to client goals and conducted thorough research to verify accessibility and usability.",
      "Provided a variety of logo variations such as dark, light, single tone, and dual tone variants alongside multiple file formats to give clients maximum flexibility of use of their new branding."
    ],
    images: [
      <figure key="vishwakarma-logo1-light" className="relative aspect-square snap-start">
        <Image
          alt="Vishwakarma Logo 1 Light"
          className="zoom rounded-lg object-contain"
          fill
          src={"/vishwakarma/logo1-light.webp"}
        />
      </figure>,
      <figure key="vishwakarma-logo1-dark" className="relative aspect-square snap-start">
        <Image
          alt="Vishwakarma Logo 1 Dark"
          className="zoom rounded-lg object-contain"
          fill
          src={"/vishwakarma/logo1-dark.webp"}
        />
      </figure>,
      <figure key="vishwakarma-drone" className="relative aspect-[3/2] snap-start">
        <Image
          alt="Vishwakarma Drone"
          className="zoom rounded-lg object-contain"
          fill
          src={"/vishwakarma/drone.webp"}
        />
      </figure>,
      <figure key="vishwakarma-stationary" className="relative aspect-[4/3] snap-start">
        <Image
          alt="Vishwakarma Stationary"
          className="zoom rounded-lg object-contain"
          fill
          src={"/vishwakarma/stationary.webp"}
        />
      </figure>,
      <figure key="vishwakarma-tote" className="relative aspect-[3/2] snap-start">
        <Image
          alt="Vishwakarma Tote"
          className="zoom rounded-lg object-contain"
          fill
          src={"/vishwakarma/tote.webp"}
        />
      </figure>,
      <figure key="vishwakarma-badge" className="relative aspect-[1823/1202] snap-start">
        <Image
          alt="Vishwakarma Badge"
          className="zoom rounded-lg object-contain"
          fill
          src={"/vishwakarma/badge.webp"}
        />
      </figure>,
      <figure key="vishwakarma-logo2-light" className="relative aspect-square snap-start">
      <Image
        alt="Vishwakarma Logo 2 Light"
        className="zoom rounded-lg object-contain"
        fill
        src={"/vishwakarma/logo2-light.webp"}
      />
    </figure>,
    <figure key="vishwakarma-logo2-dark" className="relative aspect-square snap-start">
      <Image
        alt="Vishwakarma Logo 2 Dark"
        className="zoom rounded-lg object-contain"
        fill
        src={"/vishwakarma/logo2-dark.webp"}
      />
    </figure>,
    ]
  },
  dn35: {
    title: "Graphic Designer",
    organization: "at Dies Natalis 35 Fasilkom UI",
    duration: "(02/2021 - 09/2021)",
    icons: [
      <Lightbulb key="lightbulb-icon" />,
      <Pencil key="pencil-icon" />,
      <Camera key="camera-icon" />,
      <Megaphone key="megaphone-icon" />,
    ],
    descriptions: [
      "Created event branding and logos for Dies Natalis KE 35 Fasilkom UI, as well as logos for extracurriculars, to increase awareness and recognition of the event.",
      "Independently designed posters, tickets, video trailers, and social media posts using software such as Photoshop, Illustrator, and Figma, resulting in high-quality, engaging visual content.",
      "Collaborated with photographers to use their photos in designs and integrated paintings made by artists into posters and other designs.",
      "Showcased designs on Fasilkom UI's and the University of Indonesia's Instagram pages, reaching hundreds of thousands of people and receiving thousands of positive reactions.",
    ],
    images: [
      <figure key="dn35-logo" className="relative aspect-[3/2] snap-start">
        <Image
          alt="DN35 Logo Wordmark"
          className="zoom rounded-lg object-contain"
          fill
          src={"/dn35/wordmark.webp"}
        />
      </figure>,
      <figure
        key="dn35-sangkuriang"
        className="relative aspect-[4/5] snap-start"
      >
        <Image
          alt="Sangkuriang Poster"
          className="zoom rounded-lg object-contain"
          fill
          src={"/dn35/sangkuriang.webp"}
        />
      </figure>,
      <figure
        key="dn35-sangkuriang-long"
        className="relative aspect-video snap-start"
      >
        <Image
          alt="Sangkuriang Poster Long"
          className="zoom rounded-lg object-contain"
          fill
          src={"/dn35/sangkuriang-panjang.webp"}
        />
      </figure>,
      <figure
        key="dn35-sangkuriang-illustration"
        className="relative aspect-[17/22] snap-start"
      >
        <Image
          alt="Sangkuriang Illustration Poster"
          className="zoom rounded-lg object-contain"
          fill
          src={"/dn35/sangkuriang-illustration.webp"}
        />
      </figure>,
      <figure
        key="dn35-meet-the-cast"
        className="relative aspect-[4/5] snap-start"
      >
        <Image
          alt="Meet the Cast"
          className="zoom rounded-lg object-contain"
          fill
          src={"/dn35/meet-the-cast.webp"}
        />
      </figure>,
      <figure key="dn35-ticket" className="relative aspect-[97/110] snap-start">
        <Image
          alt="DN35 Ticket"
          className="zoom rounded-lg object-contain"
          fill
          src={"/dn35/ticket.webp"}
        />
      </figure>,
      <figure
        key="dn35-cinta-putih"
        className="relative aspect-video snap-start"
      >
        <Image
          alt="Cinta Putih"
          className="zoom rounded-lg object-contain"
          fill
          src={"/dn35/cinta-putih.webp"}
        />
      </figure>,
      <figure key="dn35-utuh" className="relative aspect-[4/5] snap-start">
        <Image
          alt="Utuh"
          className="zoom rounded-lg object-contain"
          fill
          src={"/dn35/utuh.webp"}
        />
      </figure>,
      <figure
        key="dn35-merah-putih"
        className="relative aspect-video snap-start"
      >
        <Image
          alt="Merah Putih"
          className="zoom rounded-lg object-contain"
          fill
          src={"/dn35/merah-putih.webp"}
        />
      </figure>,
      <figure key="dn35-twibbon" className="relative aspect-[4/5] snap-start">
        <Image
          alt="DN35 Twibbon"
          className="zoom rounded-lg object-contain"
          fill
          src={"/dn35/twibbon.webp"}
        />
      </figure>,
      <figure
        key="dn35-poster-lukisan"
        className="relative aspect-video snap-start"
      >
        <Image
          alt="DN35 Poster Lukisan"
          className="zoom rounded-lg object-contain"
          fill
          src={"/dn35/poster-lukisan.webp"}
        />
      </figure>,
    ],
  },
};
