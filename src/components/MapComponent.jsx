import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Icon, icon } from "leaflet";



const MapComponent = () => {
 
//obs: 
/* para o mapa funcionar alem do component dele precisamos importar o css dele no componente
e tambem adicionar a altura no css*/


const markers = [
  {
    geocode: [48.2655, 2.3522],
    popUp: "Pop up  1",
    key:1
  },
  {
    geocode: [48.2650, 2.3522],
    popUp: "Pop up  2",
    key:2
  },
  {
    geocode: [48.2660, 2.34],
    popUp: "Pop up  3",
    key:3
  }
]

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/931/931617.png",
  iconSize: [38,38]
})

  return (
    <div>
        <MapContainer 
        center={[48.8566, 2.3522]} 
        zoom={13}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyrigth">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map(marker => (
          <Marker key={marker.key} position={marker.geocode} icon={customIcon}>
          </Marker>
          
          
        ))}
        
        </MapContainer>
        
    </div>
  );
}

export default MapComponent;
