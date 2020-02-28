import initializeDetailButtonEvents from './dialogs.js'; 
import { useFish } from './fish/FishDataProvider.js';
import FishList from './fish/FishList.js';

FishList()

const arrayOfTheFishObjects = useFish();

for (const currentFishObject of arrayOfTheFishObjects) {
    console.log(currentFishObject);
}

initializeDetailButtonEvents();