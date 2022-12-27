import Image from "next/image";

export default function PixelPerfect() {
  return (
    <section className=" px-8">
      <div className="relative h-24">
        <Image
          className="block dark:hidden"
          src="/illustration-pixelperfect-light.svg"
          width={400}
          height={0}
          alt=""
        />
        <Image
          className="hidden dark:block"
          src="/illustration-pixelperfect-dark.svg"
          width={400}
          height={0}
          alt=""
        />
      </div>
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          A True Pixel Perfectionist
        </h2>
      </div>
    </section>
  );
}
