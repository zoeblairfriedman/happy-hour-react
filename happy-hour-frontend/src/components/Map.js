import React, {useState} from 'react'
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api"
import mapStyles from '../mapStyles'
import "@reach/combobox/styles.css";
import Search from './Search'
import {useDispatch} from 'react-redux'
import {selectBar} from '../actions/selectBar'
import {clearSelectedBar} from '../actions/clearSelectedBar'

const libraries = ["places"];
const mapContainerStyle = {
    width: "50vw",
    height: "80vh"
}
const center = {
    lat: 40.745312,
    lng: -73.99600
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
    const dispatch = useDispatch()
    const { isLoaded, loadError } = useLoadScript ({
    googleMapsApiKey: "AIzaSyBEBEXXRvP5A3JAuZ2hL2Z2ShMPxzWeMxQ",
    libraries
    })

    // useCallback to "it only ever creates one of these functions???" what is the empty array after?
    const panTo = React.useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(14);
        }, []) 

    //saving it to useRef lets us retain state without rerendering
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, [])

    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading Maps"

  
    return( 
    <div >
        <h1> Happy Hour </h1>
        
        <Search panTo={panTo}/>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12.7} center={center} options={options} onLoad={onMapLoad}>
        {props.bars.map(b => (
            <Marker key={b.id} position={{
                lat: parseFloat(b.lat),
                lng: parseFloat(b.lng)
            }} 
            onClick={() => {
                setSelectedBar(b)
                dispatch(selectBar(b))
            }}
            icon={{
                url: "/tropical.png",
                scaledSize: new window.google.maps.Size(25,25)
            }}/>
        )
        )}

        {selectedBar && (
            <>
            <InfoWindow position={{
                lat: parseFloat(selectedBar.lat),
                lng: parseFloat(selectedBar.lng)
            }} onCloseClick={()=> {
                setSelectedBar(null)
                dispatch(clearSelectedBar())
            }}>
                <div>
                    <p>{selectedBar.name}</p>
                </div>
                </InfoWindow> 
           
            </>
        )} 
       
        </GoogleMap>

    </div>
    )
}
