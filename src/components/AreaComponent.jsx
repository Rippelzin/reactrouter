import React from "react";
import { Polygon } from "react-leaflet";
import { useMemo, useState } from "react";
import CardComponent from "./CardComponent";

const AreaComponent = ({data}) => {

    const [showCard, setShowCard] = useState(0)

   

   const eventHandlers = useMemo(
    () => ({
      click() {
        setShowCard(1)
        console.log(showCard)
      },
    }),
    [],
  )
    
    console.log(data.color)
    return( 
        <div>
            
                <Polygon 
                pathOptions={data} 
                positions={data.positions} 
                eventHandlers={eventHandlers}
                />

                
           
            
            
        </div>
    )
        
}
export default AreaComponent