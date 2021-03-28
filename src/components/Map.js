import React, { Fragment } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js'
import logo from "./location.png";
 const Map = ({data:{lat,lon}}) => {

    const myIcon = L.icon({
        iconUrl: logo,
        iconSize: [54,54],
         iconAnchor: [0, 0],
    
    });
    return (
        <Fragment>
        

        <MapContainer

            center={[lat, lon]}
            zoom={20}
            scrollWheelZoom={false}
            style={{ height: 495, flex: 1 }}
            fullscreenControl={true}
        >
           
            <TileLayer

                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <Marker position={[lat, lon]} icon={myIcon} >
                    <Popup>
                         Position de Entreprise 
                    </Popup>
                </Marker>

                 

        </MapContainer>
        </Fragment>

    )
 

}
export default Map;
