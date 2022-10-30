import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../Resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // read and display pdf on page load
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="d-flex justify-content-center m-10 p-5">
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />

        <div className="col align-self-end d-flex justify-content-center">
          <a
            href="mailto: calihuddleston@gmail.com"
            className="m-4 btn btn-light"
          >
            Send Me an Email!
          </a>
        </div>
      </Document>
    </div>
  );
}

export default Resume;
