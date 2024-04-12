import { useEffect } from "react";
import React, { useState, useRef } from "react";
import {Camera } from "react-camera-pro-react-18";
import axios from 'axios';


const CameraComponent = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [photoTaken, setPhotoTaken] = useState(false)
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  const [photoObject, setPhotoObj] = useState({})


  function handleTakePhoto() {
    if (photoTaken == false) 
    {
      setPhotoTaken(true)
    }/*
    console.log(image)
    console.log(longitude, latitude)
    console.log(photoObject)
    setPhotoObj({
      ...photoObject,
      
      photoLatitude: latitude,
      photoLongitude: longitude,
      photoImage: image
    })*/
   
}
  function comeBack() {
        setPhotoTaken(false)
  }

  function handleSendPhoto() {
    
    axios.post('/endpoint', {
      photoImage: image,
      photoLatitude: latitude,
      photoLongitude: longitude
    }).then(function (response) {
      console.log(response);
    })

   console.log(image)
   console.log(longitude, latitude)
   

    //console.log(photoObject)
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        // Obtém latitude e longitude
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        console.log(longitude, latitude)
        
  }
)}
  }, [])
  
  
  


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