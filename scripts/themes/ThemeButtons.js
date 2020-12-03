const contentTarget = document.querySelector(".themes")
const eventHub = document.querySelector(".container")
/* - connect with .container because it is theh parent container 
   of both messages and themes */

// Listen for browser generated click event in this component
eventHub.addEventListener("click", clickEvent => {

    // Make sure it was one of the color buttons
    if (clickEvent.target.id.startsWith("btnTheme--")) {

        // Get the chosen color
        const [prefix, chosenColor] = clickEvent.target.id.split("--")

        /*
            Create a new custom event, with a good name, and
            add a property to the `detail` object that specifies
            which color was chosen
        */

        /* can make own event with CustomEvent - but have to have detail 
           as variable inside function that has to be an object */
        const colorChosenEvent = new CustomEvent("chosenColor", {
            detail: {
                color: chosenColor
            }
        })
/* dispatch broadcastes the event and it gets dispatches from eventHub and is sent to  */
        eventHub.dispatchEvent(colorChosenEvent)
    }
})

export const ThemeButtons = () => {
    contentTarget.innerHTML = `
        <button class="btnTheme" id="btnTheme--red">Red</button>
        <button class="btnTheme" id="btnTheme--purple">Purple</button>
        <button class="btnTheme" id="btnTheme--blue">Blue</button>
        <button class="btnTheme" id="btnTheme--green">Green</button>
    `
}
