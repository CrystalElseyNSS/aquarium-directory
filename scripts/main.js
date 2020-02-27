import initializeDetailButtonEvents from './dialogs.js'; 
import { useFish } from './FishDataProvider.js';

initializeDetailButtonEvents();

const arrayOfTheFishObjects = useFish();

for (const currentFishObject of arrayOfTheFishObjects) {
    console.log(currentFishObject);
}