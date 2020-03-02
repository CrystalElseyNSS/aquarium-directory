const initializeFishDetailButtonEvents = () => {
    const allCloseButtons = document.querySelectorAll(".button--close")
    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }

    // Creates a variable to hold the collection of HTML elements you want to target:
    const allDetailButtons = document.querySelectorAll("button[id^='button--']")

    // Iterates the collection of HTML elements and attach an event listener to each one:
    for (const btn of allDetailButtons) {
        btn.addEventListener('click', theEvent => {
            const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
            const theDialog = document.querySelector(dialogSiblingSelector)
            theDialog.showModal()
        })
    }

}



export default initializeFishDetailButtonEvents;