import * as React from 'react';
import Map,{Marker, Popup} from 'react-map-gl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { red } from '@mui/material/colors';
import {useState} from 'react';


function Mapp() {

  return (
    <div className='HeroMap' style={{width:"100vw" , height:'100vh'}}>
        <Map
          mapboxAccessToken = "pk.eyJ1IjoidGhlcGFuaWNwb2ludCIsImEiOiJjbGwzeDA0NXQwMHhhM2NzN3pqZnBnMmgxIn0.wS-dE8a_Nr7Ar4tSenDing"
          initialViewState={{
            longitude: 77.947998,
            latitude: 23.473324,
            zoom: 4
          }}
          style={{width:'100vw', height:'100vh', position:"fixed"}}
          mapStyle="mapbox://styles/mapbox/streets-v9" 
        >
          <Marker draggable={true} pitchAlignment={'map'} rotationAlignment={'map'} longitude={77.216} latitude={28.6448}  offsetLeft={-3.5*4} offsetTop={-7.5*4}>
            <LocationOnIcon style={{fontSize:70, color:'red'}}/>
          </Marker>
          
        </Map>

    </div>
  );
}

export default Mapp;