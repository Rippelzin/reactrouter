import React from 'react'
import { LayerGroup, Marker, Popup, useMap } from 'react-leaflet'
import img from "../assets/boy_avatar.png"


const MarkerComponent = ({props}) => {

  const map = useMap()

    function handleMarkerClick() {
      console.log("clicou no popup")
      
      
      map.setView([props.lat, props.long], 18)
    }
  return (
    <div>
        <LayerGroup>
          
          <Marker position={[props.lat, props.long]} eventHandlers={{ click: handleMarkerClick }}>
            <Popup > 
              <h2>teste</h2>
              <img src={img} alt="" style={{width: "300px"}} />
            </Popup>
          </Marker>
        </LayerGroup>
    </div>
  )
}

export default MarkerComponent