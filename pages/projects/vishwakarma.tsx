import Head from "next/head";

export default function Vishwakarma() {
  return (
    <>
      <Head>
        <title>Vishwakarma Branding | Imo UX</title>
        <meta
          name="description"
          content="Welcome to my portfolio where I showcase my projects, interests, and overall taste in design!"
        />
      </Head>
      <div className="mx-auto pt-16 h-screen">
        <iframe src={"/vishwakarma/vishwakarma.pdf"} className="w-full h-full" />
      </div>
    </>
  );
}
