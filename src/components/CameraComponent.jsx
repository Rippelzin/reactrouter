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
  const [photoURl, setPhotoUrl] = useState()

  const [imageUrl, setImageUrl] = useState()


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
    
   const imageConverted = handleConversion()
   //setImageUrl(imageConverted)
   //console.log(imageConverted)
/*
   axios.post('http://localhost:3000/tokens', {
   
    nickname: "augusto3",
    password: "123456"
  
  }).then(function(response) {
    console.log(response.data.token)
  })

  */

  const headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzE0NDQwNjU5LCJleHAiOjE3NDU5OTgyNTl9.xMTwGmMHZkP1PLr61pzuGIzh2Xuok-_LZ3U8FKb5Rwc',
  };
  

  
  // Construção dos dados do formulário
const formData = new FormData();
formData.append('photo', imageConverted, `${Date.now()}.jpeg`); // 'imageConverted' é a sua variável que contém o Blob da imagem
formData.append('longitude', longitude);
formData.append('latitude', latitude);
console.log(formData)
  
  axios.post('http://localhost:3000/photos', formData, { headers })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });

   //console.log(image)
   //console.log(longitude, latitude)
   

    //console.log(photoObject)
    
   
  }

  function handleConversion(){
     // Decode Base64 image data
     //console.log(image)
     const binaryData = atob(image.split(',')[1]);
     const arrayBuffer = new ArrayBuffer(binaryData.length);
     const uint8Array = new Uint8Array(arrayBuffer);
     for (let i = 0; i < binaryData.length; i++) {
       uint8Array[i] = binaryData.charCodeAt(i);
     }
     
     // Create Blob from binary data
     const blob = new Blob([uint8Array], { type: 'image/jpeg' });
     console.log(blob)
     const url = URL.createObjectURL(blob)

     setPhotoUrl(url)
     
     return blob
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

<div>
            <p>Image uploaded successfully!</p>
            <a href={photoURl} download="converted_image.jpg">Download aaa</a>
          </div>
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