export function fetchGoogleBars(locationObj){
    const lat = locationObj.lat
    const lng = locationObj.lng
    const API = "AIzaSyBEBEXXRvP5A3JAuZ2hL2Z2ShMPxzWeMxQ"
   
    // fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&types=bar&keyword=happyhour&key=${API}`)
    //   .then(r => r.json())
    //   .then(bars => console.log(bars))
    console.log(locationObj)
    
    }
    
    