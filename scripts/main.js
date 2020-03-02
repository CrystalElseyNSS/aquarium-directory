import initializeFishDetailButtonEvents from './fish/dialogs.js'; 
import { useFish } from './fish/FishDataProvider.js';
import FishList from './fish/FishList.js';

import initializeLocationDetailButtonEvents from './locations/dialogs.js';
import { useLocation } from './locations/LocationDataProvider.js';


FishList();

const arrayOfTheFishObjects = useFish();
for (const currentFishObject of arrayOfTheFishObjects) {
    console.log(currentFishObject);
}

const arrayOfTheLocationObjects = useLocation();
for (const currentLocationObject of arrayOfTheLocationObjects) {
    console.log(currentLocationObject);
}


initializeFishDetailButtonEvents();
initializeLocationDetailButtonEvents();