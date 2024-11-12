import PDFViewer from "./components/PDFViewer";

export default function CVPage() {
  return (
    <main className="flex min-h-svh flex-col items-center py-40 ~px-5/20">
      <PDFViewer src="/CV_MuhammadHannanMassimoMadjid.pdf" />
    </main>
  );
}
