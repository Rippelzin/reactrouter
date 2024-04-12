import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents, Polygon } from 'react-leaflet'
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

function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })
  useEffect(() => {
    map.locate();
  }, []); // Executa somente uma vez, quando o componente é montado


  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

const purpleOptions = { color: 'purple' }
const polygon = [
  [-29.966581, -51.157259],
  [-29.964797, -51.111925],
  [-29.908269, -51.074822],
  [-29.885053, -51.098183]

]



  return (
    <div>
        <MapContainer 
        center={[ 0 , 0]} 
        zoom={14}>
        
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyrigth">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map(marker => (
          <Marker key={marker.key} position={marker.geocode} icon={customIcon}>
          </Marker>
          
          
        ))}
        <LocationMarker />
        <Polygon pathOptions={purpleOptions} positions={polygon}/>
        
        </MapContainer>
        
    </div>
  );
}

export default MapComponent;
