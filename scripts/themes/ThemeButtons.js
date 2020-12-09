const contentTarget = document.querySelector(".themes")
const eventHub = document.querySelector(".container")
/* 
- connect with .container because it is theh parent container 
of both .messages and .themes 
*/


/*  Listen for browser generated click event in this component
    - Breakdown of line below
        1. There are two parameters (a string, and function)
        2. eventhub is listening for the event "click" to take place
        3. clickEvent is the event and that parameter will always 
           be the event
        4. the function, which we don't have to call defines what happens
           when the event takes place (i.e. user clicks button in browser)
        5. 'if' statement says 'when the event takes place, does the target(the button
           clicked) have an id that starts with btnTheme-- if it exists. If it does 
           exist, run the following code
        6. That following code says split that targeted id when the event happens
           and split it into two parts by the --. The first part will be known as
           prefix (btnTheme) and the second part will be known as chosenColor (whatever
           color comes after each btnTheme--)
        7. There is a list of events can select from or can make custom event
        8. For the next const - you are making a new event (still within the if statment)
           must use verbage "new CustomEvent" & be mindful to capitalize CustomEvent
        9. For its two parameters - chosenColor is, as always, the event itself. A 
           function follows as the second parameter - however, that MUST be an object and
           the object MUST be labelled 'detail' & the value of the key 'color' (in this 
           example) must match chosenColor above
        10. The last line of the if statement - .dispatchEvent dispatches/broadcasts ....
*/
eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id.startsWith("btnTheme--")) {

        const [prefix, chosenColor] = clickEvent.target.id.split("--")
        // this above chosenColor has to match the chosenColor below in the detail object
        

        /* The CustomEvent (so the actual event) in below example is 
           the chosenColor in object below. Whatever 'color' word 
           is leftover at the above split of the id on that specific button clicked
        */
        const colorChosenEvent = new CustomEvent("colorChosen", {
            detail: {
                color: chosenColor
            }

        })
        eventHub.dispatchEvent(colorChosenEvent)
    }
})

/* 
    ThemeButtons() has to be imported on the main.js page
    This is because we want the buttons to load with the 
    browser on its initial load 
*/
export const ThemeButtons = () => {
    contentTarget.innerHTML = `
        <button class="btnTheme" id="btnTheme--red">Red</button>
        <button class="btnTheme" id="btnTheme--purple">Purple</button>
        <button class="btnTheme" id="btnTheme--blue">Blue</button>
        <button class="btnTheme" id="btnTheme--green">Green</button>
    `
}


/*

- With this code in both ThemeButtons.js & MessageList.js - the two are now decoupled. This 
means changes in one will not effect/break the other. If the, for example, 
id"btnTheme--whatevercolor" is ever changed, then you merely need to to change that 
also here in the 'if' statement. So changes only have to be made locally rather than other
modules breaking and having to bounce around to differnt ones to make changes

*/
