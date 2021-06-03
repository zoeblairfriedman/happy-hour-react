import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete"
import {Combobox, ComboboxInput, ComboboxOption, ComboboxPopover, CompoboxList} from "@reach/combobox"
import "@reach/combobox/styles.css";
import {useDispatch} from 'react-redux'
import React from 'react'
import setLocation from '../actions/setLocation'


//IF YOU HAVE TIME ADD THE GEOLOCATOR
function Search({panTo}){
    //what is this syntax?
    const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions: {
            location: {lat: () => 40.7128, lng: () => -73.935242}
        ,
        radius: 200 * 1000}
    })

const dispatch = useDispatch()

    return (
    <div className="search">
        <Combobox onSelect={async (address) => {
            setValue(address, false)
            clearSuggestions()
            try {
                //what is this syntax??? this needs to be thunk in action creator!
                const results = await getGeocode({address})
                const { lat, lng } = await getLatLng(results[0])
                panTo({lat, lng})
                dispatch(setLocation({lat, lng}))
               
            } catch(error) {
                console.log(error)
            }
        }}>
                <ComboboxInput 
                value={value} 
                onChange={(e) => {
                    setValue(e.target.value)
                }}
                disabled={!ready}
                placeholder="Where are we drinking?"
                />
        <ComboboxPopover>
            {status === "OK" && data.map(({id, description})=>
            <ComboboxOption key={id} value={description}/>
            )}
        </ComboboxPopover>
        </Combobox>
    </div>
    )
}

export default Search