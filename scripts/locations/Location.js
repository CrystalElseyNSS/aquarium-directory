const Location = (locationObject) => {
    return `
        <section class="location">
            <div>
                <img class="location__image" src="${locationObject.image}" alt="">
            </div>
            <div class="location__name">Dive Location: ${locationObject.name}</div>
            <button class="button--locationDetails" id="button--${locationObject.name}">Details</button>
            <dialog class="dialog--location" id="details--${locationObject.name}">
                <div>Primary Language: ${locationObject.language}</div>
                <div>Population: ${locationObject.population}</div>
                <div>Lodging Suggestions: ${locationObject.lodging.join(", ")}</div>
                <div>Transportation Options: ${locationObject.transportation.join(", ")}</div>
                <button class="button--close">Close Dialog</button>
            </dialog>
        </section>
    `
}


export default Location 