const initializeDetailButtonEvents = () => {
    const allCloseButtons = document.querySelectorAll(".button--close")
    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
 
    document.querySelector("#button--harold").addEventListener("click", theClickEvent => {
            const theDialog = document.querySelector("#details--harold")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--maude").addEventListener("click", theClickEvent => {
        const theDialog = document.querySelector("#details--maude")
        theDialog.showModal()
        }
    )

    document.querySelector("#button--betty").addEventListener("click", theClickEvent => {
        const theDialog = document.querySelector("#details--betty")
        theDialog.showModal()
        }
    )

}





export default initializeDetailButtonEvents;