import React, { useState, useRef } from "react";
import {Camera } from "react-camera-pro-react-18";
import '../App.css'
import CameraComponent from "../components/CameraComponent"
import MapComponent from "../components/MapComponent"

const JogoPage = () => {
 
  const [abrirCamera, setAbrirCamera] = useState(false)

  function openCam() {
    setAbrirCamera(true)
  }
function  comeBackToMap() {
  setAbrirCamera(false)
}
  return (
    <div>

{abrirCamera ? (
                  <div>
                        <button className="button-voltar" onClick={comeBackToMap}> voltaremos </button>
                        <CameraComponent />
                        
                  </div>
                    

                ) : (
                  <div>
                      <div> <MapComponent/> </div>
                      <button onClick={openCam}>Abrir Camera</button>
                  </div>
                    
                )}
          
          
    </div>
    
  );
}

export default JogoPage;