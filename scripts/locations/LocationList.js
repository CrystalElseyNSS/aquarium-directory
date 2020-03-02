import { useLocation } from './LocationDataProvider.js'; 
import Location from './Location.js';



const LocationList = () => {
    const contentTarget = document.querySelector(".locationList")

    // Get the data from the provider
    const locationObjectsArray = useLocation()

    // Iterate the array
    for (const locationObject of locationObjectsArray) {

        // Convert each object to html representation (in a function in location), and invoke it:
        const locationHTMLRepresentation = Location(locationObject)

        // Put html in DOM
        contentTarget.innerHTML += locationHTMLRepresentation

    }
  
}

export default LocationList