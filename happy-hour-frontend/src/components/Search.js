import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete"
import {Combobox, ComboboxInput, ComboboxOption, ComboboxPopover, CompoboxList} from "@reach/combobox"
import "@reach/combobox/styles.css";

function Search(){
    //what is this syntax?
    const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions: {
            location: {
                lat: () => 40.7128,
                lng: () => -73.935242}
        },
        radius: 200 * 1000
    })

    return (
    <div className="search">
        <Combobox onSelect={(address) => {console.log(address)}}>
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