import initializeDetailButtonEvents from './dialogs.js'; 
import { useFish } from './FishDataProvider.js';
import FishList from './FishList.js';

// initializeDetailButtonEvents();

FishList()

const arrayOfTheFishObjects = useFish();

for (const currentFishObject of arrayOfTheFishObjects) {
    console.log(currentFishObject);
}