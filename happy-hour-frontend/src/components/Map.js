import React, {useState} from 'react'
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api"
// import {formatRelative} from "data-fns"
import "@reach/combobox/styles.css";
import mapStyles from '../mapStyles'



const libraries = ["places"];
const mapContainerStyle = {
    width: "75vw",
    height: "75vh"
}
const center = {
    lat: 40.7128,
    lng: -73.935242
}

// don't love this style. snazzy maps check?
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}

export default function Map(props){

    const [selectedBar, setSelectedBar] = useState(null);

    const { isLoaded, loadError } = useLoadScript ({
    googleMapsApiKey: "AIzaSyBEBEXXRvP5A3JAuZ2hL2Z2ShMPxzWeMxQ",
    libraries
    })

    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading Maps"

    return <div>
        <h1> Happy Hour
            {/* Happy Hour {" "}
            <span role="img" aria-label="drink">
            🍹
            </span> */}
        </h1>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12.7} center={center} options={options}>
        {props.bars.map(b => (
            console.log(b),
            <Marker key={b.id} position={{
                lat: parseFloat(b.lat),
                lng: parseFloat(b.lng)
            }} 
            onClick={() => {
                setSelectedBar(b)
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
                    <p>{selectedBar.details}</p>
                </div>
                </InfoWindow>
        )}
        </GoogleMap>
    </div>

}
