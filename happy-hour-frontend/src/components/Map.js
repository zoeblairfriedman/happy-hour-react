import React, {useState} from 'react'
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api"
import mapStyles from '../mapStyles'
import "@reach/combobox/styles.css";
import Search from './Search'

const libraries = ["places"];
const mapContainerStyle = {
    width: "75vw",
    height: "75vh"
}
const center = {
    lat: 40.7128,
    lng: -73.935242
}

//snazzy maps for this! 
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}

export default function Map(props){

    //this is my state for my selected bars, starting as null, getting value when clicked
    const [selectedBar, setSelectedBar] = useState(null);

    const { isLoaded, loadError } = useLoadScript ({
    googleMapsApiKey: "AIzaSyBEBEXXRvP5A3JAuZ2hL2Z2ShMPxzWeMxQ",
    libraries
    })

    //saving it to useRef lets us retain state without rerendering
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, [])

    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading Maps"

    return <div>
        <h1> Happy Hour </h1>
        
        <Search/>

        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12.7} center={center} options={options} onLoad={onMapLoad}>
        {props.bars.map(b => (
            console.log(b),
            <Marker key={b.id} position={{
                lat: parseFloat(b.lat),
                lng: parseFloat(b.lng)
            }} 
            onClick={() => {
                setSelectedBar(b)
               // open bar details separately! 
            }}
            icon={{
                url: "/tropical.png",
                scaledSize: new window.google.maps.Size(25,25)
            }}/>
        )
        )}

        {selectedBar && (
            <InfoWindow position={{
                lat: parseFloat(selectedBar.lat),
                lng: parseFloat(selectedBar.lng)
            }} onCloseClick={()=> {
                setSelectedBar(null)
            }}>
                <div>
                    <h3>{selectedBar.name}</h3>
                </div>
                </InfoWindow>
        )}
        </GoogleMap>
    </div>

}
