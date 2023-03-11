import Head from "next/head";

export default function Fungible() {
  return (
    <>
      <Head>
        <title>FUNgible | Imo UX</title>
        <meta
          name="description"
          content="Welcome to my portfolio where I showcase my projects, interests, and overall taste in design!"
        />
      </Head>
      <div className="mx-auto pt-16 h-screen">
        <iframe src={"/fungible/fungible.pdf"} className="w-full h-full" />
      </div>
    </>
  );
}
