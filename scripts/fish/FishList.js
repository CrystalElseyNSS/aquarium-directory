// FishList needs the function that provides the array in FishDataProvider.js
import { useFish } from './FishDataProvider.js'; 
import Fish from './Fish.js';

const contentTarget = document.querySelector(".fishList")


const FishList = () => {

    // Get the data from the provider
    const fishObjectsArray = useFish()

    // Iterate the array
    for (const fishObject of fishObjectsArray) {
        
        // Convert each object to html representation (in a function in Fish), and invoke it:
        const fishHTMLRepresentation = Fish(fishObject);

        // Put html in DOM
        contentTarget.innerHTML += fishHTMLRepresentation;

    }
  
}

export default FishList