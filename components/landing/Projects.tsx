import Link from "next/link";
import Image from "next/image";
import siliconThumbnail from "../../public/silicon/silicon-thumbnail.webp";
import fungibleThumbnail from "../../public/fungible/fungible-thumbnail.webp";
import vishwakarmaThumbnail from "../../public/vishwakarma/vishwakarma-thumbnail.webp";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex w-full flex-col overflow-hidden px-8 lg:px-16"
    >
      <h2 className="mb-16 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
        Featured works
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/projects/silicon" className="group" passHref>
          <Image
            className="pointer-events-none relative mb-2 aspect-[18/9] w-full origin-bottom overflow-hidden rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
            src={siliconThumbnail}
            alt="Silicon Design System"
            placeholder="blur"
          />
          <h5 className="text-lg font-heading font-medium text-slate-600 dark:text-slate-400 lg:text-xl">
            Crafting a Scalable and Cohesive Design System for COMPFEST
          </h5>
        </Link>
        <Link href="/projects/vishwakarma" className="group" passHref>
          <Image
            className="pointer-events-none relative mb-2 aspect-[18/9] w-full origin-bottom overflow-hidden rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
            src={vishwakarmaThumbnail}
            alt="Vishwakarma"
            placeholder="blur"
          />
          <h5 className="text-lg font-heading font-medium text-slate-600 dark:text-slate-400 lg:text-xl">
            Designing Vishwakarma&apos;s New Branding
          </h5>
        </Link>
        <Link href="/projects/fungible" className="group" passHref>
          <Image
            className="pointer-events-none relative mb-2 aspect-[18/9] w-full origin-bottom overflow-hidden rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
            src={fungibleThumbnail}
            alt="Fungible"
            placeholder="blur"
          />
          <h5 className="text-lg font-heading font-medium text-slate-600 dark:text-slate-400 lg:text-xl">
            FUNgible: An Intuitive Design Platform for Artists
          </h5>
        </Link>
      </div>
    </section>
  );
}
