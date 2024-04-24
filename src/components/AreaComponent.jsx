import React, { useEffect } from "react";
import { Marker, Polygon, LayerGroup } from "react-leaflet";
import { useMemo, useState } from "react";
import CardComponent from "./CardComponent";
import { marker } from "leaflet";

const AreaComponent = ({data}) => {

    const [showCard, setShowCard] = useState('')
    const [renderPopUps, setRenderPopUps] = useState(false)

   
/*
   const eventHandlers = useMemo(
    () => ({
      click() {
        setShowCard(1)
        console.log(showCard)
      },
    }),
    [],
  )*/

  useEffect(() => {
      console.log("alterei o showcard")
  }, [showCard])


    function handleClick(){
      setShowCard(!showCard)
      setRenderPopUps(!renderPopUps)
      console.log("clicou")
    }


    const markers = [
      {
        "photoLatitude": -29.922930,
        "photoLongitude": -51.167681
      },
      {
        "photoLatitude": -29.922122,
        "photoLongitude": -51.165991
      },
      {
        "photoLatitude": -29.925764,
        "photoLongitude": -51.163361
      }
    ]
    
    console.log(data.color)
    return( 
        <div>
          <LayerGroup checked name="Area with opo-ups" >
            <Polygon 
              pathOptions={data} 
              positions={data.positions} 
             // eventHandlers={eventHandlers}
             eventHandlers={{ click: handleClick }}
              />
              {renderPopUps && 
                <LayerGroup checked name="just pop-ups">
                  {markers.map((marker,index) => 
                    <Marker key={index} position={[marker.photoLatitude, marker.photoLongitude]}/>
                  )}
                </LayerGroup>
              }
            </LayerGroup>
            
            
        </div>
    )
        
}
export default AreaComponent