import React, { useState } from 'react';

function QRCodePopup() {
  const [showQRCode, setShowQRCode] = useState(false);

  const handleButtonClick = () => {
    setShowQRCode(true);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="btn btn-green" 
      >
        <span>Click here to share the webpage</span> 
      </button>
      {showQRCode && (
        <div className="qr-code-container">
          <img
            alt="QR code to share the webpage"
            src="/sampleQR.png"
            className="qr-code img-fluid"
          />
        </div>
      )}
    </div>
  );
}

export default QRCodePopup;
