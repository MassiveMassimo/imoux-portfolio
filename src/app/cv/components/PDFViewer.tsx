"use client";

import React, { useRef, useState } from "react";

import { usePdf } from "@mikecousins/react-pdf";

export default function PDFViewer({ src }: Readonly<{ src: string }>) {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument, pdfPage } = usePdf({
    file: src,
    page,
    canvasRef,
    scale: 2,
  });
  return (
    <div className="w-full max-w-4xl">
      {!pdfDocument && <span>Loading...</span>}
      <canvas ref={canvasRef} className="w-full shadow-2xl"/>
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <nav>
          <ul className="pager">
            <li className="previous">
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                Previous
              </button>
            </li>
            <li className="next">
              <button
                disabled={page === pdfDocument?.numPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
