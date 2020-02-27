const location = (locationObject) => {
    return `
        <div class="location">
            <div>
                <img class="location__image" src="${locationObject.image}" alt="">
            </div>
            <div class="location__name">${locationObject.name}</div>
            <button id="button--${locationObject.name}">Details</button>

            <dialog class="dialog--location" id="details--${locationObject.name}">
                <div>Species: ${locationObject.species}</div>
                <div>Location: ${locationObject.location}</div>
                <div>Length: ${locationObject.size}</div>
                <div>Food: ${locationObject.food.join(", ")}</div>

                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    `
}


export default location 