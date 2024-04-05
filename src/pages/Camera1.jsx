import React, { useState, useRef } from "react";
import {Camera } from "react-camera-pro-react-18";
import '../App.css'

const Camera1 = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);

  return (
    //conditional rendering linked toa button to change the view of the Camera Component
    <div>
      <h2>testse</h2>
    
      <Camera className="camera"  facingMode={'environment'} aspectRatio= {16/9}  />
      <button onClick={() => setImage(camera.current.takePhoto())}>Take photo</button>
      <img src={image} alt='Taken photo'/>
    </div>
  );
}

export default Camera1;