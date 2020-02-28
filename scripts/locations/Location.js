const Location = (locationObject) => {
    return `
        <section class="location">
            <div>
                <img class="location__image" src="${locationObject.image}" alt="">
            </div>
            <div class="location__name">Dive Location: ${locationObject.name}</div>
        </section>
    `
}


export default Location 