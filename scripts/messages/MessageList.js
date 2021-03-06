import { useMessages } from "./MessageProvider.js"
import { Message } from "./Message.js"

const contentTarget = document.querySelector(".messages")
const eventHub = document.querySelector(".container")
/*
- '.container' in the index.html is the event hub because it is 
  the parent of both messages and themes
*/


eventHub.addEventListener("colorChosen", event => {
    const color = event.detail.color
        
    /* This below is saying take whatever color is taken from the 
    end of the id (ex.btnTheme--purple/green/etc) when that specific
    button  is clicked. Then use that word and turn it into a class 
    on the contentTarget, which in this case is the element with
    ".messages"*/
    /* the empty array before that means switch the class back to empty. Therefore 
    if one button was clicked after the other there wouldn't be two classes with 
    two colors on it but rather the most current one */
    contentTarget.classList = []
    contentTarget.classList.add(color)
})
    
    /*
    - e stands for event it has a property of target to select that and get its id 
    */


/*
    MessageList(), like ThemeButtons(), has to be imported to main.js
    so it will generate as soon as the browser is pull up
*/
export const MessageList = () => {
    const allMessages = useMessages()
    render(allMessages)
}

/*
 The .map() method creates a new array with the results of calling 
 a function for every array element.
*/

const render = messageArray => {
    const convertedMessages = messageArray.map(messageObject => {
        const messageHTML = Message(messageObject)
        return messageHTML
    })
    const combinedSections = convertedMessages.join("")
    contentTarget.innerHTML = combinedSections
}