import React from 'react'
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

export default function MapContainer(){

    const { isLoaded, loadError } = useLoadScript ({
    googleMapsApiKey: "AIzaSyBEBEXXRvP5A3JAuZ2hL2Z2ShMPxzWeMxQ",
    libraries
    })

    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading Maps"

    return <div>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12.7} center={center} options={options}></GoogleMap>
    </div>

}
