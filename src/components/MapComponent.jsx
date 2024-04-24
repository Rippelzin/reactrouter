import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents, Polygon } from 'react-leaflet'
import { Icon, icon, latLng } from "leaflet";
import AreaComponent from "./AreaComponent";
import CardComponent from "./CardComponent";


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
      map.flyTo([-29.919007, -51.176190], map.getZoom())
    },
  })
  useEffect(() => {
    map.locate();
    //console.log("componenet pai")
  }, []); // Executa somente uma vez, quando o componente é montado


  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

const purpleOptions = { color: 'purple' }

const polygon = [
  
  [-29.960282, -51.202841],
  [-29.956852, -51.191457],
  [-29.956852, -51.191457],
  [-29.943985, -51.202841],
  [-29.927257, -51.218433],
  [-29.930339, -51.237946],
  [-29.908326, -51.249270],
  [-29.875723, -51.247648],
  [-29.881583, -51.237203],
  [-29.885118, -51.187742],
  [-29.877485, -51.196426],
  [-29.872988, -51.187621],
  [-29.866404, -51.178871],
  [-29.863756, -51.171342],
  [-29.868714, -51.171697],
  [-29.869607, -51.160297],
  [-29.877461, -51.161132],
  [-29.878674, -51.141839],
  [-29.877050, -51.118242],
  [-29.883649, -51.124189],
  [-29.887173, -51.125214],
  [-29.891183, -51.126331],
  [-29.894680, -51.128584],
  [-29.894872, -51.127983],
  [-29.896473, -51.129508],
  [-29.906370, -51.129965],
  [-29.907884, -51.132061],
  [-29.911344, -51.127171],
  [-29.916232, -51.115252],
  [-29.919535, -51.116767],
  [-29.922560, -51.120257],
  [-29.924029, -51.120714],
  [-29.922472, -51.118794],
  [-29.924834, -51.119867],
  [-29.925550, -51.120920],
  [-29.925496, -51.122490],
  [-29.924280, -51.126413],
  [-29.922454, -51.126991],
  [-29.928131, -51.127990],
  [-29.934017, -51.126459],
  [-29.951219, -51.126559],
  [-29.958226, -51.136466]
  ]
  const polygon2 = [
    [-29.920722, -51.163465],
    [-29.934343, -51.161560],
    [-29.927017, -51.182992],
  ]

  const areas = [
    {
      id: 1,
      color: "red",
      positions: [
        [-29.920722, -51.163465],
        [-29.934343, -51.161560],
        [-29.927017, -51.182992],
      ]
    }, 
    {
      id: 2,
      color: "orange",
      positions: [
        [-29.898357, -51.217924],
        [-29.905703, -51.226567],
        [-29.893362, -51.230634],
        [-29.889248, -51.220635],
      ]
    },
    {
      id: 3,
      color: "black",
      positions: [
        [-29.883811, -51.152677],
        [-29.889101, -51.146746],
        [-29.892480, -51.156405],
      ]
    }
  ]
  const myAreas = areas.map(area => 
    
    <AreaComponent key={area.id} data={area}/>
  )
  





  return (
    <div style={{display: "flex", justifyContent: "center", alignItems:"center"}}> 
        <MapContainer style={{marginTop: "0vh"}}
        center={[-29.919007, -51.176190]} 
        zoom={11}>
        
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyrigth">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map(marker => (
          <Marker key={marker.key} position={marker.geocode} icon={customIcon}>
          </Marker>
          
          
        ))}
        <LocationMarker />
        <Polygon pathOptions={purpleOptions} positions={polygon} clickable={false}/>
        
        <div>{myAreas}</div>
        
        
        </MapContainer>
        
    </div>
  );
}

export default MapComponent;
