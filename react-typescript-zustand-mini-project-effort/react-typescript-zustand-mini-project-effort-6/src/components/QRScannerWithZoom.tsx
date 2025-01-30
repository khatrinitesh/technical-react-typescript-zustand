import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';

const QRScannerWithZoom: React.FC = () => {
  const [zoom, setZoom] = useState(1); // State to control the zoom level
  const [qrCode, setQrCode] = useState<string | null>(null); // QR code result

  // Handle QR Code scan result
  const handleScan = (data: any) => {
    if (data) {
      setQrCode(data?.text);
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  // Zoom in function
  const zoomIn = () => {
    if (zoom < 3) {
      setZoom(zoom + 0.5); // Increase zoom level
    }
  };

  // Zoom out function
  const zoomOut = () => {
    if (zoom > 1) {
      setZoom(zoom - 0.5); // Decrease zoom level
    }
  };

  return (
    <div className="qr-scanner-container">
      <h2>QR Code Scanner with Zoom</h2>

      {/* QR Code Scanner */}
      <div className="qr-reader-wrapper" style={{ position: 'relative' }}>
        <QrReader
          delay={300}
          style={{
            width: '100%',
            height: 'auto',
            transform: `scale(${zoom})`, // Apply zoom effect
            transformOrigin: 'center center', // Center zoom effect
          }}
          onScan={handleScan}
          onError={handleError}
        />
      </div>

      {/* QR Code Result */}
      {qrCode && (
        <div className="qr-result">
          <h3>Scanned QR Code:</h3>
          <p>{qrCode}</p>
        </div>
      )}

      {/* Zoom controls */}
      <div className="zoom-controls">
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
      </div>
    </div>
  );
};

export default QRScannerWithZoom;
