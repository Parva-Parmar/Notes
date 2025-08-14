import React, { useRef } from "react";
import { FiMaximize } from "react-icons/fi";

interface PDFViewerProps {
  file: string;
}

export default function PDFViewer({ file }: PDFViewerProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const openFullscreen = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if ((iframe as any).webkitRequestFullscreen) {
      // Safari
      (iframe as any).webkitRequestFullscreen();
    } else if ((iframe as any).msRequestFullscreen) {
      // IE11
      (iframe as any).msRequestFullscreen();
    }
  };

  return (
    <div>
      <iframe
        ref={iframeRef}
        src={file}
        width="100%"
        height="800px"
        style={{ border: "1px solid #ccc" }}
      />
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={openFullscreen}
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <FiMaximize size={20} />
          Fullscreen
        </button>
      </div>
    </div>
  );
}
