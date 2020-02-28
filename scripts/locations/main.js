import { useLocation } from './LocationDataProvider.js';
import LocationList from './LocationList.js';

LocationList();

const arrayOfTheLocationObjects = useLocation();

for (const currentLocationObject of arrayOfTheLocationObjects) {
    console.log(currentLocationObject);
} 

// initializeDetailButtonEvents();