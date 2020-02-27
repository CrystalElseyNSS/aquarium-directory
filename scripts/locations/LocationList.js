import { useLocation } from './locationDataProvider.js.js.js'; 
import location from './location.js.js.js';

const contentTarget = document.querySelector(".locationList")


const locationList = () => {

    // Get the data from the provider
    const locationObjectsArray = uselocation()

    // Iterate the array
    for (const locationObject of locationObjectsArray) {

        // Convert each object to html representation (in a function in location), and invoke it:
        const locationHTMLRepresentation = location(locationObject)

        // Put html in DOM
        contentTarget.innerHTML += locationHTMLRepresentation

    }
  
}

export default locationList