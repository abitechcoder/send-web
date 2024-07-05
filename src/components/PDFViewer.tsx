import { useState } from "react";
import { Document, Page } from "react-pdf"; // Or use pdfjs-dist components

const PdfViewer = ({ pdfUrl }: { pdfUrl: string }) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function onDocumentError(error: any) {
    console.error("Error loading PDF:", error);
  }

  function handleNextPage() {
    setPageNumber(Math.min(pageNumber + 1, numPages));
  }

  function handlePrevPage() {
    setPageNumber(Math.max(pageNumber - 1, 1));
  }

  return (
    <div>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onError={onDocumentError}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            pageNumber={index + 1}
            key={`page_${index + 1}`}
            scale={1.5} // Adjust zoom level as needed
            className="pdf-page"
          />
        ))}
      </Document>
      <div className="pagination">
        <button disabled={pageNumber === 1} onClick={handlePrevPage}>
          Previous
        </button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button disabled={pageNumber === numPages} onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
