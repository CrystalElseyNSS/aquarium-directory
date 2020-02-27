import initializeDetailButtonEvents from '../dialogs'; 
import { useLocation } from './locations/LocationDataProvider.js.js.js';
import locationList from './locations/LocationList.js.js.js';

// initializeDetailButtonEvents();

locationList()

const arrayOfTheLocationObjects = useLocation();

for (const currentLocationObject of arrayOfTheLocationObjects) {
    console.log(currentLocationObject);
} 