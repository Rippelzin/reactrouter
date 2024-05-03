import React, { useEffect } from "react";
import { Marker, Polygon, LayerGroup, useMap } from "react-leaflet";
import { useMemo, useState } from "react";
import MarkerComponent from "./MarkerComponent";




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


  const map = useMap()

  function returnCenterPolygon() {
    const cords = data.positions
    let latSum = 0
    let longSum = 0
    cords.map(cord => {
      latSum += cord[0]
      longSum += cord[1]
      
    })
    
    latSum = latSum/cords.length
    longSum = longSum/cords.length
    return([latSum, longSum])
  }

    function handleClick(){
      setShowCard(!showCard)
      setRenderPopUps(!renderPopUps)
      console.log("clicou")
      map.setView(returnCenterPolygon(), 16)
      
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
                    <MarkerComponent key={index} 
                    props={{ lat: marker.photoLatitude,
                             long:  marker.photoLongitude,
                             image: "imagem"
                          }}/>
                  )}

                </LayerGroup>
              }
            </LayerGroup>
            
            
        </div>
    )
        
}
export default AreaComponent