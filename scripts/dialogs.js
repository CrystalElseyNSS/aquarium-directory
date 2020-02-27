const initializeDetailButtonEvents = () => {
    const allCloseButtons = document.querySelectorAll(".button__close")
    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
 
    document.querySelector("#button__harold").addEventListener("click", theClickEvent => {
            const theDialog = document.querySelector("#details__harold")
            theDialog.showModal()
        }
    )

    document.querySelector("#button__maude").addEventListener("click", theClickEvent => {
        const theDialog = document.querySelector("#details__maude")
        theDialog.showModal()
        }
    )

    document.querySelector("#button__betty").addEventListener("click", theClickEvent => {
        const theDialog = document.querySelector("#details__betty")
        theDialog.showModal()
        }
    )

}





export default initializeDetailButtonEvents;