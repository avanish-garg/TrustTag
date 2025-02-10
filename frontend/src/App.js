import React, { useState } from 'react';
import QRReader from 'react-qr-reader';

function App() {
  const [productInfo, setProductInfo] = useState(null);

  const handleScan = async (data) => {
    if (data) {
      const response = await fetch(`/api/verifyProduct/${data}`);
      const result = await response.json();
      setProductInfo(result);
    }
  };

  return (
    <div>
      <h1>Product Authentication</h1>
      <QRReader delay={300} onScan={handleScan} />
      {productInfo && (
        <div>
          <h3>{productInfo.name}</h3>
          <p>{productInfo.isAuthentic ? 'Authentic' : 'Fake'}</p>
        </div>
      )}
    </div>
  );
}

export default App;
