import React, { useState, useRef } from "react";
import {Camera } from "react-camera-pro-react-18";

const Camera1 = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);

  return (
    <div>
      <Camera ref={camera} facingMode={'environment'}/>
      <button onClick={() => setImage(camera.current.takePhoto())}>Take photo</button>
      <img src={image} alt='Taken photo'/>
    </div>
  );
}

export default Camera1;