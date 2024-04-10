import React, { useState, useRef } from "react";
import {Camera } from "react-camera-pro-react-18";


const CameraComponent = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [photoTaken, setPhotoTaken] = useState(false)
  const [aspectRatio, setAspectRatio] = ["10vh"]


  function handleTakePhoto() {
    if (photoTaken == false) 
    {
      setPhotoTaken(true)
    }
  }
  function comeBack() {
        setPhotoTaken(false)
  }

  function handleSendPhoto() {
    console.log(image)
  }



  return (
    //conditional rendering linked toa button to change the view of the Camera Component
    <div>
      
    
      

      { photoTaken ? ( 

          <div className="send-Card">
            <button onClick={comeBack}>X</button>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <img src={image} alt='Taken photo' className="imageTaken"/>
            </div>
            
            <button onClick={handleSendPhoto}>Enviar Foto</button>
          </div>
      ) : (
        
        <div   className="cameraCard">
          
           <Camera  className="camera" ref={camera} facingMode={'environment'} aspectRatio={16/25}  />
           
          <button className="button-take-picture" onClick={() => {setImage(camera.current.takePhoto()); handleTakePhoto()}} >Take photo</button>
          
        </div>
      )
      }
      
      
    </div>
  );
}

export default CameraComponent;