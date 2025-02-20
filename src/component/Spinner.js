import React from 'react';
import Lottie from 'lottie-react';
import loading from './loading.json'; // Place your JSON file in the same folder

const Spinner = () => {
  return (
    <div className="spinner-container" style={{ position: "fixed", bottom: "5px", left: "50%", transform: "translateX(-50%)"}}>
      <Lottie animationData={loading} style={{ width: 50, height: 50 }} />
    </div>
  );
};

export default Spinner;
