import Head from "next/head";

export default function CV() {
  return (
    <>
      <Head>
        <title>Curriculum vitae | Imo UX</title>
        <meta
          name="description"
          content="Welcome to my portfolio where I showcase my projects, interests, and overall taste in design!"
        />
      </Head>
      <div className="mx-auto pt-16 h-screen">
        <iframe src={"/cv_MuhammadHannanMassimoMadjid_2-2023.pdf"} className="w-full h-full" />
      </div>
    </>
  );
}
